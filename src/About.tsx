import React from "react";
import Card from "@material-ui/core/Card";
import Gravatar from "react-gravatar";
import InstagramIcon from "@material-ui/icons/Instagram";
import GithubIcon from "@material-ui/icons/GitHub";
import {
  Avatar,
  CardHeader,
  CardContent,
  Typography,
  Grid,
} from "@material-ui/core";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

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
const About: React.FC = () => {
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
              title="Berv Project"
              subheader="bervianto.leo@gmail.com"
            ></CardHeader>
            <CardContent>
              <Typography variant="body1">Social Media</Typography>
              <a href="https://instagram.com/bervproject">
                <InstagramIcon />
              </a>
              <a href="https://github.com/bervProject">
                <GithubIcon />
              </a>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
