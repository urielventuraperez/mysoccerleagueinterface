import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Formik } from "formik";
import { connect } from "react-redux";
import {
  verCategorias,
  agregarTorneo,
  verTorneos
} from "../redux/actions/torneos";
import {   verResponsables } from "../redux/actions/responsables";
import FormularioTorneo from "../components/formularioTorneos";
import TablaTorneos from "../components/tablaTorneosAdministracion";
import * as Yup from "yup";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(5),
    marginBottom: theme.spacing(10)
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

const validaciones = Yup.object({
  nombre: Yup.string()
    .required("El Nombre es requerido")
    .min(2, "Muy corto!")
    .max(35, "Exageras!"),
  costo_inscripcion: Yup.number("Enter your email").positive(
    "Añada el costo"
  ),
  responsable_id: Yup.string().required("agregue"),
  categoria_id: Yup.string().required("agregue")
});

const Administracion = props => {
  useEffect(() => {
    props.verCategorias();
    props.verResponsables();
    props.verTorneos();
  }, []);

  const valuesTournament = {
    nombre: "",
    categoria_id: "",
    responsable_id: "",
    costo_inscripcion: ""
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={4}>
          <Formik
            validationSchema={validaciones}
            initialValues={valuesTournament}
            onSubmit={(values, { resetForm }) => {
              props.agregarTorneo(values);
              resetForm("");
            }}
            render={prop => (
              <FormularioTorneo
                paper={classes.paper}
                textField={classes.textField}
                menu={classes.menu}
                fab={classes.fab}
                responsablesTorneo={props.responsablesTorneo}
                categoriasTorneo={props.categoriasTorneo}
                {...prop}
              />
            )}
          />
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <TablaTorneos torneos={props.torneos} />
          </Paper>
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
    torneos: state.torneos.torneos,
    categoriasTorneo: state.torneos.categoriasTorneo,
    responsablesTorneo: state.torneos.responsablesTorneo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    verTorneos: () => {
      dispatch(verTorneos());
    },
    verCategorias: () => {
      dispatch(verCategorias());
    },
    verResponsables: () => {
      dispatch(verResponsables());
    },
    agregarTorneo: torneo => {
      dispatch(agregarTorneo(torneo));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Administracion);
