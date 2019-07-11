import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import InputAdornment from "@material-ui/core/InputAdornment";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { connect } from "react-redux";
import { agregarTorneo } from "../redux/actions/torneos";

const FormularioTorneos = props => {
  const {
    values: { nombre, categoria_id, responsable_id, costo_inscripcion },
    errors,
    touched,
    handleChange,
    isValid,
    setFieldTouched
  } = props;

  const change = (name, e) => {
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
  };

  const onSubmitValues = {
    nombre,
    categoria_id,
    responsable_id,
    costo_inscripcion
  };

  const handleAdd = (event) =>{
    event.preventDefault();
    props.agregarTorneo(onSubmitValues)
   };

  return (
    <Paper className={props.paper}>
      <Typography variant="h4" component="h3">
        Torneos
      </Typography>
      <form
        onSubmit={(e) => {
          handleAdd(e)
        }}
        className={props.container}
        autoComplete="off"
      >
        <TextField
          id="nombre"
          label="Nombre *"
          className={props.textField}
          value={nombre}
          type="text"
          name="nombre"
          margin="normal"
          variant="outlined"
          onChange={change.bind(null, "nombre")}
          helperText={touched.nombre ? errors.nombre : ""}
          error={touched.nombre && Boolean(errors.nombre)}
        />
        <TextField
          id="costo_inscripcion"
          className={props.textField}
          value={costo_inscripcion}
          variant="outlined"
          label="Inscripcion"
          name="costo_inscripcion"
          helperText={touched.costo_inscripcion ? errors.costo_inscripcion : ""}
          error={touched.costo_inscripcion && Boolean(errors.costo_inscripcion)}
          margin="normal"
          onChange={change.bind(null, "costo_inscripcion")}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>
          }}
        />
        <TextField
          id="categoria_id"
          name="categoria_id"
          value={categoria_id}
          onChange={change.bind(null, "categoria_id")}
          helperText={touched.categoria_id ? errors.categoria_id : ""}
          error={touched.categoria_id && Boolean(errors.categoria_id)}
          select
          label="Categoria"
          className={props.textField}
          SelectProps={{
            MenuProps: {
              className: props.menu
            }
          }}
          margin="normal"
          variant="outlined"
        >
          {props.categoriasTorneo.map(categoria => (
            <MenuItem key={categoria.id} value={categoria.id}>
              {categoria.nombre}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="responsable_id"
          name="responsable_id"
          value={responsable_id}
          onChange={change.bind(null, "responsable_id")}
          helperText={touched.responsable_id ? errors.responsable_id : ""}
          error={touched.responsable_id && Boolean(errors.responsable_id)}
          select
          label="Responsable"
          className={props.textField}
          SelectProps={{
            MenuProps: {
              className: props.menu
            }
          }}
          margin="normal"
          variant="outlined"
        >
          {props.responsablesTorneo.map(responsable => (
            <MenuItem key={responsable.id} value={responsable.id}>
              {responsable.nombre}
            </MenuItem>
          ))}
        </TextField>
        <Fab
          disabled={!isValid}
          type="submit"
          color="secondary"
          aria-label="Add"
          className={props.fab}
        >
          <AddIcon />
        </Fab>
      </form>
    </Paper>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    agregarTorneo: (torneo) => {
      dispatch(agregarTorneo(torneo));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(FormularioTorneos);
