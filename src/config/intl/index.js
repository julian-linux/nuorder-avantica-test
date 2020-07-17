// Libraries
import React from "react";
import PropTypes from "prop-types";
import isNumber from "lodash/isNumber";

// Material Components
import Typography from "@material-ui/core/Typography";

// Translations
import es from "./translations/es.json";
import en from "./translations/en.json";

const translations = {
  es,
  en,
};

let langcode = "es";

const addUnderline = (str, idx) => {
  if (idx >= str.length) {
    return str;
  }
  return `${str.substring(0, idx)}<u>${str.charAt(idx)}</u>${str.substring(
    idx + 1
  )}`;
};

export const changeLangCode = (code) => {
  langcode = code;
};

export const onlyText = (langKey, underlinePosition) => {
  let translation = translations[langcode][langKey] || "####";
  if (isNumber(underlinePosition)) {
    return addUnderline(translation, underlinePosition);
  }
  return translation;
};

const Intl = ({ langKey, underlinePosition, ...props }) => {
  if (isNumber(underlinePosition)) {
    return (
      <Typography
        {...props}
        dangerouslySetInnerHTML={{
          __html: onlyText(langKey, underlinePosition),
        }}
      />
    );
  }

  return <Typography {...props}>{onlyText(langKey)}</Typography>;
};

Intl.propTypes = {
  langKey: PropTypes.string.isRequired,
  underlinePosition: PropTypes.number,
};

Intl.defaultProps = {
  underlinePosition: null,
};

export default Intl;