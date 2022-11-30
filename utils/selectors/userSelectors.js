import { createSelector } from "reselect";

const userEmail = createSelector(
  (state) => state.user,
  (user) => user.email
);

const userFullname = createSelector(
  (state) => state.user,
  (user) => user.name
);

const userToken = createSelector(
  (state) => state.user,
  (user) => user.userToken
);

export { userEmail, userFullname, userToken };
