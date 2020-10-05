import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '0 auto',
    marginTop: 10
   },
 });

export default function LabActivityCard(props) {
 const classes = useStyles();
//
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.activity.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Publish date: {props.activity.publish_date} <br/>
            Due date: {props.activity.due_date}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" target="_blank"  href={props.activity.repo}>
                Repo
        </Button>
      </CardActions>
    </Card>
    
  );
}