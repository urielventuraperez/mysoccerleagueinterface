import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2)
  }
}));

export default function CircularDeterminate() {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    function tick() {
      // reset when reaching 100%
      setProgress(oldProgress => (oldProgress >= 100 ? 0 : oldProgress + 1));
    }

    const timer = setInterval(tick, 20);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <CircularProgress
        className={classes.progress}
        variant="determinate"
        value={progress}
        color="secondary"
      />
    </Grid>
  );
}
