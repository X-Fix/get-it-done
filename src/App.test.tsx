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
  expect(cardLists[1].children.length).toBe(4);
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

test('edits a column label', () => {
  render(<App />);

  const typedText = "Todo (haven't started)";
  const label = screen.getByText('Column 1');

  userEvent.clear(label);
  userEvent.type(label, typedText);
  expect(label.textContent).toBe(typedText);
});

test('edits a card label', () => {
  render(<App />);

  const typedText = 'First task';
  const label = screen.getByText('> Click me! <');

  userEvent.clear(label);
  userEvent.type(label, typedText);
  expect(label.textContent).toBe(typedText);
});

test('edits a card description', () => {
  render(<App />);
  userEvent.click(screen.getAllByText('+ Add New Card')[0]);

  const typedText = 'This is a new task';
  const description = screen.getByText('Click here to edit description');

  userEvent.clear(description);
  userEvent.type(description, typedText);
  expect(description.textContent).toBe(typedText);
});
