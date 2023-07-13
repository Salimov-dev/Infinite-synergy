import { Box, Typography, styled } from "@mui/material";

const Component = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Data = styled(Box)`
  display: flex;
  gap: 3px;
`;

const DataTitle = styled(Typography)`
  font-weight: 700;
`;

const UserData = ({ user }) => {
  const { firstName, lastName, age, email } = user;
  return (
    <Component>
      <Data>
        <DataTitle>Имя:</DataTitle>
        {firstName}
      </Data>
      <Data>
        <DataTitle>Фамилия:</DataTitle>
        {lastName}
      </Data>
      <Data>
        <DataTitle>Возраст:</DataTitle>
        {age}
      </Data>
      <Data>
        <DataTitle>E-mail:</DataTitle>
        {email}
      </Data>
    </Component>
  );
};

export default UserData;
