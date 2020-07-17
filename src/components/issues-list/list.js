// Libraries
import React, { useState, useRef } from "react";
import ReactMarkdown from "react-markdown";
import map from "lodash/map";
import { useHotkeys } from "react-hotkeys-hook";

// Material Components
import { green, grey } from "@material-ui/core/colors";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import MaterialList from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

//Icons
import ErrorIcon from "@material-ui/icons/Error";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import LabelIcon from "@material-ui/icons/Label";
import ModeCommentIcon from "@material-ui/icons/ModeComment";

// Intl
// import Intl from 'config/intl';

import { useListStyles } from "./styles";

const List = ({ issues }) => {
  const classes = useListStyles();
  const [selectedItem, setSelectedItem] = useState(0);
  const listEl = useRef(null);
  useHotkeys("up", () =>
    setSelectedItem((selectedItem) => {
      if (selectedItem >= 0) {
        return selectedItem - 1;
      }
    })
  );
  useHotkeys("down", () => setSelectedItem((selectedItem) => selectedItem + 1));
  useHotkeys("ctrl+i", () => {
    listEl.current.focus();
  });

  return (
    <MaterialList className={classes.root} ref={listEl}>
      {map(
        issues,
        ({ number, state, title, user, body, comments, html_url }, idx) => (
          <ListItem
            key={number}
            divider
            selected={idx === selectedItem}
            autoFocus={idx === selectedItem}
          >
            <Grid container>
              <Grid item container xs={12} md={8}>
                <Box display="flex">
                  <Box mr={1}>
                    {state === "open" ? (
                      <ErrorIcon
                        fontSize="small"
                        style={{ color: green[500] }}
                      />
                    ) : (
                      <CheckCircleIcon color="primary" fontSize="small" />
                    )}
                  </Box>
                  <Typography variant="body2">
                    <Link href={html_url} target="_blank">
                      <Typography variant="caption" color="secondary">
                        {` #${number} `}
                      </Typography>
                      {title}
                    </Link>
                  </Typography>
                </Box>
                <Box className={`issues-list-body ${classes.body}`}>
                  <Typography variant="caption">
                    <ReactMarkdown source={body} escapeHtml={false} />
                  </Typography>
                </Box>
              </Grid>
              <Grid item container xs={12} md={4} wrap="nowrap">
                <Grid item container wrap="nowrap" xs={12}>
                  {/*user*/}
                  <Box mr={1}>
                    <Avatar
                      className={classes.iconSmall}
                      src={user.avatar_url}
                      alt={user.login}
                    />
                  </Box>
                  <Typography variant="body2" color="primary">
                    {user.login}
                  </Typography>
                </Grid>
                <Grid item container wrap="nowrap" xs={12}>
                  {/*label*/}
                  <Box display="flex">
                    <Box ml={1}>
                      <LabelIcon fontSize="small" color="secondary" />
                    </Box>
                    <Typography variant="body2" color="secondary">
                      {comments}
                    </Typography>
                  </Box>
                  {/*comment*/}
                  <Box ml={3}>
                    <ModeCommentIcon
                      fontSize="small"
                      style={{ color: grey["500"] }}
                    />
                  </Box>
                  <Typography variant="body2" style={{ color: grey["500"] }}>
                    {comments}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </ListItem>
        )
      )}
    </MaterialList>
  );
};

export default List;
