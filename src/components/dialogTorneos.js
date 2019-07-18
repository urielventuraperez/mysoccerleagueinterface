import React from "react";
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import BubbleChart from "@material-ui/icons/BubbleChart";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import { Link } from "react-router-dom";

const DialogTorneos = props => {
  const { onClose, selectedValue, leader, ...other } = props;

  function handleClose() {
    onClose(selectedValue);
  }

  function handleListItemClick(value) {
    onClose(value);
  }

  return (
    <Dialog onClose={handleClose} {...other}>
      <DialogTitle>Set backup account</DialogTitle>
      <List>
        {props.torneos.map(torneo => (
          <ListItem
            button
            component={Link}
            to={{
              pathname: `/torneo/${torneo.id}/equipos`,
              state: {
                cardNombre: torneo.nombre
              }
            }}
            onClick={() => handleListItemClick(torneo)}
            key={torneo.id}
          >
            <ListItemAvatar>
              <BubbleChart />
            </ListItemAvatar>
            <ListItemText primary={torneo.nombre} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
};

DialogTorneos.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
  selectedValue: PropTypes.string
};

export default DialogTorneos;
