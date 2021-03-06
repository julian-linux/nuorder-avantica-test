// Libraries
import React, {useRef} from "react";
import isEmpty from "lodash/isEmpty";
import { useHotkeys } from "react-hotkeys-hook";

// Material Components
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";

// Components
import AutocompleteComponent from "../autocomplete";

// Hooks
import useIssuesData from "hooks/useIssuesData";

// Intl
import Intl from "../../config/intl";

// Styles
import useStyles from "./styles";
import ErrorIcon from "@material-ui/icons/Error";
import { green } from "@material-ui/core/colors";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const FastSearch = () => {
  const classes = useStyles();
  const [getIssues, { setIssues }] = useIssuesData();
  const ref = useRef(null)

  useHotkeys("alt+1", () => {
    ref.current.focus();
  });

  const handleRef = aref => {
    ref.current=aref.current
  }

  const handleChange = (_, issue) => {
    if (!isEmpty(issue)) {
      setIssues([issue]);
    } else {
      getIssues();
    }
  };

  const renderOption = (option) => (
    <Box display="flex">
      {option.state === "open" ? (
        <ErrorIcon fontSize="small" style={{ color: green[500] }} />
      ) : (
        <CheckCircleIcon color="primary" fontSize="small" />
      )}
      <Box>
        <Box>
          <span
            style={{ color: "red", fontSize: 10 }}
          >{` #${option.number} `}</span>
          <span style={{ fontSize: 12 }}>{option.title.slice(0, 25)}</span>
        </Box>
        <Box display="flex">
          <Avatar
            className={classes.iconSmall}
            src={option.user.avatar_url}
            alt={option.user.login}
          />
          <span style={{ fontSize: 12 }}>{option.user.login}</span>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box style={{ width: "100%", marginLeft: 10 }}>
      <Intl variant="caption" langKey={"FAST_SEARCH"} />
      <AutocompleteComponent
        getOptionLabel={(option) => option.title}
        renderOption={renderOption}
        onChange={handleChange}
        endpoint="/repos/facebook/react/issues"
        multiple={false}
        onHandleRef={handleRef}
      />
    </Box>
  );
};

export default FastSearch;
