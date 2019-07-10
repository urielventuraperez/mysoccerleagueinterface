import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import RemoveRedEye from "@material-ui/icons/RemoveRedEye";
import ShareIcon from "@material-ui/icons/Share";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

const EquiposTorneo = props => {
  return (
    <Grid container>
      {props.listaEquipos.map(equipo => (
        <Grid key={equipo.id} item xs={12} md={4}>
          <Card className={props.cardStyle}>
            <CardHeader
              title={equipo.nombre}
              subheader={equipo.descripcion}
            />
            <CardMedia
              className={props.mediaStyle}
              image="data:image/jpeg;base64,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"
              title="Paella dish"
            />
            <CardActions disableSpacing>
              <IconButton component={ Link } to={{ pathname: `/estadisticas/equipo/${equipo.id}` }} aria-label="Add to favorites">
                <RemoveRedEye />
              </IconButton>
              <IconButton aria-label="Share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default EquiposTorneo;