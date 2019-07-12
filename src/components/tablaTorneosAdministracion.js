import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  paper: {
    marginTop: theme.spacing(3),
    width: "100%",
    overflowX: "auto",
    overflowY: "auto",
    marginBottom: theme.spacing(2)
  },
  table: {
    minWidth: 450,
    minHeight: 450
  }
}));

const TablaTorneos = props => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant="h6" component="h5">
        Torneos Disponibles
      </Typography>
      <Paper className={classes.paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell align="right">Costo Inscripcion</TableCell>
              <TableCell align="right">Costo Arbitraje</TableCell>
              <TableCell align="right">Categoria</TableCell>
              <TableCell align="right">Responsable</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.torneos.map(torneo => (
              <TableRow key={torneo.id}>
                <TableCell component="th" scope="row">
                  {torneo.nombre}
                </TableCell>
                <TableCell align="right">{torneo.costo_inscripcion}</TableCell>
                <TableCell align="right">{torneo.costo_arbitraje}</TableCell>
                <TableCell align="right">{torneo.categoria}</TableCell>
                <TableCell align="right">
                  {torneo.responsable_nombre} {torneo.responsable_apellido}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Paper>
  );
};

export default TablaTorneos;
