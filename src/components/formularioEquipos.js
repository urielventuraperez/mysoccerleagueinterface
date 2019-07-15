import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const FormularioEquipos = props => {
  const {
    values: { nombre, descripcion, inscripcion_abono },
    errors,
    touched,
    handleChange,
    isValid,
    setFieldTouched,
    handleSubmit
  } = props;

  const change = (name, e) => {
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
  };

  return (
    <Paper /*className={props.paper}*/>
      <Typography variant="h6" component="h5">
        Agregar Equipo
      </Typography>
      <form
        /*className={props.container}*/
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          fullWidth
          id="nombre"
          label="Nombre *"
          /*className={props.textField}*/
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
          fullWidth
          id="descripcion"
          label="Descripcion"
          /*className={props.textField}*/
          value={descripcion}
          type="text"
          name="descripcion"
          margin="normal"
          variant="outlined"
          onChange={change.bind(null, "descripcion")}
          helperText={touched.descripcion ? errors.descripcion : ""}
          error={touched.descripcion && Boolean(errors.descripcion)}
        />
        <TextField
          fullWidth
          id="inscripcion_abono"
          /*className={props.textField}*/
          value={inscripcion_abono}
          variant="outlined"
          label="Inscripcion* abono"
          name="inscripcion_abono"
          helperText={touched.inscripcion_abono ? errors.inscripcion_abono : ""}
          error={touched.inscripcion_abono && Boolean(errors.inscripcion_abono)}
          margin="normal"
          onChange={change.bind(null, "inscripcion_abono")}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>
          }}
        />
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

export default FormularioEquipos;
