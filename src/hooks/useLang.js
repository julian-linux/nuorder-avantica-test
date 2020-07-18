import { useSelector } from "react-redux";

const setLang = (lang) => {
  localStorage.setItem("lang", lang);
  window.location.reload();
};

export default () => {
  const lang = useSelector((state) => state.lang);
  return [setLang, lang];
};
