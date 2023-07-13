import { Box, Button, Typography, styled } from "@mui/material";

const TitleContainer = styled(Box)`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const Title = styled(Typography)``;

const Header = ({user, isEdit, onEditUser}) => {
  return (
    <TitleContainer>
      <Title variant="h5">
        {user.firstName} {user.lastName}
      </Title>
      {!isEdit && <Button onClick={onEditUser}>Править</Button>}
    </TitleContainer>
  );
};

export default Header;
