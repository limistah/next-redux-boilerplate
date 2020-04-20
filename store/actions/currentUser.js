import __api from "./__api";
import types from "../types";

const createAccountByEmail = (data) => {
  return __api({
    types: [
      types.CREATE_USER_BY_EMAIL,
      types.CREATE_USER_BY_EMAIL_SUCCESS,
      types.CREATE_USER_BY_EMAIL_ERROR,
    ],
    url: "/users",
    method: "POST",
    body: data,
  });
};

export default {
  createAccountByEmail,
};
