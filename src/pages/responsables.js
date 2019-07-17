import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CardRepresentantes from "../components/cardRepresentantes";
import { verResponsables } from "../redux/actions/responsables";
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

  useEffect(() => {
    props.verResponsables();
  }, []);

  return (
    <Container maxWidth="md" className={classes.container}>
      <CardRepresentantes
        responsablesTorneo={props.responsablesTorneo}
        card={classes.card}
        icon={classes.icon}
      />
    </Container>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    verResponsables: () => dispatch(verResponsables())
  };
};

const mapStateToProps = state => {
  return {
    responsablesTorneo: state.torneos.responsablesTorneo
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Representantes);
