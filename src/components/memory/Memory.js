import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  settings: {
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  caption: {
    marginRight: '8px',
  },
}));


export default function Memory({ memory }) {
  const classes = useStyles();
  console.log("memory", memory.data)
  return (
    <Grid item xs={3}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image="https://images.theconversation.com/files/250919/original/file-20181217-185258-1gc7soo.jpg"
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {memory.data.words}
        </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <Typography className={classes.caption} variant="caption" color="textSecondary" component="p">
            {memory.data.location}
          </Typography>
          <Typography className={classes.caption} variant="caption" color="textSecondary" component="p">
            {memory.data.date}
          </Typography>

          <IconButton
            className={classes.settings}
            aria-label="settings"
          >
            <MoreVertIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}
