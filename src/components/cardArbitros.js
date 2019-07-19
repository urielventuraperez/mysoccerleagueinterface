import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles(theme => ({
  card: {
    display: "flex"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 151
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  playIcon: {
    height: 38,
    width: 38
  }
}));

const CardArbitros = props => {
  const { arbitrosTorneo } = props;
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      {console.log(arbitrosTorneo)}
      {arbitrosTorneo.length ? (
        arbitrosTorneo.map(arbitro => (
          <div key={arbitro.id}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h6" variant="h6">
                  {arbitro.nombre}
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  {arbitro.alias}
                </Typography>
              </CardContent>
            </div>
            <CardMedia
              className={classes.cover}
              image="/static/images/cards/live-from-space.jpg"
              title="Live from space album cover"
            />
          </div>
        ))
      ) : (
        <Typography>Sin Arbitros</Typography>
      )}
    </Card>
  );
};

export default CardArbitros;
