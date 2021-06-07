import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('renders the default state', () => {
  render(<App />);

  const heading = screen.getByText(/Get it done!/i);
  const columns = screen.getAllByTestId('column');
  const cardLists = screen.getAllByTestId('card-list');

  expect(heading).toBeInTheDocument();
  expect(columns.length).toBe(2);
  expect(cardLists[0].children.length).toBe(2);
  expect(cardLists[1].children.length).toBe(3);
});

test('adds a new column', () => {
  render(<App />);

  expect(screen.getAllByTestId('column').length).toBe(2);

  userEvent.click(screen.getByText('+ Add New Column'));
  expect(screen.getAllByTestId('column').length).toBe(3);
});

test('adds a new card', () => {
  render(<App />);

  const firstCardList = screen.getAllByTestId('card-list')[0];
  expect(firstCardList.children.length).toBe(2);

  userEvent.click(screen.getAllByText('+ Add New Card')[0]);
  expect(firstCardList.children.length).toBe(3);
});
