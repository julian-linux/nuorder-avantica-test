import React from "react";
import AutocompleteComponent from "../autocomplete";
import usePaginationOptionsData from "../../hooks/usePaginationOptionsData";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

import useStyles from './styles'
import Intl from "../../config/intl";

const Author = () => {
  const classes = useStyles();
  const [setOptions, paginationOptions] = usePaginationOptionsData()

  const handleChange = (_, author) => {
    setOptions({
      ...paginationOptions,
      author: author ? author.login : undefined
    })
  }

  const renderOption = (option) => (
    <Box display='flex'>
      <Avatar
        className={classes.iconSmall}
        src={option.avatar_url}
        alt={option.login}
      />
      <Typography>{option.login}</Typography>
    </Box>
  )

  return (
    <Box style={{width: '100%'}}>
      <Intl variant="caption" langKey={"AUTHOR"} underlinePosition={1}/>
      <AutocompleteComponent
        getOptionLabel={(option) => option.login}
        renderOption={renderOption}
        onChange={handleChange}
        endpoint='/search/users'
        multiple={false}
      />
    </Box>
  );
};

export default Author;
