// libraries
import { useState } from "react";
import { useSelector } from "react-redux";
// MUI
import { Box } from "@mui/material";
import styled from "@emotion/styled";
// store
import { getUsersByID, getUsersList } from "../../../store/users-list.store";
// components
import UsersList from "../users-list/users-list";
import UserInfo from "../user-info/user-info";

const Component = styled(Box)`
  height: 100%;
  display: flex;
`;

const UsersPage = () => {
  const [selectedUserID, setSelectedUserID] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const usersList = useSelector(getUsersList());
  const selectedUser = useSelector(getUsersByID(selectedUserID));

  const handleUserClick = (id) => {
    setSelectedUserID(id);
    setIsEdit(false);
  };

  return (
    <Component>
      <UsersList
        users={usersList}
        onClick={handleUserClick}
        selectedUserID={selectedUserID}
      />

      <UserInfo
        selectedUser={selectedUser}
        selectedUserID={selectedUserID}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
      />
    </Component>
  );
};

export default UsersPage;
