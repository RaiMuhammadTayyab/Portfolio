import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 330,
    marginLeft:10,
    justifyContent:"centre"
  },
  media: {
    height: 330,
   
  },
  
});

export default function Award2( props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.img}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.tex}>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
