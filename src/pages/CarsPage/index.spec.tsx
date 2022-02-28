import React from 'react';
import { render, screen } from '@testing-library/react';
import CarsPage from '.';
import { MemoryRouter } from 'react-router-dom';

test('render cars page', async () => {
  render(
    <MemoryRouter>
      <CarsPage />
    </MemoryRouter>,
  );

  expect(screen.getByTestId('navbar')).toBeInTheDocument();
});
