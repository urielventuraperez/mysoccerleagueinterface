import React from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(0),
    height: "80vh"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    background: theme.palette.primary.dark,
  },
}));

const HomeContainer = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root} maxWidth="xl">
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
    </Container>
  );
};

export default HomeContainer;
