import React, { useState } from "react";

import FormGroup from "@material-ui/core/FormGroup";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// Intl
import { onlyText } from "../../config/intl";

// Styles
import { AntSwitch } from "./styles";

const Language = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <FormGroup>
      <Typography component="div" style={{ fontSize: "9px" }}>
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>{onlyText("SPANISH")}</Grid>
          <Grid item>
            <AntSwitch
              checked={checked}
              onChange={handleChange}
              name="checked"
            />
          </Grid>
          <Grid item>{onlyText("ENGLISH")}</Grid>
        </Grid>
      </Typography>
    </FormGroup>
  );
};

export default Language;
