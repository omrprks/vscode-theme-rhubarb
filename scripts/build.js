#!/usr/bin/env node

const path = require('path');
const { spawn } = require('child_process');

const basedir = path.resolve(__dirname, '..');
const SRC = `${basedir}/src`;
const OUT = `${basedir}/themes/rhubarb-color-theme.json`

const jsonmerge = spawn('npx', [
  'jsonmerge',
  `-o${OUT}`,
  `${SRC}/main.json`,
  `colors:${SRC}/colors.json`,
  `tokenColors:${SRC}/tokenColors.json`,
]);

jsonmerge.stdout.on('data', (chunk) => console.log(chunk.toString()));
jsonmerge.stderr.on('data', (chunk) => console.error(`Error: ${chunk}`));
jsonmerge.on('close', (code) => console.log(`exited with code ${code}`));
