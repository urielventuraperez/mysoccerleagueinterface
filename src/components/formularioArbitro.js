import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const FormAgregarArbitro = props => {
  const {
    values: { nombre, apellido, alias, celular },
    errors,
    touched,
    handleChange,
    isValid,
    setFieldTouched,
    handleSubmit
  } = props;

  const [open, setOpen] = React.useState(false);
  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  const change = (name, e) => {
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
  };

  return (
    <div>
      <Fab onClick={handleClickOpen} color="secondary" aria-label="Add">
        <AddIcon />
      </Fab>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <form onSubmit={handleSubmit}>
          <DialogTitle id="form-dialog-title">Agregar Arbitro</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Llene el siguiente formulario para agregar un arbitro.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="nombre"
              name="nombre"
              label="Nombre"
              type="text"
              value={nombre}
              onChange={change.bind(null, "nombre")}
              helperText={touched.nombre ? errors.nombre : ""}
              error={touched.nombre && Boolean(errors.nombre)}
              fullWidth
            />
            <TextField
              margin="dense"
              id="apellido"
              name="apellido"
              label="Apellido"
              type="text"
              value={apellido}
              onChange={change.bind(null, "apellido")}
              helperText={touched.apellido ? errors.apellido : ""}
              error={touched.apellido && Boolean(errors.apellido)}
              fullWidth
            />
            <TextField
              margin="dense"
              id="alias"
              nombre="alias"
              label="Alias"
              type="text"
              value={alias}
              onChange={change.bind(null, "alias")}
              helperText={touched.alias ? errors.alias : ""}
              error={touched.alias && Boolean(errors.alias)}
              fullWidth
            />
            <TextField
              margin="dense"
              id="celular"
              name="celular"
              label="Celular"
              type="text"
              value={celular}
              onChange={change.bind(null, "celular")}
              helperText={touched.celular ? errors.celular : ""}
              error={touched.celular && Boolean(errors.celular)}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Cancelar
            </Button>
            <Button
              aria-label="Add"
              type="submit"
              disabled={!isValid}
              color="secondary"
            >
              Aceptar
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default FormAgregarArbitro;
