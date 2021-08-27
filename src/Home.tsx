import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3, 2),
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);
const Home: React.FC = () => {
  const [projects, setProjects] = useState<Array<any> | null>(null);
  const classes = useStyles();
  useEffect(() => {
    axios
      .get("https://api.github.com/orgs/bervProject/repos")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (projects === null) {
    return (
      <Container>
        <Typography
          variant="h1"
          component="h2"
          align="center"
          gutterBottom
          paragraph
        >
          Empty Project
        </Typography>
      </Container>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid key={project.id} item xs={6}>
            <Paper className={classes.paper}>
              <Typography variant="h5" component="h3">
                <a href={project.html_url}>{project.name}</a>
              </Typography>
              <Typography component="p">{project.description}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
