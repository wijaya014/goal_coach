import { SIGNED_IN } from "../constant";

let user = {
  email: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = user, action) => {
  switch (action.type) {
    case SIGNED_IN:
      const { email } = action;
      user = {
        email,
      };
      return user;
    default:
      return state;
  }
};
