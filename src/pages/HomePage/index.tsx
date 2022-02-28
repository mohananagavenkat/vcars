import { Box, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Navbar from '../../components/NavBar';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { commonStyles } from '../../styles/styles';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    ...commonStyles(theme),
    homeBanner: {
      minHeight: 'calc(100vh - 40px)',
      background: `${theme.palette.secondary.dark}`,
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap',
      alignContent: 'center',
    },
    bannerText: {
      fontWeight: 'bold',
      width: '100%',
    },
  }),
);

export default function HomePage() {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <Box className={classes.homeBanner}>
        <Typography
          className={classes.bannerText}
          gutterBottom
          variant="h1"
          component="h1"
        >
          Welcome V CARS
        </Typography>
        <Button onClick={() => navigate('/cars')} className={classes.button}>
          View Cars
        </Button>
      </Box>
    </div>
  );
}
