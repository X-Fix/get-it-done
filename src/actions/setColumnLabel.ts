import { findIndex } from 'lodash';
import { TColumn } from '../types';
import { replaceAtIndex } from '../utils';

type SetColumnLabelPayload = { columnId: string; columnLabel: string };

export default function setColumnLabel(
  columns: TColumn[],
  { columnId, columnLabel }: SetColumnLabelPayload
): TColumn[] {
  const columnIndex = findIndex(columns, { id: columnId });
  const column = columns[columnIndex];
  const updatedColumn = {
    ...column,
    label: columnLabel,
  };

  return replaceAtIndex(columns, updatedColumn, columnIndex) as TColumn[];
}
