import { useSelector, useDispatch } from "react-redux";
import {
  dispatchActionGetIssuesData,
  dispatchActionSetIssuesData,
} from "state/actions";

let dispatch;
let paginationOptions;

const getIssues = () => {
  dispatchActionGetIssuesData(dispatch)(paginationOptions);
};

const setIssues = (issues) => {
  dispatchActionSetIssuesData(dispatch)(issues, paginationOptions);
};

export default () => {
  dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.issues);
  paginationOptions = useSelector((state) => state.issues.paginationOptions);
  return [getIssues, { data, loading, setIssues }];
};
