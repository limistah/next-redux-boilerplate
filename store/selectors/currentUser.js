const currentUserSelector = (state) => state.get("currentUser");
const currentUserSelectorData = (state) => currentUserSelector(state).toJS();

export default (state) => {
  return {
    data: currentUserSelectorData(state).data,
    error: currentUserSelectorData(state).error,
  };
};
