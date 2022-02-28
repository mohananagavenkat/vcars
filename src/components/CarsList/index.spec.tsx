import React from 'react';
import { render, screen } from '@testing-library/react';
import CarsList from '.';

const cars = [
  {
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
  },
  {
    name: 'amc rebel sst',
    miles_per_gallon: 16,
    cylinders: 8,
    displacement: 304,
    horsepower: 150,
    weight_in_lbs: 3433,
    acceleration: 12,
    year: '1970-01-01',
    origin: 'USA',
    image:
      'https://images.unsplash.com/photo-1522932467653-e48f79727abf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8MjV8fGNhcnN8ZW58MHx8fHwxNjQ2MDQzOTY3&ixlib=rb-1.2.1&q=80&w=200',
  },
];

test('render navbar', async () => {
  render(<CarsList cars={[]} />);

  expect(screen.getByLabelText('Sort By')).toBeInTheDocument();
});
test('should render provided cars', async () => {
  const { container } = render(<CarsList cars={cars} />);
  expect(container.getElementsByClassName('MuiCard-root').length).toBe(2);
});

test('should render cars by sorting on name', async () => {
  const { container } = render(<CarsList cars={cars} />);
  const carsList = container.getElementsByClassName('MuiCard-root');
  expect(
    carsList[0].getElementsByClassName('heading-test')[0].textContent,
  ).toBe('amc rebel sst');
});
