import { RootState } from "../store";

export const selectCurrentUser = (state: RootState) => state.user;
export const selectCurrentUserId = (state: RootState) => state.user.id;
export const selectCurrentUserName = (state: RootState) => state.user.name;
