import { createSlice } from "@reduxjs/toolkit";

const usersListSlice = createSlice({
  name: "users",
  initialState: {
    entities: [],
  },
  reducers: {
    usersListReceived: (state, action) => {
      state.entities = action.payload;
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
const { usersListReceived, userUpdateSuccessed } = actions;

export const loadUsersList = (data) => async (dispatch) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 0))

    dispatch(usersListReceived(data));
  } catch (error) {
    console.log("error", error);
  }
};

export const updateUser = (data, id) => async (dispatch) => {
  try {
    await dispatch(userUpdateSuccessed(data, id));
  } catch (error) {
    console.log("error", error);
  }
};

export const getUsersByID = (id) => (state) => {
  const result = state.users.entities.filter((user) => user.id === id);
  return result[0];
};

export const getUsersList = () => (state) => state.users.entities;

export default usersListReducer;
