import React from "react";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DialogTorneos from "./dialogTorneos";
import { connect } from "react-redux";
import { verTorneosResponsable } from "../redux/actions/responsables";

const CardResponsables = props => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickId = id => {
    props.verTorneosResponsable(id);
  };

  return (
    <Grid container spacing={3}>
      {props.responsablesTorneo.map(responsable => (
        <Grid key={responsable.id} item md={3} xs={12}>
          <Card className={props.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt={responsable.alias}
                height="140"
                image="https://cdn.repretel.com/files/2018/09/13/1_1.jpg"
                title={responsable.alias}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {responsable.nombre} {responsable.apellido}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {responsable.alias}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                <Icon className={props.icon}>phone</Icon>
                {responsable.celular}
              </Button>
              <Button
                onClick={() => {
                  handleClickOpen();
                  handleClickId(responsable.id);
                }}
                size="small"
                color="primary"
              >
                <Icon className={props.icon}>security</Icon>Torneos
              </Button>
              <DialogTorneos
                key={responsable.id}
                torneos={props.torneosResponsable}
                open={open}
                onClose={handleClose}
              />
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

const mapStateToProps = state => {
  return {
    torneosResponsable: state.responsables.torneosResponsable
  };
};

const mapDispatchToProps = dispatch => {
  return {
    verTorneosResponsable: responsableId =>
      dispatch(verTorneosResponsable(responsableId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardResponsables);
