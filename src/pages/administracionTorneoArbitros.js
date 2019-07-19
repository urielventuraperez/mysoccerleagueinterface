import React, { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { verArbitros, verArbitrosTorneo } from "../redux/actions/arbitros";
import { connect } from "react-redux";
import ListaArbitros from "../components/listArbitros";
import CardArbitros from "../components/cardArbitros";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  container: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3)
  },
  paper: {
    background: theme.palette.secondary.light,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.primary.contrastText
  }
}));

const AdministracionTorneoArbitros = props => {
  const {
    match: { params }
  } = props;
  const classes = useStyles();
  useEffect(() => {
    props.verArbitros();
    props.verArbitrosTorneo(params.torneoId);
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography component="h5" variant={"h5"}>
          {props.location.state.cardNombre}
        </Typography>
        <Grid className={classes.container} container spacing={3}>
          <Grid item xs={12} md={8}>
            <Paper className={classes.paper}>
              <Typography component="h4" variant={"h5"}>
                Arbitros Torneo:
              </Typography>
              <CardArbitros arbitrosTorneo={props.arbitrosTorneo} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper className={classes.paper}>
              <Typography component="h4" variant={"h5"}>
                Arbitros Registrados
              </Typography>
              {props.cargando ? (
                <CircularProgress disableShrink />
              ) : (
                  <ListaArbitros arbitros={props.arbitros} />
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    cargando: state.arbitros.cargando,
    arbitros: state.arbitros.arbitros,
    arbitrosTorneo: state.arbitros.arbitrosTorneo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    verArbitros: () => dispatch(verArbitros()),
    verArbitrosTorneo: idTorneo => dispatch(verArbitrosTorneo(idTorneo))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdministracionTorneoArbitros);
