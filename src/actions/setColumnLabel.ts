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
  const updateColumn = {
    ...column,
    label: columnLabel,
  };

  return replaceAtIndex(columns, updateColumn, columnIndex) as TColumn[];
}
