import React, { useState, useEffect } from 'react';

interface DataProviderType {
  children: any;
}

const DataContext = React.createContext<any>(null);

let initialState = false;

const DataProvider = (props: DataProviderType) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    console.log(state)
  }, [state]);

  return (
    <DataContext.Provider value={[state, setState]}>
      {props.children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
