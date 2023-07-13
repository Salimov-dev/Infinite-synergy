import { Box, styled } from "@mui/material";
import TitleList from "./components/title";
import User from "./components/user";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList as List } from "react-window";
import Loader from "../../loader";

const Component = styled(Box)`
  width: 350px;
  color: white;
  background-color: #1f2a40;
  height: 100vh;
  overflow: hidden;
`;

const UsersContainer = styled(Box)`
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: calc(100vh - 80px);
  max-height: calc(100vh - 80px);
`;

const UsersList = ({ users, onClick, selectedUserID }) => {
  return (
    <Component>
      <TitleList />

      <UsersContainer>
      
        {users.length
        ?<AutoSizer>
          {({ height, width }) => (
            <List
              className="List"
              height={height || 0}
              width={width || 0}
              itemCount={users.length}
              itemSize={30}
            >
              {({ index, style }) => {
                const user = users[index];

                return (
                  <div style={style}>
                    {user && (
                      <User
                        user={user}
                        onClick={onClick}
                        selectedUserID={selectedUserID}
                      />
                    )}
                  </div>
                );
              }}
            </List>
          )}
        </AutoSizer>
        : <Box sx={{display: 'flex', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}><Loader/></Box>
        
        }
        
      </UsersContainer>
    </Component>
  );
};

export default UsersList;
