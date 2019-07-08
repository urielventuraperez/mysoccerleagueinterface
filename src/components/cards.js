import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const CardTorneos = props => {
  return (
    <Grid container spacing={3}>
      {props.loop.map(l => {
        return (
          <Grid item xs={12} md={4}>
            <Card key={l.id} className={props.card}>
              <CardActionArea>
                <CardMedia
                  className={props.media}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {l.nombre}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  />
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" />
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default CardTorneos;
