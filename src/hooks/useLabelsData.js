import { useSelector, useDispatch } from "react-redux";
import { dispatchActionGetLabelsData } from "state/actions";

let dispatch;

const getLabels = () => {
  dispatchActionGetLabelsData(dispatch)();
};

export default () => {
  dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.labels);

  return [getLabels, { data, loading }];
};
