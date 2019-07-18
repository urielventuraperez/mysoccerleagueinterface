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
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { MenuTournamentManagement } from "../utils/menuItems";

const CardTorneos = props => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [idTorneo, setIdTorneo] = React.useState(0);

  function handleClickListItem(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleIdTorneo(id) {
    setIdTorneo(id);
  }

  function handleClose() {
    setAnchorEl(null);
  }

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
                  onClick={event => {
                    handleClickListItem(event);
                    handleIdTorneo(l.id);
                  }}
                  size="small"
                  color="primary"
                >
                  Administracion
                </Button>
                <Menu
                  id="lock-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  className={props.paper}
                >
                  {MenuTournamentManagement.map(menu => (
                    <MenuItem
                      key={menu.id}
                      component={Link}
                      to={{
                        pathname: menu.link+idTorneo,
                        state: {
                          cardNombre: l.nombre
                        }
                      }}
                    >
                      {menu.nombre}
                    </MenuItem>
                  ))}
                </Menu>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default CardTorneos;
