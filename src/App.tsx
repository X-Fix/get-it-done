import React from 'react';
import { nanoid } from 'nanoid';

import './App.css';
import { Column, TColumn } from './components/Column';

const columns: TColumn[] = [
  {
    id: nanoid(),
    label: 'Column 1',
    cards: [
      {
        id: nanoid(),
        label: 'Card 3',
        description: 'The last task on my to-do list',
        order: 0,
      },
    ],
    order: 0,
  },
  {
    id: nanoid(),
    label: 'Column 2',
    cards: [
      {
        id: nanoid(),
        label: 'Card 1',
        description: 'The first task on my to-do list',
        order: 0,
      },
      {
        id: nanoid(),
        label: 'Card 2',
        description: 'The second task on my to-do list',
        order: 1,
      },
    ],
    order: 1,
  },
];

function App() {
  return (
    <div className="app">
      <h1 className="app__heading">Get it done!</h1>
      <ul className="app__column-list">
        {columns.map((column) => (
          <Column {...column} />
        ))}
      </ul>
    </div>
  );
}

export default App;
