// Libraries
import React from "react";

// Material Components
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

// Components
import AutocompleteComponent from "../autocomplete";

// Hooks
import usePaginationOptionsData from "hooks/usePaginationOptionsData";

// Intl
import Intl from "../../config/intl";

// Styles
import useStyles from "./styles";

const Author = () => {
  const classes = useStyles();
  const [setOptions, paginationOptions] = usePaginationOptionsData();

  const handleChange = (_, author) => {
    setOptions({
      ...paginationOptions,
      author,
    });
  };

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
      <Intl variant="caption" langKey={"AUTHOR"} underlinePosition={1} />
      <AutocompleteComponent
        getOptionLabel={(option) => option.login}
        renderOption={renderOption}
        onChange={handleChange}
        endpoint="/search/users"
        multiple={false}
      />
    </Box>
  );
};

export default Author;
