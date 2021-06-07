import { TCard, TColumn } from '../types';

export default function replaceAtIndex<ItemType extends TCard | TColumn>(
  collection: ItemType[],
  newItem: ItemType,
  index: number
): ItemType[] {
  const before = collection.slice(0, index);
  const after = collection.slice(index + 1);

  return [...before, newItem, ...after];
}
