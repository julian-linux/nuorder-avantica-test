// Libraries
import React from "react";
import PropTypes from "prop-types";

// Material Components
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

// Icons
import NavigateBeforeOutlinedIcon from "@material-ui/icons/NavigateBeforeOutlined";
import NavigateNextOutlinedIcon from "@material-ui/icons/NavigateNextOutlined";

// Hooks
import usePaginationOptionsData from "hooks/usePaginationOptionsData";
import Intl from "../../config/intl";

// Styles
import useStyles from "./styles";

const pageSizes = [5, 10, 20, 50];

const Pagination = ({ show }) => {
  const classes = useStyles();

  const [setOptions, options] = usePaginationOptionsData();

  const handleChangeResultsPerPage = (results) => () => {
    setOptions({
      ...options,
      per_page: results,
    });
  };

  const handleChangePage = (op) => () => {
    setOptions({
      ...options,
      page: options.page + parseInt(`${op}1`),
    });
  };

  return show === "pagination" ? (
    <Box display="flex" mt={1}>
      <IconButton disabled={options.page === 1} onClick={handleChangePage("-")}>
        <NavigateBeforeOutlinedIcon />
      </IconButton>
      <Typography component="div">
        <Box mt={1} fontSize={20}>
          {options.page}
        </Box>
      </Typography>
      <IconButton onClick={handleChangePage("+")}>
        <NavigateNextOutlinedIcon />
      </IconButton>
    </Box>
  ) : (
    <Box>
      <Intl variant="caption" langKey={"PAGINATION"} underlinePosition={0} />
      <Box display="flex" justifyContent="space-between" mt={1}>
        {pageSizes.map((results) => (
          <Button
            variant={options.per_page === results ? "contained" : "outlined"}
            size="small"
            key={`btn-page-size-${results}`}
            className={classes.button}
            onClick={handleChangeResultsPerPage(results)}
          >
            {results}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

Pagination.propTypes = {
  show: PropTypes.oneOf(["pagination", null]),
};

export default Pagination;
