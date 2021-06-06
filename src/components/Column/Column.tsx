import React, { ReactElement } from 'react';
import { Card } from '../Card';
import TColumn from './types';
import './Column.css';

function Column({ id, label, cards }: TColumn): ReactElement {
  return (
    <li className="column">
      <h2 className="column__label">{label}</h2>
      <ul className="column__cards-list">
        {cards.map((card) => (
          <Card {...card} />
        ))}
      </ul>
    </li>
  );
}

export default Column;
