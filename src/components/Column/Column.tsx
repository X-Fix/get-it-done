import React, { ReactElement, useContext } from 'react';

import { Card } from '../Card';
import { TColumn } from '../../types';
import { AppContext } from '../../context';
import './Column.css';

function Column({ id, label, cards }: TColumn): ReactElement {
  const { addCard } = useContext(AppContext);

  return (
    <li className="column" data-testid="column">
      <h2 className="column__label">{label}</h2>
      <ul className="column__cards-list" data-testid="card-list">
        <>
          {cards.map((card) => (
            <Card key={card.id} {...card} />
          ))}
          <li className="column__add-card">
            <button
              className="column__add-card-button"
              onClick={() => {
                addCard(id);
              }}
            >
              + Add New Card
            </button>
          </li>
        </>
      </ul>
    </li>
  );
}

export default Column;
