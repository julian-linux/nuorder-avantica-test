import { useSelector, useDispatch } from "react-redux";
import { dispatchActionGetContributorsData } from "state/actions";

let dispatch;

const getContributors = () => {
  dispatchActionGetContributorsData(dispatch)();
};

export default () => {
  dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.contributors);

  return [getContributors, { data, loading }];
};
