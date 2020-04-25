import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '0 auto',
    marginTop: 10
   },
 });

export default function CourseCard(props) {
 const classes = useStyles();
//
  return (
    <Card className={classes.root}>
      <CardActionArea>
        {/* <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.course.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.course.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {props.course.links.map(el => (<Button size="small" color="primary" target="_blank"  href={el.link}>
                {el.label}
        </Button>))}
        
      </CardActions>
    </Card>
    
  );
}