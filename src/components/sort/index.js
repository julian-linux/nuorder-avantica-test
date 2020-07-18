// Libraries
import React, {useRef, useState} from "react";

// Material Components
import Box from "@material-ui/core/Box";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

// Intl
import Intl, { onlyText } from "../../config/intl";

// Hooks
import usePaginationOptionsData from "../../hooks/usePaginationOptionsData";
import {useHotkeys} from "react-hotkeys-hook";

const sortOptions = [
  {
    value: "created-desc",
    name: onlyText("SORT_NEWEST"),
  },
  {
    value: "created-asc",
    name: onlyText("SORT_OLDEST"),
  },
  {
    value: "comments-desc",
    name: onlyText("SORT_MOST_COMMENTED"),
  },
  {
    value: "comments-asc",
    name: onlyText("SORT_LEAST_COMMENTED"),
  },
  {
    value: "updated-desc",
    name: onlyText("SORT_RECENTLY_UPDATED"),
  },
  {
    value: "updated-asc",
    name: onlyText("SORT_LEAST_RECENTLY_UPDATED"),
  },
];

const Sort = () => {
  // const classes = useStyles();
  const [setOptions, options] = usePaginationOptionsData();
  const [value, setValue] = useState(options.sort || "");

  const ref = useRef(null)

  useHotkeys("alt+7", () => {
    console.log(ref)
    ref.current.focus();
  });

  const handleChange = (evt) => {
    setValue(evt.target.value);
    setOptions({
      ...options,
      sort: evt.target.value,
    });
  };

  return (
    <Box style={{ width: "100%" }}>
      <Intl variant="caption" langKey={"SORT"} />
      <FormControl style={{ width: "100%" }} >
        <Select
          id="select-sort"
          value={value}
          onChange={handleChange}
          label={onlyText("SORT")}
          innerRef={ref}
        >
          <MenuItem value="">
            <em></em>
          </MenuItem>
          {sortOptions.map(({ name, value }) => (
            <MenuItem key={value} value={value}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Sort;
