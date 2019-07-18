import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import { verTorneos } from "../redux/actions/torneos";
import Load from "../components/load";
import CardTorneos from "../components/cardsTorneos";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6)
  },

  card: {
    maxWidth: "100%",
    "&:hover": {
      boxShadow: theme.shadows[2],
    }
  },
  media: {
    height: 140
  },
  paper:{
    boxShadow: theme.shadows[1],
  }
}));

const Torneos = props => {
  useEffect(() => {
    props.verTorneos();
  }, []);

  const classes = useStyles();
  return (
    <Container className={classes.container} maxWidth="lg">
      {props.cargandoTorneo ? (
        <Load />
      ) : (
        <Fade
          direction="up"
          in={!props.cargandoTorneo}
          mountOnEnter
          unmountOnExit
        >
          {props.torneos.error ? (
            <SnackbarContent
              className={classes.snackbar}
              message={props.torneos.error}
            />
          ) : (
            <CardTorneos
              loop={props.torneos}
              card={classes.card}
              media={classes.media}
              paper={classes.paper}
            />
          )}
        </Fade>
      )}
    </Container>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    verTorneos: () => {
      dispatch(verTorneos());
    }
  };
};

const mapStateToProps = state => {
  return {
    cargandoTorneo: state.torneos.cargandoTorneo,
    torneos: state.torneos.torneos
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Torneos);
