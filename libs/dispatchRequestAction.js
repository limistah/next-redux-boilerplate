const noop = () => {};
export default (
  dispatch = noop,
  action = {},
  success = noop,
  error = noop,
  preProcess = noop
) => {
  const apiAction = dispatch(action);
  if (apiAction.then) {
    apiAction.then((action) => {
      try {
        preProcess();
        const payload = action.payload;
        if (process.env.NODE_ENV !== "production") {
          // console.log(payload);
        }
        if (action.error) {
          let msg = "CLX:: Unknown Client Error";
          if (action.meta && action.meta.status === "Network request failed") {
            msg =
              "Whoops! There was a hiccup in the system. We’re looking for it. Could you please reload your page?";
          } else {
            const err =
              payload && payload.response ? payload.response.error : {};
            msg =
              err && err.msg
                ? `${err.code}:: ${err.msg}`
                : "An Unexpected error occurred";
          }
          error(msg);
        } else {
          success(action);
        }
      } catch (e) {
        console.log(e);
      }
    });
  }
};
