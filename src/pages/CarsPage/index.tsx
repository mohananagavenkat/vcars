import { Box } from '@material-ui/core';
import React from 'react';
import CarsList from '../../components/CarsList';
import Navbar from '../../components/NavBar';
import { cars } from '../../data/cars';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { commonStyles } from '../../styles/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    ...commonStyles(theme),
    cardsWrapper: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
  }),
);

export default function CarsPage() {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box className={classes.cardsWrapper} mt={3} p={3}>
        <CarsList cars={cars} />
      </Box>
    </>
  );
}
