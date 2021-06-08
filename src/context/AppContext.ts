import { nanoid } from 'nanoid';
import { createContext, useState } from 'react';

import { TAppContext, TColumn } from '../types';
import {
  addCard,
  addColumn,
  moveCardToColumn,
  setCardProperty,
  setColumnLabel,
} from '../actions';

const defaultState = [
  {
    id: nanoid(),
    label: 'Column 1',
    cards: [
      {
        id: nanoid(),
        label: '> Click me! <',
        description:
          "Click this card's heading or description to edit the text",
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
        label: 'Add more of me!',
        description:
          'Click the "+ Add New Card" or "+ Add New Column" button to add another of the respective items',
        order: 0,
      },
      {
        id: nanoid(),
        label: 'Move me!',
        description:
          'Use the arrows in the top-right corner of this card to move it between columns',
        order: 1,
      },
      {
        id: nanoid(),
        label: 'Edit the title!',
        description:
          "That's right! you can even change the name of this trello board by editing the title in the top-left corner of the page",
        order: 1,
      },
    ],
    order: 1,
  },
];

const defaultContext: TAppContext = {
  columns: [],
  addColumn: () => {},
  setColumnLabel: () => {},
  addCard: () => {},
  setCardLabel: () => {},
  setCardDescription: () => {},
  moveCardToColumn: () => {},
};

function useAppContext(initialState?: TColumn[]): TAppContext {
  const [_columns, _setState] = useState<TColumn[]>(
    initialState ?? defaultState
  );

  function _addColumn() {
    _setState(addColumn(_columns));
  }

  function _setColumnLabel(columnId: string, columnLabel: string): void {
    _setState(setColumnLabel(_columns, { columnId, columnLabel }));
  }

  function _addCard(columnId: string): void {
    _setState(addCard(_columns, { columnId }));
  }

  function _setCardLabel(
    columnId: string,
    cardId: string,
    cardLabel: string
  ): void {
    _setState(
      setCardProperty(_columns, {
        columnId,
        cardId,
        key: 'label',
        value: cardLabel,
      })
    );
  }

  function _setCardDescription(
    columnId: string,
    cardId: string,
    cardDescription: string
  ): void {
    _setState(
      setCardProperty(_columns, {
        columnId,
        cardId,
        key: 'description',
        value: cardDescription,
      })
    );
  }

  function _moveCardToColumn(
    columnId: string,
    direction: 'left' | 'right',
    cardId: string
  ): void {
    _setState(moveCardToColumn(_columns, { columnId, direction, cardId }));
  }

  return {
    columns: _columns,
    addColumn: _addColumn,
    setColumnLabel: _setColumnLabel,
    addCard: _addCard,
    setCardLabel: _setCardLabel,
    setCardDescription: _setCardDescription,
    moveCardToColumn: _moveCardToColumn,
  };
}

const AppContext = createContext<TAppContext>(defaultContext);

export { AppContext, useAppContext };
