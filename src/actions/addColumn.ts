import { nanoid } from 'nanoid';
import { TColumn } from '../types';

export default function addColumn(columns: TColumn[]): TColumn[] {
  return [
    ...columns,
    {
      id: nanoid(),
      label: `Column ${columns.length + 1}`,
      order: columns.length,
      cards: [],
    },
  ];
}
