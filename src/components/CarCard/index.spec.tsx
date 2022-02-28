import React from 'react';
import { render, screen } from '@testing-library/react';
import CarCard from '.';

const car = {
  name: 'plymouth satellite',
  miles_per_gallon: 18,
  cylinders: 8,
  displacement: 318,
  horsepower: 150,
  weight_in_lbs: 3436,
  acceleration: 11,
  year: '1970-01-01',
  origin: 'USA',
  image:
    'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8MjR8fGNhcnN8ZW58MHx8fHwxNjQ2MDQzOTY3&ixlib=rb-1.2.1&q=80&w=200',
};

test('render navbar', async () => {
  render(<CarCard car={car} />);

  expect(screen.getByText('plymouth satellite')).toBeInTheDocument();
});

test('should render all the data related to car', async () => {
  render(<CarCard car={car} />);

  expect(screen.getByText('plymouth satellite')).toBeInTheDocument();
  expect(screen.getByText('18')).toBeInTheDocument();
  expect(screen.getByText('8')).toBeInTheDocument();
  expect(screen.getByText('318')).toBeInTheDocument();
  expect(screen.getByText('1970-01-01')).toBeInTheDocument();
});

test('should render the image of the car', async () => {
  render(<CarCard car={car} />);

  expect(screen.getByTitle('plymouth satellite')).toBeInTheDocument();
});
