import { TCard } from '../Card';

type TColumn = {
  id: string;
  label: string;
  cards: TCard[];
  order: number;
};

export default TColumn;
