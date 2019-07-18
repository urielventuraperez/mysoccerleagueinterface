import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Icon from "@material-ui/core/Icon";
import MenuIcon from "@material-ui/icons/Menu";
import MailIcon from "@material-ui/icons/Mail";
import FirstPage from "@material-ui/icons/FirstPage";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Slide from "@material-ui/core/Slide";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { MenuUserItems } from "../utils/menuItems";
import { withRouter } from "react-router-dom";
import routes from "../routes";

const drawerWidth = 240;

const HideOnScroll = props => {
  const { children } = props;
  const trigger = useScrollTrigger({ target: window });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

HideOnScroll.propTypes = {
  children: PropTypes.node.isRequired,
  window: PropTypes.func
};

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  show: {
    transform: "translateY(0)",
    transition: "transform .5s"
  },
  hide: {
    transform: "translateY(-110%)",
    transition: "transform .5s"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    color: theme.palette.primary.text
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: drawerWidth
  },
  title: {
    flexGrow: 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.primary.main
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-start"
  },
  drawerItem:{
    fontWeight: '900',
    '&:hover' :{
      backgroundColor: theme.palette.secondary.main
    }
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(0),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: 0
  },
  icono: {
    color: theme.palette.primary.dark
  },
  superUserIcon: {
    color: theme.palette.secondary.dark
  }
}));

const ButtonAppBar = withRouter(({ history, ...props }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="Menu"
              className={classes.menuButton}
              onClick={() => history.goBack(-1)}
              label="Atras"
              value="atras"
            >
              <KeyboardArrowLeft />
            </IconButton>

            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              component={Link}
              to="/"
            >
              <FirstPage />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              News
            </Typography>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              className={clsx(open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon className={classes.icono} />
            ) : (
              <ChevronRightIcon className={classes.icono} />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {MenuUserItems.map(menu => (
            <ListItem
            className={classes.drawerItem}
              key={menu.id}
              button
              color="inherit"
              component={Link}
              to={menu.link}
            >
              <ListItemIcon>
                <Icon className={classes.icono}>{menu.icono}</Icon>
              </ListItemIcon>
              <ListItemText primary={menu.nombre} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <ListItem
            button
            color="inherit"
            component={Link}
            to="/administracion"
          >
            <ListItemIcon className={classes.superUserIcon}>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Administración" />
          </ListItem>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        {routes}
      </main>
    </React.Fragment>
  );
});

export default ButtonAppBar;
