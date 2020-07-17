import { useSelector, useDispatch } from "react-redux";
import { dispatchActionGetSearchByAuthorData } from "state/actions";

let dispatch;
let paginationOptions;

const getIssues = (author) => {
  dispatchActionGetSearchByAuthorData(dispatch)(author, paginationOptions);
};

export default () => {
  dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.issues);
  paginationOptions = useSelector((state) => state.issues.paginationOptions);
  return [getIssues, { data, loading }];
};
