import api from "../config/api";

export const getIssues = (params) =>
  api.get("/repos/facebook/react/issues", { params });

export const getLabels = () => api.get("/repos/facebook/react/labels");

export const getContributors = () =>
  api.get("/repos/facebook/react/contributors");

export const getAutocompleteEndpoint = (endpoint, params) =>
  api.get(endpoint, { params });

export const searchByAuthor = params =>api.get("/search/issues", { params });

