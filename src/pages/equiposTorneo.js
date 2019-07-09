import React, { useEffect } from "react";
import { verEquiposTorneos } from "../redux/actions/torneos";
import { connect } from "react-redux";
import LinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
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

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6)
  },
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
}));

const EquiposTorneo = props => {
  const {
    match: { params }
  } = props;

  useEffect(() => {
    props.verEquiposTorneos(params.torneoId);
  }, []);
  const classes = useStyles();
  return (
    <Container className={classes.container} maxWidth="lg">
      <Typography variant="h3" component="h3">
        {props.location.state.cardNombre}
      </Typography>
      {console.log(props)}
      {props.cargandoTorneo ? (
        <LinearProgress color="secondary" />
      ) : (
        
        props.equiposTorneo.status === 'error' ? <h1>Nada</h1> :
        
        props.equiposTorneo.map(equipo => (
          <Card className={classes.card}>
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
              className={classes.media}
              image="/static/images/cards/paella.jpg"
              title="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
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
        ))
      )}
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    cargandoTorneo: state.torneos.cargandoTorneo,
    equiposTorneo: state.torneos.equiposTorneo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    verEquiposTorneos: torneoId => {
      dispatch(verEquiposTorneos(torneoId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EquiposTorneo);
