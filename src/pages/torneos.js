import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import { verTorneos } from "../redux/actions/torneos";
import Load from "../components/load";
import Card from "../components/cards";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6)
  },

  card: {
    maxWidth: 345
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
      {props.cargando ? (
        <Load />
      ) : (
        <Card loop={props.torneos} card={classes.card} media={classes.media} />
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
    cargando: state.torneos.cargando,
    torneos: state.torneos.torneos
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Torneos);
