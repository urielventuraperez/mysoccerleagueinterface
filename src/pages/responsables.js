import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Container from "@material-ui/core/Container";
import CardRepresentantes from "../components/cardResponsables";
import {
  verResponsables,
} from "../redux/actions/responsables";
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(10)
  },
  card: {
    maxWidth: 345
  },
  icon: {
    color: theme.palette.secondary.main,
    fontSize: 12
  }
}));

const Representantes = props => {
  const classes = useStyles();

  useEffect((idResponsable) => {
    props.verResponsables();
  }, []);

  return (
    <Container maxWidth="md" className={classes.container}>
      {props.cargando ? (
        <LinearProgress color="secondary" variant="query" />
      ) : (
        <CardRepresentantes
          responsablesTorneo={props.responsablesTorneo}
          card={classes.card}
          icon={classes.icon}
        />
      )}
    </Container>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    verResponsables: () => dispatch(verResponsables()),
  };
};

const mapStateToProps = state => {
  return {
    responsablesTorneo: state.responsables.responsablesTorneo,
    cargando: state.responsables.cargando
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Representantes);
