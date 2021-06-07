import TColumn from './Column';

type TAppState = {
  columns: TColumn[];
  addColumn: () => void;
  setColumnLabel: (columnId: string, columnLabel: string) => void;
  addCard: (columnId: string) => void;
  setCardLabel: (columnId: string, cardId: string, cardLabel: string) => void;
  setCardDescription: (
    columnId: string,
    cardId: string,
    cardDescription: string
  ) => void;
  moveCardToColumn: (
    columnId: string,
    direction: 'left' | 'right',
    cardId: string
  ) => void;
};

export default TAppState;
