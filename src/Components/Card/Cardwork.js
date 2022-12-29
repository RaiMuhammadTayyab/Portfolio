import React from 'react'
import './Cardstyles.css'

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//import { red} from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    color:"red"

    
  },
  
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  color:"red",
  
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

export const Cardwork = ({ Srcimg,title,text,Date,Area}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
        <div className='Project-Card'>
        <img className='Img-wind' src={Srcimg} alt="wind"/>
        <h2 className='Project-Title'>{title}</h2> 
      <Card className={classes.root}>
      
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph color='inherit'>
          {title}
          </Typography>
         
          <Typography paragraph color='primary' >
            {text}
          </Typography>
          <Typography paragraph color='primary'>
          {Area}
          </Typography>
          <Typography paragraph color="primary">
          { Date}
          </Typography>
        </CardContent>
      </Collapse>
      


    </Card>
      </div>
      
      

  )
}
