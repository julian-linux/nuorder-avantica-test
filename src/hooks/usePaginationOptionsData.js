import { useSelector, useDispatch } from "react-redux";
import { dispatchActionChangePaginationOptions } from "state/actions";

let dispatch;

const setOptions = (options) => {
  dispatchActionChangePaginationOptions(dispatch)(options);
};

export default () => {
  dispatch = useDispatch();
  const { paginationOptions } = useSelector((state) => state.issues);
  return [setOptions, paginationOptions];
};
