import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import HomePage from '.';
import { MemoryRouter } from 'react-router';
let mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

test('render home page', async () => {
  render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>,
  );

  expect(screen.getByTestId('navbar')).toBeInTheDocument();
});

test('should call navigate when we click on view cars button', async () => {
  render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>,
  );

  const button = screen.getByRole('button', { name: 'View Cars' });

  fireEvent.click(button);

  expect(mockNavigate).toHaveBeenCalled();
});
