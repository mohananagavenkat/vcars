import { Car } from '../../models/Car';
import CarCard from '../CarCard';
import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

interface Props {
  cars: Car[];
}

const useStyles = makeStyles({
  sortWrapper: {
    width: '100%',
    margin: '0 1rem 1rem 0',
    color: '#fff',
  },
  sortElement: {
    width: '150px',
  },
  sortSelect: {
    background: '#fff',
  },
});

export default function CarsList({ cars }: Props) {
  const classes = useStyles();

  const [sortBy, setSortBy] = useState<keyof Car>('name');
  const [finalCars, setFinalCars] = useState<Car[]>([]);

  const handleChange = (event: any) => {
    setSortBy(event.target.value);
  };

  useEffect(() => {
    setFinalCars([...cars]);
  }, [cars]);

  useEffect(() => {
    const carsData = [
      ...cars.sort((a, b) =>
        a[sortBy]!! > b[sortBy]!! ? 1 : b[sortBy]!! > a[sortBy]!! ? -1 : 0,
      ),
    ];
    setFinalCars(carsData);
  }, [cars, sortBy]);

  return (
    <>
      <div data-testid="cars-list" className={classes.sortWrapper}>
        <FormControl className={classes.sortElement}>
          <InputLabel id="sort-cars">Sort By</InputLabel>
          <Select
            labelId="sort-cars"
            id="sortBy"
            value={sortBy}
            label="sortBy"
            onChange={handleChange}
            className={classes.sortSelect}
          >
            <MenuItem value={'name'}>Name</MenuItem>
            <MenuItem value={'miles_per_gallon'}>Miles Per Gallon</MenuItem>
            <MenuItem value={'cylinders'}>Cylinders</MenuItem>
            <MenuItem value={'displacement'}>displacement</MenuItem>
            <MenuItem value={'horsepower'}>horsepower</MenuItem>
            <MenuItem value={'weight_in_lbs'}>weight_in_lbs</MenuItem>
            <MenuItem value={'acceleration'}>acceleration</MenuItem>
            <MenuItem value={'year'}>year of release</MenuItem>
          </Select>
        </FormControl>
      </div>

      {finalCars.map(car => (
        <CarCard key={car.image} car={car} />
      ))}
    </>
  );
}
