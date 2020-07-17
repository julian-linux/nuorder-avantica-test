import TYPES from "./types";

// -----
// ISSUES
// -----
export const requestErrorAC = (payload) => ({
  type: TYPES.ERROR,
  payload: {
    ...payload,
    submitting: false,
    loading: false,
  },
});

export const getIssuesRequestAC = () => ({
  type: TYPES.ISSUES.REQUEST,
  payload: {
    issues: {
      loading: true,
    },
  },
});

export const getIssuesSuccessAC = (data) => ({
  type: TYPES.ISSUES.SUCCESS,
  payload: {
    issues: {
      loading: false,
      data,
    },
  },
});

// -----
// PAGINATION OPTIONS
// -----
export const changePaginationOptionsAC = (paginationOptions) => ({
  type: TYPES.ISSUES.CHANGE_PAGINATION,
  payload: {
    issues: {
      paginationOptions,
    },
  },
});

// -----
// LABELS
// -----

export const getLabelsRequestAC = () => ({
  type: TYPES.LABELS.REQUEST,
  payload: {
    labels: {
      loading: true,
    },
  },
});

export const getLabelsSuccessAC = (data) => ({
  type: TYPES.LABELS.SUCCESS,
  payload: {
    labels: {
      loading: false,
      data,
    },
  },
});

// -----
// LABELS
// -----

export const getContributorsRequestAC = () => ({
  type: TYPES.CONTRIBUTORS.REQUEST,
  payload: {
    contributors: {
      loading: true,
    },
  },
});

export const getContributorsSuccessAC = (data) => ({
  type: TYPES.CONTRIBUTORS.SUCCESS,
  payload: {
    contributors: {
      loading: false,
      data,
    },
  },
});

// -----
// LABELS
// -----export const getSearchByAuthorRequestAC = () => ({
// //   type: TYPES.SEARCH_BY_AUTHOR.REQUEST,
// //   payload: {
// //     issues: {
// //       loading: true,
// //     },
// //   },
// // });
// //
// // export const getSearchByAuthorSuccessAC = (data) => ({
// //   type: TYPES.SEARCH_BY_AUTHOR.SUCCESS,
// //   payload: {
// //     issues: {
// //       loading: false,
// //       data,
// //     },
// //   },

//
// });
