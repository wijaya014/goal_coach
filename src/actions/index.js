import { SIGNED_IN } from "../constant";

export function logUser(email) {
  const action = {
    type: SIGNED_IN,
    email,
  };
  return action;
}
