import React from 'react';
import Card from '@material-ui/core/Card';
import { CardContent, Typography, Grid } from '@material-ui/core';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3, 2),
    }
  }),
);
const Maintainer: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h2">
                Bervianto Leo Pratama
      </Typography>
              <Typography variant="body1">
                bervianto.leo@gmail.com
      </Typography>
            </CardContent>
          </Card>

        </Grid>
      </Grid>
    </div>
  );
}

export default Maintainer;