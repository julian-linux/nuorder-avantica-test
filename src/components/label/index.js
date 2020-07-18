// Libraries
import React, {useEffect, useRef} from "react";
import isEmpty from "lodash/isEmpty";

// Material Components
import Box from "@material-ui/core/Box";

// Components
import AutocompleteComponent from "../autocomplete";
import Loading from "../loading";

// Hooks
import useLabelsData from "hooks/useLabelsData";
import usePaginationOptionsData from "hooks/usePaginationOptionsData";
// Intl
import Intl from "config/intl";
import {useHotkeys} from "react-hotkeys-hook";

const Label = () => {
  const [getLabels, { loading, data }] = useLabelsData();
  const [setOptions, paginationOptions] = usePaginationOptionsData();
  const ref = useRef(null)

  useHotkeys("alt+6", () => {
    ref.current.focus();
  });

  const handleRef = aref => {
    ref.current=aref.current
  }


  const handleChange = (_, labels) => {
    setOptions({
      ...paginationOptions,
      labels: labels.map(({ name }) => name).join(","),
    });
  };

  useEffect(() => {
    getLabels();
  }, [getLabels]);

  if (isEmpty(data) || loading) {
    return <Loading />;
  }

  return (
    <Box style={{ width: "100%" }}>
      <Intl variant="caption" langKey={"LABEL"} />
      <AutocompleteComponent
        options={data}
        getOptionLabel={(option) => option.name}
        onChange={handleChange}
        onHandleRef={handleRef}
      />
    </Box>
  );
};

export default Label;
