import React, { useState, useEffect } from 'react';

interface DataProviderType {
  children: any;
}

const DataContext = React.createContext<any>(null);

let initialState = {
  countries: [],
  indicator: '',
  from: 0,
  to: 0,
};

const DataProvider = (props: DataProviderType) => {
  const [state, setState] = useState(initialState);

  return (
    <DataContext.Provider value={[state, setState]}>
      {props.children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
