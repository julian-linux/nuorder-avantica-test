// Libraries
import React, { useEffect, useRef, useState, useMemo } from "react";
import PropTypes from "prop-types";
import debounce from 'lodash/debounce';

// Material Components
import Autocomplete from "@material-ui/lab/Autocomplete";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import CircularProgress from '@material-ui/core/CircularProgress';

// Intl
import {onlyText} from "config/intl";

// Api
import { getAutocompleteEndpoint } from 'state/api';

// Styles
import useStyles from './styles';

const callEndpoint = endpoint => async (params, callback) => {
  const  { data } = await getAutocompleteEndpoint(endpoint, params);
  callback(data.items);
};

const AutocompleteComponent = ({ options, getOptionLabel, onChange, multiple, renderOption, endpoint }) => {
  const classes = useStyles()
  const [inputValue, setInputValue] = useState('');
  const [autocompleteOptions, setAutocompleteOptions] = useState(options);
  const [loading, setLoading] = useState(false);

  const fetch = useMemo(() => debounce( callEndpoint(endpoint), 1000), [endpoint]);

  useEffect(() => {
    if(!endpoint) {
      return undefined
    }
    if (inputValue === '') {
      setAutocompleteOptions([]);
      return undefined;
    }

    if (inputValue && inputValue.length < 2) {
      return undefined;
    }

    setLoading(true);

    fetch({ q: inputValue, per_page: 5 }, response => {
      setAutocompleteOptions([...response]);
      setLoading(false);
    });
  }, [inputValue, fetch]);

  return (
    <Box>
      {loading && <CircularProgress color='primary' className={classes.icon} />}
    <Autocomplete
      style={{ width: "100%" }}
      multiple={multiple}
      onChange={onChange}
      options={autocompleteOptions}
      getOptionLabel={getOptionLabel}
      renderOption={renderOption}
      filterSelectedOptions
      autoComplete={!!endpoint}
      freeSolo={!!endpoint}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder={onlyText("SEARCH")}
          onChange={evt => endpoint && setInputValue(evt.target.value)}
        />
      )}
    />
    </Box>
  );
};

AutocompleteComponent.propTypes = {
  options: PropTypes.array,
  getOptionLabel: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  multiple: PropTypes.bool,
  renderOption: PropTypes.func,
};

AutocompleteComponent.defaultProps = {
  options: [],
  multiple: true,
  renderOption: undefined
}

export default AutocompleteComponent;
