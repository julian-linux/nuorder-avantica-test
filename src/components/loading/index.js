// Libraries
import React from "react";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

const Loading = ({ error }) => {
  if (error) {
    console.error("error", error);
  }
  return (
    <Grid container justify="center" alignItems="center" flex={1}>
      <Grid
        container
        item
        xs={12}
        sm={6}
        md={3}
        mt={5}
        justify="center"
        alignItems="center"
      >
        <CircularProgress color="primary" />
      </Grid>
    </Grid>
  );
};

export default Loading;
