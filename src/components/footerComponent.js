import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  container:{
      padding: theme.spacing(0),
  },
  linkContainer: {
    padding: theme.spacing(4),
    background: theme.palette.secondary.dark,
    height: "15vh",
  },
  link: {
    margin: theme.spacing(1)
  }
}));

const FooterContainer = () => {
  const classes = useStyles();

  return (
    <React.Fragment >
      <CssBaseline />
      <Container className={classes.container} maxWidth="xl">
        <Typography className={classes.linkContainer}>
          <Link href="#" className={classes.link}>
            Link
          </Link>
          <Link href="#" color="inherit" className={classes.link}>
            {'color="inherit"'}
          </Link>
          <Link href="#" variant="body2" className={classes.link}>
            {'variant="body2"'}
          </Link>
        </Typography>
      </Container>
    </React.Fragment>
  );
};

export default FooterContainer;
