// Libraries
import React, {useEffect} from "react";
import isEmpty from 'lodash/isEmpty';

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

const Label = () => {
  const [getLabels, {loading, data}] = useLabelsData();
  const [setOptions, paginationOptions] = usePaginationOptionsData()

  const handleChange = (_, labels) => {
    setOptions({
      ...paginationOptions,
      labels: labels.map(({name}) => name).join(',')
    })
  }

  useEffect(() => {
    getLabels()
  },[getLabels])

  if(isEmpty(data) || loading) {
    return <Loading />
  }

  return (
    <Box style={{width: '100%'}}>
      <Intl variant="caption" langKey={"LABEL"} underlinePosition={1} />
      <AutocompleteComponent
        options={data}
        getOptionLabel={(option) => option.name}
        onChange={handleChange}
      />
    </Box>
  )
};

export default Label;
