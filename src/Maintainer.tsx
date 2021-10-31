import React from "react";
import Card from "@mui/material/Card";
import Gravatar from "react-gravatar";
import GitHubIcon from "@mui/icons-material/GitHub";
import {
  Avatar,
  CardHeader,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";
import { Theme } from "@mui/material/styles";

import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3, 2),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  })
);
const Maintainer: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card>
            <CardHeader
              avatar={
                <Avatar className={classes.large}>
                  <Gravatar
                    email="bervianto.leo@gmail.com"
                    className={classes.large}
                  />
                </Avatar>
              }
              title="Bervianto Leo Pratama"
              subheader="bervianto.leo@gmail.com"
            ></CardHeader>
            <CardContent>
              <Typography variant="body1">Social Media</Typography>
              <a href="https://github.com/berviantoleo">
                <GitHubIcon />
              </a>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Maintainer;
