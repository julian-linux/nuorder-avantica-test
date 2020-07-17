// Libraries
import React, { useEffect } from "react";
import isEmpty from "lodash/isEmpty";

// Material Components
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
// Components
import AutocompleteComponent from "../autocomplete";
import Loading from "../loading";

// Hooks
import useContributorsData from "hooks/useContributorsData";
import usePaginationOptionsData from "hooks/usePaginationOptionsData";

// Intl
import Intl from "../../config/intl";

// Styles
import useStyles from "./styles";

const Assignee = () => {
  const classes = useStyles();
  const [getContributors, { loading, data }] = useContributorsData();
  const [setOptions, paginationOptions] = usePaginationOptionsData();

  const handleChange = (_, assignee) => {
    setOptions({
      ...paginationOptions,
      assignee: assignee ? assignee.login : undefined,
    });
  };

  useEffect(() => {
    getContributors();
  }, [getContributors]);

  if (isEmpty(data) || loading) {
    return <Loading />;
  }

  const renderOption = (option) => (
    <Box display="flex">
      <Avatar
        className={classes.iconSmall}
        src={option.avatar_url}
        alt={option.login}
      />
      <Typography>{option.login}</Typography>
    </Box>
  );

  return (
    <Box style={{ width: "100%" }}>
      <Intl variant="caption" langKey={"ASSIGNEE"} underlinePosition={1} />
      <AutocompleteComponent
        options={data}
        getOptionLabel={(option) => option.login}
        renderOption={renderOption}
        onChange={handleChange}
        multiple={false}
      />
    </Box>
  );
};

export default Assignee;
