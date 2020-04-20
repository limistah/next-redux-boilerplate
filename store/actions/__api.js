import reduxApiMiddlewareBroker from "redux-api-middleware-broker";

const BASE_URL = process.env.BASE_API_URL;

const noop = () => {};

const action = (
  opts = { url: "", types: [], method: "GET", data: {} },
  fileUpload = false,
  onRequestComplete = noop,
  preprocessResult = noop
) => {
  // Set the headers so we don't have to keep setting it evertime we need to call the api
  const token = "";
  const _opts = {
    ...opts,
    body: opts.body,
    endpoint: `${BASE_URL}${opts.url}`,
    headers: {
      ...opts.headers,
      Authorization: `Bearer ${token}`,
      ...(fileUpload
        ? {}
        : {
            Accept: "application/json",
            "Content-Type": "application/json",
          }),
    },
  };
  delete _opts.url;
  return reduxApiMiddlewareBroker(
    _opts,
    fileUpload,
    (action, state, response) => {
      // Some manipulation to store the header
      return onRequestComplete(action, state, response);
    },
    // We might need to manipulate the returned data in the future
    (json) => preprocessResult(json) || json
  );
};
export default action;
