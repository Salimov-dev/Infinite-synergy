import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUsersList } from "../store/users-list.store";
// import usersListJSON from "../data/generated-crop.json";
import usersListJSON from "../data/users.json";

const AppLoader = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsersList(usersListJSON));
  }, []);

  return children;
};

export default AppLoader;
