import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Car } from '../../models/Car';

const useStyles = makeStyles({
  root: {
    width: 345,
    margin: '4px',
    color: '#fff',
  },
  media: {
    height: 140,
  },
  cardContent: {
    textAlign: 'left',
    background: '#fff',
    color: '#000',
  },
  carPropHeading: {
    textTransform: 'capitalize',
  },
});

interface Props {
  car: Car;
}

export default function CarCard({ car }: Props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={car.image}
          title={car.name}
        />
        <CardContent className={classes.cardContent}>
          {Object.keys(car).map(
            (carProp, index) =>
              carProp !== 'image' && (
                <Typography key={index}>
                  {' '}
                  <span className={classes.carPropHeading}>
                    {carProp}
                  </span> : {car[carProp as keyof Car]}{' '}
                </Typography>
              ),
          )}
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardContent}>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
