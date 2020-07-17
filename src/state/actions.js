import * as api from "./api";

import * as ac from "./actionCreators";

export const dispatchActionGetIssuesData = (dispatch) => async (options) => {
  dispatch(ac.getIssuesRequestAC());

  try {
    const { data } = await api.getIssues(options);
    dispatch(ac.getIssuesSuccessAC(data));
  } catch (e) {
    console.error("---error in dispatchActionGetIssuesData---", e);
    dispatch(ac.requestErrorAC());
  }
};

export const dispatchActionChangePaginationOptions = (dispatch) => async (
  options
) => {
  dispatch(ac.changePaginationOptionsAC(options));
  await dispatchActionGetIssuesData(dispatch)(options);
};

export const dispatchActionGetLabelsData = (dispatch) => async () => {
  dispatch(ac.getLabelsRequestAC());

  try {
    const { data } = await api.getLabels();
    dispatch(ac.getLabelsSuccessAC(data));
  } catch (e) {
    console.error("---error in dispatchActionGetLabelsData---", e);
    dispatch(ac.requestErrorAC());
  }
};


export const dispatchActionGetContributorsData = (dispatch) => async () => {
  dispatch(ac.getContributorsRequestAC());

  try {
    const { data } = await api.getContributors();
    dispatch(ac.getContributorsSuccessAC(data));
  } catch (e) {
    console.error("---error in dispatchActionGetContributorsData---", e);
    dispatch(ac.requestErrorAC());
  }
};
