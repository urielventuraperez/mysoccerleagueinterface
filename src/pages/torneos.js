import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import { verTorneos } from "../redux/actions/torneos";
import Load from "../components/load";
import CardTorneos from "../components/cardsTorneos";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6)
  },

  card: {
    maxWidth: '100%'
  },
  media: {
    height: 140
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
        <CardTorneos loop={props.torneos} card={classes.card} media={classes.media} />
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
