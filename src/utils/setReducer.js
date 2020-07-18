import merge from "lodash/merge";
import set from "lodash/set";
import has from "lodash/has";
import get from "lodash/get";

const setReducer = (state, payload, option, path) => {
  console.log('state, payload', state, payload)
  let newState = merge({}, state, payload);
  if (option === "set" && has(payload, path)) {
    newState = set(newState, path, get(payload, path, null));
  }
  return newState;
};

export default setReducer;
