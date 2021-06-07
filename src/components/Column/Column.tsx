import React, {
  memo,
  ReactElement,
  useContext,
  useEffect,
  useRef,
} from 'react';

import { Card } from '../Card';
import { TColumn } from '../../types';
import { AppContext } from '../../context';
import './Column.css';

const _labelInitialHeight = '1.875rem';

function Column({ id, label, cards }: TColumn): ReactElement {
  const { addCard, setColumnLabel } = useContext(AppContext);
  const labelRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!labelRef) return;

    const columnLabel = labelRef.current as HTMLTextAreaElement;

    columnLabel.style.height = _labelInitialHeight;
    columnLabel.style.height = `${columnLabel.scrollHeight}px`;
  }, [label]);

  return (
    <li className="column" data-testid="column">
      <textarea
        className="column__label"
        onChange={({ target: { value } }) => setColumnLabel(id, value)}
        ref={labelRef}
        value={label}
      />
      <ul className="column__cards-list" data-testid="card-list">
        <>
          {cards.map((card) => (
            <Card key={card.id} columnId={id} {...card} />
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

export default memo(Column);
