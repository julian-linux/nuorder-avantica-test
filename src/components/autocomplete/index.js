// Libraries
import React, { useEffect, useState, useMemo, useRef } from "react";
import PropTypes from "prop-types";
import debounce from "lodash/debounce";

// Material Components
import Autocomplete from "@material-ui/lab/Autocomplete";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";

// Intl
import { onlyText } from "config/intl";

// Api
import { getAutocompleteEndpoint } from "state/api";

// Styles
import useStyles from "./styles";

const callEndpoint = (endpoint) => async (params, callback) => {
  const { data } = await getAutocompleteEndpoint(endpoint, params);
  callback(data.items || data);
};

const AutocompleteComponent = ({
  options,
  getOptionLabel,
  onChange,
  multiple,
  renderOption,
  endpoint,
onHandleRef
}) => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState("");
  const [autocompleteOptions, setAutocompleteOptions] = useState(options);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null)

  const fetch = useMemo(() => debounce(callEndpoint(endpoint), 1000), [
    endpoint,
  ]);

  useEffect(() => {
    if (!endpoint) {
      return undefined;
    }
    if (inputValue === "") {
      setAutocompleteOptions([]);
      return undefined;
    }

    if (inputValue && inputValue.length < 2) {
      return undefined;
    }

    setLoading(true);

    fetch({ q: inputValue, per_page: 5 }, (response) => {
      setAutocompleteOptions(response);
      setLoading(false);
    });
  }, [inputValue, fetch, endpoint]);

  useEffect(() => {
    if(onHandleRef) {
      onHandleRef(inputRef)
    }
  }, [onHandleRef])

  return (
    <Box>
      {loading && <CircularProgress color="primary" className={classes.icon} />}
      <Autocomplete
        multiple={multiple}
        onChange={onChange}
        filterOptions={(x) => x}
        options={autocompleteOptions}
        getOptionLabel={getOptionLabel}
        renderOption={renderOption}
        filterSelectedOptions
        autoComplete
        includeInputInList
        freeSolo={!!endpoint}
        renderInput={(params) => (
          <TextField
            {...params}
            inputRef={inputRef}
            placeholder={onlyText("SEARCH")}
            onChange={(evt) => endpoint && setInputValue(evt.target.value)}
          />
        )}
      />
    </Box>
  );
};

AutocompleteComponent.propTypes = {
  getOptionLabel: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array,
  multiple: PropTypes.bool,
  renderOption: PropTypes.func,
};

AutocompleteComponent.defaultProps = {
  options: [],
  multiple: true,
  renderOption: undefined,
};

export default AutocompleteComponent;
