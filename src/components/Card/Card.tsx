import React, { ReactElement, useContext, useEffect, useRef } from 'react';
import { AppContext } from '../../context';
import { TCard } from '../../types';
import './Card.css';

type CardProps = TCard & { columnId: string };
const _labelInitialHeight = '1.75rem';
const _descriptionInitialHeight = '1.25rem';

function Card({ columnId, id, label, description }: CardProps): ReactElement {
  const { setCardLabel, setCardDescription, moveCardToColumn } =
    useContext(AppContext);
  const labelRef = useRef<HTMLTextAreaElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  const handleMoveCard = (direction: 'left' | 'right') => {
    moveCardToColumn(columnId, direction, id);
  };

  useEffect(() => {
    if (!labelRef) return;

    const cardLabel = labelRef.current as HTMLTextAreaElement;

    cardLabel.style.height = _labelInitialHeight;
    cardLabel.style.height = `${cardLabel.scrollHeight}px`;
  }, [label]);

  useEffect(() => {
    if (!descriptionRef) return;

    const cardDescription = descriptionRef.current as HTMLTextAreaElement;

    cardDescription.style.height = _descriptionInitialHeight;
    cardDescription.style.height = `${cardDescription.scrollHeight}px`;
  }, [description]);

  return (
    <li className="card">
      <button
        className="card__move-button card__move-button--left"
        title="Click to move this card to the previous column"
        onClick={() => handleMoveCard('left')}
      >
        {'<'}
      </button>
      <button
        className="card__move-button card__move-button--right"
        title="Click to move this card to the next column"
        onClick={() => handleMoveCard('right')}
      >
        {'>'}
      </button>
      <textarea
        className="card__label"
        onChange={({ target: { value } }) => setCardLabel(columnId, id, value)}
        ref={labelRef}
        value={label}
      />
      <textarea
        className="card__description"
        onChange={({ target: { value } }) =>
          setCardDescription(columnId, id, value)
        }
        ref={descriptionRef}
        value={description}
      />
    </li>
  );
}

export default Card;
