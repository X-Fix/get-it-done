import { TColumn, TCard } from '../types';
import { getItemById, replaceAtIndex } from '../utils';

type SetCardPropertyPayload = {
  columnId: string;
  cardId: string;
  key: 'label' | 'description';
  value: string;
};

export default function setCardProperty(
  columns: TColumn[],
  { columnId, cardId, key, value }: SetCardPropertyPayload
): TColumn[] {
  const { item: column, index: columnIndex } = getItemById<TColumn>(
    columns,
    columnId
  );
  const { item: card, index: cardIndex } = getItemById<TCard>(
    column.cards,
    cardId
  );
  const updatedCard = {
    ...card,
    [key]: value,
  };
  const updatedColumn = {
    ...column,
    cards: replaceAtIndex(column.cards, updatedCard, cardIndex),
  };

  return replaceAtIndex(columns, updatedColumn, columnIndex);
}
