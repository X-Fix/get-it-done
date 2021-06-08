import React, { useEffect } from 'react';

import './App.css';
import { Column } from './components/Column';
import { AppContext, useAppContext } from './context/AppContext';

const getStateFromStorage = () => {
  try {
    const stateString = window.localStorage.getItem('state');

    if (stateString !== null) {
      return JSON.parse(stateString);
    }
  } catch (jsonParseError) {
    window.localStorage.clear();
  }
};

const initialState = getStateFromStorage();

function App() {
  const context = useAppContext(initialState);
  const { columns, addColumn } = context;

  useEffect(() => {
    window.localStorage.setItem('state', JSON.stringify(columns));
  }, [columns]);

  return (
    <AppContext.Provider value={context}>
      <div className="app">
        <h1 className="app__heading">Get it done!</h1>
        <ul className="app__column-list" data-testid="column-list">
          <>
            {columns.map((column) => (
              <Column key={column.id} {...column} />
            ))}
            <li className="app__add-column">
              <button className="app__add-column-button" onClick={addColumn}>
                + Add New Column
              </button>
            </li>
          </>
        </ul>
      </div>
    </AppContext.Provider>
  );
}

export default App;
