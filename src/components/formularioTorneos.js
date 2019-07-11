import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import InputAdornment from "@material-ui/core/InputAdornment";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const FormularioTorneos = props => {
  const [values, setValues] = React.useState({
    amount: ""
  });
  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <Paper className={props.paper}>
      <Typography variant="h4" component="h3">
        Torneos
      </Typography>
      <form className={props.container} noValidate autoComplete="off">
        <TextField
          id="outlined-email-input"
          label="Nombre *"
          className={props.textField}
          type="text"
          name="nombre"
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-adornment-amount"
          className={props.textField}
          variant="outlined"
          label="Inscripcion"
          name="costo_inscripcion"
          type="number"
          pattern="[0-9]{0,5}"
          margin="normal"
          onChange={handleChange("amount")}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>
          }}
        />
        <TextField
          id="outlined-select-currency"
          select
          label="Categoria"
          className={props.textField}
          SelectProps={{
            MenuProps: {
              className: props.menu
            }
          }}
          helperText="Selecciona la categoria"
          margin="normal"
          variant="outlined"
        >
          {props.categoriasTorneo.map(categoria => (
            <MenuItem
              key={categoria.id}
              name="categoria_id"
              value={categoria.id}
            >
              {categoria.nombre}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-select-currency"
          select
          label="Responsable"
          className={props.textField}
          SelectProps={{
            MenuProps: {
              className: props.menu
            }
          }}
          helperText="Selecciona un responsable"
          margin="normal"
          variant="outlined"
        >
          {props.responsablesTorneo.map(responsable => (
            <MenuItem
              key={responsable.id}
              name="responsable_id"
              value={responsable.id}
            >
              {responsable.nombre}
            </MenuItem>
          ))}
        </TextField>
        <Fab color="secondary" aria-label="Add" className={props.fab}>
          <AddIcon />
        </Fab>
      </form>
    </Paper>
  );
};

export default FormularioTorneos;
