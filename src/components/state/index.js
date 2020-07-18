// Libraries
import React from "react";

// Material Components
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

// Intl
import Intl, { onlyText } from "../../config/intl";

// Styles
import useStyles from "./styles";
import usePaginationOptionsData from "hooks/usePaginationOptionsData";

const State = () => {
  const classes = useStyles();
  const [setOptions, options] = usePaginationOptionsData();

  const [value, setValue] = React.useState(options.state);

  const handleChange = (event) => {
    setValue(event.target.value);
    setOptions({
      ...options,
      state: event.target.value,
    });
  };

  return (
    <FormControl component="fieldset" className={classes.root}>
      <Intl variant="caption" langKey={"STATUS"} underlinePosition={1} />
      <RadioGroup
        aria-label="status"
        name="status"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          value="open"
          control={<Radio />}
          label={onlyText("STATUS.OPEN")}
        />
        <FormControlLabel
          value="closed"
          control={<Radio />}
          label={onlyText("STATUS.CLOSE")}
        />
        <FormControlLabel
          value="all"
          control={<Radio />}
          label={onlyText("ALL")}
        />
      </RadioGroup>
    </FormControl>
  );
};

export default State;
