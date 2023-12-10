import React, { useState } from 'react';

interface InputProviderType {
  children: any;
}

const InputContext = React.createContext<any>(null);

let initialState = {
  countries: [],
  indicator: '',
  from: 0,
  to: 0,
};

const InputProvider = (props: InputProviderType) => {
  const [state, setState] = useState(initialState);

  // useEffect(() => {
  //   console.log(state)
  // }, [state]);

  return (
    <InputContext.Provider value={[state, setState]}>
      {props.children}
    </InputContext.Provider>
  );
};

export { InputContext, InputProvider };
