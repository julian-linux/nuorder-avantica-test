// Libraries
import React from "react";

// Material Components
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";

// Intl
import { onlyText } from "../../config/intl";

const FastSearch = () => {
  return (
    <Box mb={2} style={{ width: "100%" }}>
      <TextField label={onlyText("FAST_SEARCH")} style={{ width: "100%" }} />
    </Box>
  );
};

export default FastSearch;
