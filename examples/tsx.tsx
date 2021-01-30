import React, {
  ReactElement,
  ReactNode,
  Component,
  StrictMode,
  useState,
  useEffect,
} from 'react';

"https://www.google.com/"

// Comment
type Props = {
  children: ReactNode;
};

export const object = {
  1: 'one',
  2: 'two',
  3: 'three',
};

export const array = [
  'one',
  'two',
  'three',
];

class MyComponent extends Component {
  method = (): string => '';

  render(): ReactElement {
    this.method();

    return (
      <div>
        <></>
      </div>
    );
  }
}

/* Block comment */
export const App = (props: Props): ReactElement => {
  const { children } = props;
  const [state, setState] = useState<boolean>(false);

  useEffect((): VoidFunction => {
    setState(true);

    return (): void => { /**/ };
  }, [setState]);

  return (
    <StrictMode>
      <MyComponent />
      {state ? <div>state</div> : <div>!state</div>}
      {children}
    </StrictMode>
  )
};

export default App;
