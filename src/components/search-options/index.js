// Libraries
import React from "react";

// Material Components
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import { useHotkeys } from "react-hotkeys-hook";

// Components
import Author from "../author";
import Assignee from "../assignee";
import Label from "../label";
import FastSearch from "../fast-search";
import Sort from "../sort";
import State from "../state";
import Reactions from "../reaction";
import Pagination from "../pagination";

// Icons
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

// Intl
import { onlyText } from "../../config/intl";

// Styles
import useStyles from "./styles";
import Language from "../language";

const SearchOptions = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  useHotkeys("alt+2", () => {
    setOpen(open => !open);
  });


  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          <Box className={classes.floatBoxContainer}>
            {onlyText("SEARCH_OPTIONS")}
            <Box className={classes.floatBox}>
              <Language />
            </Box>
          </Box>
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem>
        <FastSearch />
      </ListItem>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary={onlyText("ADVANCED_SEARCH")} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Divider variant="middle" component="li" />
        <List component="div" disablePadding>
          <ListItem className={classes.nested}>
            <State />
          </ListItem>
          <Divider variant="middle" component="li" />
          <ListItem className={classes.nested}>
            <Author />
          </ListItem>
          <Divider variant="middle" component="li" />
          <ListItem className={classes.nested}>
            <Assignee />
          </ListItem>
          <Divider variant="middle" component="li" />
          <ListItem className={classes.nested}>
            <Label />
          </ListItem>
          <Divider variant="middle" component="li" />
          <ListItem className={classes.nested}>
            <Sort />
          </ListItem>
          <Divider variant="middle" component="li" />
          <ListItem className={classes.nested}>
            <Reactions />
          </ListItem>
          <Divider variant="middle" component="li" />
          <ListItem className={classes.nested}>
            <Pagination />
          </ListItem>
          <Divider variant="middle" component="li" />
        </List>
      </Collapse>
    </List>
  );
};

export default SearchOptions;
