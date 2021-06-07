import { findIndex } from 'lodash';
import { TCard, TColumn } from '../types';

export default function getItemById<ItemType extends TCard | TColumn>(
  collection: ItemType[],
  id: string
): { index: number; item: ItemType } {
  const index = findIndex(collection, (currentItem) => currentItem.id === id);
  const item = collection[index];

  return {
    index,
    item,
  };
}
