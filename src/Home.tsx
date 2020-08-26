import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3, 2),
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);
const Home: React.FC = () => {
  const classes = useStyles();
  return (<div className={classes.root}>
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <Typography variant="h5" component="h3">
            This is a sheet of paper.
              </Typography>
          <Typography component="p">
            Paper can be used to build surface or other elements for your application.
              </Typography>
        </Paper>
      </Grid>

      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <Typography variant="h5" component="h3">
            This is a sheet of paper.
              </Typography>
          <Typography component="p">
            Paper can be used to build surface or other elements for your application.
              </Typography>
        </Paper>
      </Grid>

      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <Typography variant="h5" component="h3">
            This is a sheet of paper.
              </Typography>
          <Typography component="p">
            Paper can be used to build surface or other elements for your application.
              </Typography>
        </Paper>
      </Grid>

      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <Typography variant="h5" component="h3">
            This is a sheet of paper.
              </Typography>
          <Typography component="p">
            Paper can be used to build surface or other elements for your application.
              </Typography>
        </Paper>
      </Grid>
    </Grid>
  </div>
  );
}

export default Home;