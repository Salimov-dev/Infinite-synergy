import { Box, styled } from "@mui/material";
import TitleList from "./components/title";
import User from "./components/user";

const Component = styled(Box)`
  width: 350px;
  color: white;
  background-color: #1f2a40;
  height: 100vh;
  overflow: hidden;
  direction: rtl;
`;

const UsersContainer = styled(Box)`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 10px;
  height: calc(100vh - 80px);
  max-height: calc(100vh - 80px);
`;

const UsersList = ({ users, onClick, selectedUserID }) => {
  return (
    <Component>
      <TitleList />
      <UsersContainer>
        {users.map((user) => (
          <User key={user.id} user={user} onClick={onClick} selectedUserID={selectedUserID}/>
        ))}
      </UsersContainer>
    </Component>
  );
};

export default UsersList;
