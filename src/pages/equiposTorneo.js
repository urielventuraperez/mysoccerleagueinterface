import React, { useEffect } from "react";
import { verEquiposTorneos } from "../redux/actions/torneos";
import { connect } from "react-redux";
import LinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import CardEquiposTorneos from "../components/cardsEquiposTorneo";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6)
  },
  gridContainer:{
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6)
  },
  card: {
    margin: theme.spacing(5),
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  snackbar: {
    background: theme.palette.secondary.main,
    margin: theme.spacing(5)
  }
}));

const EquiposTorneo = props => {
  const {
    match: { params }
  } = props;

  useEffect(() => {
    props.verEquiposTorneos(params.torneoId);
  }, []);
  const classes = useStyles();
  return (
    <Container className={classes.container} maxWidth="lg">
      <Typography variant="h3" component="h3">
        {props.location.state.cardNombre}
      </Typography>

      <Grid className={classes.gridContainer} container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            {props.cargandoTorneo ? (
              <LinearProgress color="secondary" />
            ) : props.equiposTorneo.status === "error" ? (
              <div>
                <SnackbarContent
                  className={classes.snackbar}
                  message={"Este torneo aún no tiene Equipos asignados."}
                />
              </div>
            ) : (
              <CardEquiposTorneos
                cardStyle={classes.card}
                mediaStyle={classes.media}
                listaEquipos={props.equiposTorneo}
              />
            )}
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    cargandoTorneo: state.torneos.cargandoTorneo,
    equiposTorneo: state.torneos.equiposTorneo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    verEquiposTorneos: torneoId => {
      dispatch(verEquiposTorneos(torneoId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EquiposTorneo);
