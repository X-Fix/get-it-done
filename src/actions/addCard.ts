import { nanoid } from 'nanoid';
import { TCard, TColumn } from '../types';
import { getItemById, replaceAtIndex } from '../utils';

type AddCardPayload = { columnId: string };

export default function addCard(
  columns: TColumn[],
  { columnId }: AddCardPayload
): TColumn[] {
  const { item: column, index: columnIndex } = getItemById<TColumn>(
    columns,
    columnId
  );
  const newCard: TCard = {
    id: nanoid(),
    label: `Card ${column.cards.length + 1}`,
    order: column.cards.length,
    description: 'Click here to edit description',
  };
  const updatedColumn = {
    ...column,
    cards: [...column.cards, newCard],
  };

  return replaceAtIndex(columns, updatedColumn, columnIndex);
}
