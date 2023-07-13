import { createSlice } from "@reduxjs/toolkit";

const usersListSlice = createSlice({
  name: "users",
  initialState: {
    entities: [],
  },
  reducers: {
    usersListRequested: (state) => {
      state.isLoading = true;
    },
    usersListReceived: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    userUpdateSuccessed: (state, action) => {
      const { id } = action.payload;
      const updatedEntities = state.entities.map((user) => {
        if (user.id === id) {
          return { ...user, ...action.payload };
        }
        return user;
      });
      state.entities = updatedEntities;
    },
  },
});

const { reducer: usersListReducer, actions } = usersListSlice;
const { usersListRequested, usersListReceived, userUpdateSuccessed } = actions;

export const loadUsersList = (data) => (dispatch) => {
  dispatch(usersListRequested);
  dispatch(usersListReceived(data));
};

export const updateUser = (data, id) => (dispatch) => {
  dispatch(userUpdateSuccessed(data, id));
};

export const getUsersByID = (id) => (state) => {
  const result = state.users.entities.filter((user) => user.id === id);
  return result[0];
};

export const getUsersList = () => (state) => state.users.entities;
export const getUsersStatus = () => (state) => state.users.isLoading;

export default usersListReducer;
