import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import patrocinadores from "../utils/patrocinadores"

const useStyles = makeStyles(theme => ({
  rootImage: {
    flexGrow: 1,
    padding: theme.spacing(0)
  },
  rootEquipos: {
    flexGrow: 1,
    padding: theme.spacing(5)
  },
  containerImage: {
    padding: theme.spacing(0)
  },
  homeImage: {
    height: "75vh",
    textAlign: "center",
    background: theme.palette.primary.dark
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  rootInverst: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.primary.dark,
  },
}));

const HomeEquipos = () => {
  const classes = useStyles();
  return (
    <Container className={classes.rootEquipos} maxWidth="xl">
      <Grid container spacing={5}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>xs=4</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>xs=4</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>xs=4</Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

const HomeStats = () => {
  const classes = useStyles();
  return (
    <Container className={classes.rootEquipos} maxWidth="xl">
      <Grid container spacing={5}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

const HomeInverst = () => {
  const classes = useStyles();
  return (
    <div className={classes.rootInverst}>
      <GridList style={{ width:'100%' }} cellHeight={160} cols={12}>
        {patrocinadores.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Container className={classes.rootImage} maxWidth="xl">
        <Grid className={classes.containerImage} item xs={12}>
          <Paper className={classes.homeImage}>xs=12</Paper>
        </Grid>
      </Container>
      <HomeEquipos />
      <HomeStats />
      <HomeInverst />
    </div>
  );
};

export default Home;
