import React from 'react';

import './App.css';
import { Column } from './components/Column';
import { AppContext, useAppContext } from './context/AppContext';

function App() {
  const context = useAppContext();
  const { columns, addColumn } = context;

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
