import { find, filter } from 'lodash';
import { TColumn, TCard } from '../types';
import { getItemById } from '../utils';

type MoveCardToColumnPayload = {
  columnId: string;
  direction: 'left' | 'right';
  cardId: string;
};

export default function moveCardToColumn(
  columns: TColumn[],
  { columnId, direction, cardId }: MoveCardToColumnPayload
): TColumn[] {
  const { item: oldColumn, index: columnIndex } = getItemById<TColumn>(
    columns,
    columnId
  );

  if (
    (direction === 'left' && columnIndex === 0) ||
    (direction === 'right' && columnIndex === columns.length - 1)
  ) {
    return columns;
  }

  const newColumnIndex = columnIndex + (direction === 'left' ? -1 : 1);
  const newColumn = columns[newColumnIndex];

  const card = find(oldColumn.cards, { id: cardId }) as TCard;

  return columns.map((column) => {
    if (column.id === oldColumn.id) {
      return {
        ...oldColumn,
        cards: filter(oldColumn.cards, (card) => card.id !== cardId) as TCard[],
      };
    }

    if (column.id === newColumn.id) {
      return {
        ...newColumn,
        cards: [...newColumn.cards, card],
      };
    }

    return column;
  });
}
