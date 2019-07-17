import React from "react";
import PropTypes from "prop-types";
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import AddIcon from '@material-ui/icons/Add';

const emails = ['username@gmail.com', 'user02@gmail.com'];

const DialogTorneos = (props) => {
    const { onClose, selectedValue, ...other } = props;
  
    function handleClose() {
      onClose(selectedValue);
    }
  
    function handleListItemClick(value) {
      onClose(value);
    }
  
    return (
      <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" {...other}>
        <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
        <List>
          {emails.map(email => (
            <ListItem button onClick={() => handleListItemClick(email)} key={email}>
              <ListItemAvatar>
                <Avatar>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={email} />
            </ListItem>
          ))}
  
          <ListItem button onClick={() => handleListItemClick('addAccount')}>
            <ListItemAvatar>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="add account" />
          </ListItem>
        </List>
      </Dialog>
    );
  }

  DialogTorneos.propTypes = {
    onClose: PropTypes.func,
    open: PropTypes.bool,
    selectedValue: PropTypes.string,
  };
  
export default DialogTorneos;