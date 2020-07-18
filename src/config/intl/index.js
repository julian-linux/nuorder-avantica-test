// Libraries
import React from "react";
import PropTypes from "prop-types";

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

let lang = localStorage.getItem("lang") || "en";

export const onlyText = (langKey) => translations[lang][langKey] || "####";

const Intl = ({ langKey, ...props }) => {
  const langHook = useLang();
  lang = langHook[1];
  return <Typography {...props}>{onlyText(langKey)}</Typography>;
};

Intl.propTypes = {
  langKey: PropTypes.string.isRequired,
};

export default Intl;
