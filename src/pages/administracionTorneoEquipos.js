import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  container:{
    marginTop:theme.spacing(3),
    marginBottom:theme.spacing(3),
  },
  paper: {
    background: theme.palette.secondary.light,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.primary.contrastText
  }
}));

const AdministracionTorneoEquipos = props => {
  const classes = useStyles();

  const {
    match: { params }
  } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        {props.location.state.cardNombre}
        <Grid className={classes.container} container spacing={3}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Typography>Equipos Torneo: {params.torneoId}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default AdministracionTorneoEquipos;
