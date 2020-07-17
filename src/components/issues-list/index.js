// Libraries
import React, { useEffect, useMemo } from "react";
import isEmpty from "lodash/isEmpty";

// Material Components
import Box from "@material-ui/core/Box";

// Components
import List from "./list";
import Loading from "../loading";
import Pagination from "../pagination";

// Intl
import Intl from "../../config/intl";

// Hooks
import useIssuesData from "hooks/useIssuesData";

// Styles
import useStyles from "./styles";

const IssuesList = () => {
  const classes = useStyles();
  const [getIssues, { loading, data }] = useIssuesData();

  useEffect(() => {
    getIssues();
  }, [getIssues]);

  const renderLoading = loading && <Loading />;

  const renderResults = useMemo(
    () =>
      isEmpty(data) ? (
        <Intl langKey="NO_ISSUES" variant="h3" color="primary" />
      ) : (
        <List issues={data}></List>
      ),
    [data]
  );

  return (
    <Box className={classes.root}>
      <Box display="flex" justifyContent="space-between">
        <Box mt={1}>
          <Intl
            langKey="ISSUES"
            variant="h4"
            color="primary"
            underlinePosition={0}
          />
        </Box>
        <Pagination show="pagination" />
      </Box>
      {renderLoading}
      {!loading && renderResults}
    </Box>
  );
};

export default IssuesList;
