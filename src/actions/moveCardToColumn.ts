import { find, filter } from 'lodash';
import { TColumn, TCard } from '../types';

type MoveCardToColumnPayload = {
  oldColumnId: string;
  newColumnId: string;
  cardId: string;
};

export default function moveCardToColumn(
  columns: TColumn[],
  { oldColumnId, newColumnId, cardId }: MoveCardToColumnPayload
): TColumn[] {
  const oldColumn = find(columns, { id: oldColumnId }) as TColumn;
  const newColumn = find(columns, { id: newColumnId }) as TColumn;
  const card = find(oldColumn.cards, { id: cardId }) as TCard;

  return columns.map((column) => {
    if (column.id === oldColumnId) {
      return {
        ...oldColumn,
        cards: filter(oldColumn.cards, (card) => card.id !== cardId) as TCard[],
      };
    }

    if (column.id === newColumnId) {
      return {
        ...newColumn,
        cards: [...newColumn.cards, card],
      };
    }

    return column;
  });
}
