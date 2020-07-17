import React from "react";

// Material Components
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

// Components
import SearchOptions from "./components/search-options";
import IssuesList from "./components/issues-list";

const App = () => {
  return (
    <Box mt={2}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <SearchOptions />
        </Grid>

        <Grid item xs={12} md={9}>
          <IssuesList />
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;
