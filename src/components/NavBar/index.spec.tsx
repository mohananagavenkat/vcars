import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '.';

test('render navbar', async () => {
  render(<Navbar />);

  expect(screen.getByTestId('navbar')).toBeInTheDocument();
});
