import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const TablaEstadisticasEquipo = props => {
  return (
    <Paper className={props.paper}>
      <Table className={props.table}>
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="right">Alias</TableCell>
            <TableCell align="right">Goles</TableCell>
            <TableCell align="right">Faltas</TableCell>
            <TableCell align="right">Amonestaciones</TableCell>
            <TableCell align="right">Expulsiones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.equipo.map(e => {
            return e.jugadores.map(jugador => {
              return (
                <TableRow key={jugador.id}>
                  <TableCell component="th" scope="row">
                    {jugador.nombre} {jugador.apellido}
                  </TableCell>
                  <TableCell align="right">{jugador.alias}</TableCell>
                  <TableCell align="right">{jugador.pivot.gol}</TableCell>
                  <TableCell align="right">{jugador.pivot.falta}</TableCell>
                  <TableCell align="right">
                    {jugador.pivot.amonestacion}
                  </TableCell>
                  <TableCell align="right">{jugador.pivot.expulsion}</TableCell>
                </TableRow>
              );
            });
          })}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default TablaEstadisticasEquipo;
