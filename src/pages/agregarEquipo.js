import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import * as Yup from "yup";
import { Formik } from "formik";
import FormularioEquipos from "../components/formularioEquipos";
import { connect } from "react-redux";
import { agregarEquipo } from "../redux/actions/equipos";

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
  }
}));

const validaciones = Yup.object({
  nombre: Yup.string().required("Añada"),
  descripcion: Yup.string().required("Añada"),
  inscripcion_abono: Yup.number().positive("Añada")
});

const AdministrarEquipos = props => {
  const {
    match: { params }
  } = props;

  const classes = useStyles();

  const valuesTeam = {
    nombre: "",
    descripcion: "",
    inscripcion_abono: ""
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>{params.torneoId}</Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <Formik
              validationSchema={validaciones}
              initialValues={valuesTeam}
              onSubmit={(values, { resetForm }) => {
                console.log(values);
                props.agregarEquipo(values, params.torneoId);
                resetForm("");
              }}
              render={prop => <FormularioEquipos {...prop} />}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={8}>
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
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    agregarEquipo: (equipo, torneoId) =>
      dispatch(agregarEquipo(equipo, torneoId))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AdministrarEquipos);
