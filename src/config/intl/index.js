// Libraries
import React from "react";
import PropTypes from "prop-types";
import isNumber from "lodash/isNumber";

// Material Components
import Typography from "@material-ui/core/Typography";

// Hooks
import useLang from "hooks/useLang";

// Translations
import es from "./translations/es.json";
import en from "./translations/en.json";


const translations = {
  es,
  en,
};

const addUnderline = (str, idx) => {
  if (idx >= str.length) {
    return str;
  }
  return `${str.substring(0, idx)}<u>${str.charAt(idx)}</u>${str.substring(
    idx + 1
  )}`;
};
let lang = localStorage.getItem('lang') || 'en';

export const onlyText = (langKey, underlinePosition) => {
  let translation = translations[lang][langKey] || "####";
  if (isNumber(underlinePosition)) {
    return addUnderline(translation, underlinePosition);
  }
  return translation;
};

const Intl = ({ langKey, underlinePosition, showOnlyText, ...props }) => {
  const langHook = useLang()
  lang = langHook[1]

  if (showOnlyText) {
    return onlyText(langKey)
  }

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
  showOnlyText: PropTypes.bool,
};

Intl.defaultProps = {
  underlinePosition: null,
  showOnlyText: false
};

export default Intl;
