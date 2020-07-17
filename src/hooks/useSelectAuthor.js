import { useSelector, useDispatch } from "react-redux";
import { dispatchActionSelectAuthor } from "state/actions";

let dispatch;

const setAuthor = (author) => {
  dispatchActionSelectAuthor(dispatch)(author);
};

export default () => {
  dispatch = useDispatch();
  const author = useSelector((state) => state.author);
  return [setAuthor, author];
};
