import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Checkbox from "@material-ui/core/Checkbox";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import FormAgregarArbitro from "./formularioArbitro";
import { Formik } from "formik";
import * as Yup from "yup";

const validaciones = Yup.object({
  nombre: Yup.string()
    .required("El Nombre es requerido")
    .min(4, "No creo que su nombre sea corto...")
    .max(25, "Vaya nombre largo!"),
  apellido: Yup.string()
    .required("El Apellido es requerido")
    .min(3, "Apellido maya no es :/")
    .max(25, "No quieres poner su CURP? :D"),
  alias: Yup.string()
    .min(2, "Alias corto")
    .max(20, "Te pasaste bato!"),
  celular: Yup.string()
    .min(10, "Minimo 10 digitos")
    .max(20, "Tranquilo viejo, es un numero de celular")
});

const formArbitro = {
  nombre: "",
  apellido: "",
  alias: "",
  celular: ""
};

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  listItem: {
    color: theme.palette.text.primary
  },
  margin: {
    margin: theme.spacing(2),
    marginRight: theme.spacing(3)
  }
}));

const CheckboxListArbitros = props => {
  const { arbitros } = props;
  const classes = useStyles();
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List dense className={classes.root}>
      {arbitros.map(arbitro => {
        const labelId = `checkbox-list-secondary-label-${arbitro.id}`;
        return (
          <ListItem key={arbitro.id} button>
            <ListItemAvatar>
              <Badge
                className={classes.margin}
                badgeContent={arbitro.torneos_dirigidos}
                color="secondary"
              >
                <Avatar
                  alt={`Avatar n°${arbitro.id}`}
                  src={`/static/images/avatar/${arbitro.id}.jpg`}
                />
              </Badge>
            </ListItemAvatar>
            <ListItemText
              className={classes.listItem}
              id={arbitro.id}
              primary={arbitro.nombre}
            />
            <ListItemSecondaryAction>
              <Checkbox
                edge="end"
                onChange={handleToggle(arbitro.id)}
                checked={checked.indexOf(arbitro.id) !== -1}
                inputProps={{ "aria-labelledby": labelId }}
              />
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
      <Formik
        validationSchema={validaciones}
        initialValues={formArbitro}
        onSubmit={ (values) => {
          console.log(JSON.stringify(values))
        } }
        render={prop => <FormAgregarArbitro {...prop} />}
      />
    </List>
  );
};

export default CheckboxListArbitros;
