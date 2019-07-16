import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const CardTorneos = props => {
  const handleClick = event => {
    console.log(event.currentTarget);
  };

  return (
    <Grid container spacing={3}>
      {props.loop.map(l => {
        return (
          <Grid key={l.id} item xs={12} md={12}>
            <Card className={props.card}>
              <CardHeader
                action={
                  <IconButton
                    component={Link}
                    to={{ pathname: `/torneo/${l.id}/agregarEquipo` }}
                    onClick={event => handleClick(event)}
                    aria-label="Settings"
                  >
                    <MoreVertIcon />
                  </IconButton>
                }
                title={l.nombre}
                subheader={l.categoria}
              />
              <CardActionArea>
                <CardMedia
                  className={props.media}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Representante: {l.responsable_nombre}{" "}
                    {l.responsable_apellido}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  component={Link}
                  to={{
                    pathname: `/torneo/${l.id}/equipos`,
                    state: {
                      cardNombre: l.nombre
                    }
                  }}
                  size="small"
                  color="primary"
                >
                  Estadisticas
                </Button>
                <Button
                  component={Link}
                  to={{
                    pathname: `/administrar/torneo/${l.id}`,
                    state: {
                      cardNombre: l.nombre
                    }
                  }}
                  size="small"
                  color="primary"
                >
                  Administracion
                </Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default CardTorneos;
