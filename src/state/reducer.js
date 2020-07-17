import TYPES from "./types";

import setReducer from "../utils/setReducer";

export const initialState = {
  contributors: {
    loading: false,
    data: [],
  },
  labels: {
    loading: false,
    data: [],
  },
  issues: {
    paginationOptions: {
      page: 1,
      per_page: 20,
      state: "all",
      orientation: "desc",
      reaction: undefined,
    },
    loading: false,
    data: [],
  },
};

const mainReducer = (state = { ...initialState }, { type, payload = {} }) => {
  switch (type) {
    case TYPES.ISSUES.SUCCESS:
      return setReducer(state, payload, "set", "issues.data");
    case TYPES.LABELS.SUCCESS:
      return setReducer(state, payload, "set", "labels.data");
    case TYPES.CONTRIBUTORS.SUCCESS:
      return setReducer(state, payload, "set", "contributors.data");
    case TYPES.CONTRIBUTORS.REQUEST:
    case TYPES.LABELS.REQUEST:
    case TYPES.ISSUES.REQUEST:
    case TYPES.ISSUES.CHANGE_PAGINATION:
      return setReducer(state, payload);
    default:
      return state;
  }
};

export default mainReducer;
