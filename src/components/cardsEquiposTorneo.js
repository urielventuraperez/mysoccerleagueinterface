import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Grid from "@material-ui/core/Grid";

const EquiposTorneo = props => {
  return (
    <Grid container>
      {props.listaEquipos.map(equipo => (
    <Grid key={equipo.id} item xs={12} md={4}>
      <Card className={props.cardStyle}>
        <CardHeader
          action={
            <IconButton aria-label="Settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={equipo.nombre}
          subheader={equipo.descripcion}
        />
        <CardMedia
          className={props.mediaStyle}
          image="/static/images/cards/paella.jpg"
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
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
