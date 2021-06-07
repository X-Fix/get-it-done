import React, { ReactElement } from 'react';
import { TCard } from '../../types';
import './Card.css';

function Card({ id, label, description }: TCard): ReactElement {
  return (
    <li className="card">
      <h3 className="card__label">{label}</h3>
      <p className="card__description">{description}</p>
    </li>
  );
}

export default Card;
