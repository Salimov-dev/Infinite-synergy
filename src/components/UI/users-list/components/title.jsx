import { Box, Typography, styled } from "@mui/material";

const Component = styled(Box)`
  padding: 15px;
  text-align: left;
`;

const Text = styled(Typography)``;

const TitleList = () => {
  return (
    <Component>
      <Text variant="h7">Выберите пользователя</Text>
    </Component>
  );
};

export default TitleList;
