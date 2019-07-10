import React, { useEffect } from "react";
import { connect } from "react-redux";
import { listarEquipo } from "../redux/actions/equipos";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import TablaEstadisticasEquipo from "../components/tablaEstadisticasEquipo";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  table: {
    minWidth: 650
  },
  paperTable: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  }
}));

const EstadisticasEquipo = props => {
  const {
    match: { params }
  } = props;

  const classes = useStyles();

  useEffect(() => {
    props.listarEquipo(params.equipoId);
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>xs=12</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            {props.cargandoEquipo ? (
              <CircularProgress
                className={classes.progress}
                color="secondary"
              />
            ) : (
              <TablaEstadisticasEquipo
                equipo={props.equipo}
                table={classes.table}
                paper={classes.paperTable}
              />
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>xs=12 sm=6</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    equipo: state.equipos.equipo,
    cargandoEquipo: state.equipos.cargandoEquipo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    listarEquipo: equipoId => dispatch(listarEquipo(equipoId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EstadisticasEquipo);
