import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import InputAdornment from "@material-ui/core/InputAdornment";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { connect } from "react-redux";
import { verCategorias, verResponsables } from "../redux/actions/torneos";
import FormularioTorneo from "../components/formularioTorneos";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  },
  fab: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

const Administracion = props => {
  useEffect(() => {
    props.verCategorias();
    props.verResponsables();
  }, []);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={6}>
          <FormularioTorneo
            paper={classes.paper}
            container={classes.container}
            textField={classes.textField}
            menu={classes.menu}
            fab={classes.fab}
            responsablesTorneo={props.responsablesTorneo}
            categoriasTorneo={props.categoriasTorneo}
          />
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
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
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cargandoTorneo: state.torneos.cargandoTorneo,
    categoriasTorneo: state.torneos.categoriasTorneo,
    responsablesTorneo: state.torneos.responsablesTorneo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    verCategorias: () => {
      dispatch(verCategorias());
    },
    verResponsables: () => {
      dispatch(verResponsables());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Administracion);
