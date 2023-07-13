import { Box, Button, TextField, Typography, styled } from "@mui/material";

const EditTitle = styled(Typography)`
  margin-bottom: 10px;
  font-size: 18px;
`;

const UserUpdate = ({ handleSubmit, onSubmit, register, errors }) => {
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <EditTitle>Редактировать пользователя:</EditTitle>
      <TextField
        {...register("firstName")}
        label="Имя"
        id="firstName"
        name="firstName"
        error={!!errors.firstName}
        helperText={errors?.firstName?.message}
      />
      <TextField
        {...register("lastName")}
        label="Фамилия"
        id="lastName"
        name="lastName"
        error={!!errors.lastName}
        helperText={errors?.lastName?.message}
      />
      <TextField
        {...register("age")}
        type="number"
        label="Возраст"
        id="age"
        name="age"
        error={!!errors.age}
        helperText={errors?.age?.message}
      />
      <TextField
        {...register("email")}
        label="E-mail"
        id="email"
        name="email"
        error={!!errors.email}
        helperText={errors?.email?.message}
      />
      <Box>
        <Button type="submit" variant="outlined" color="success">
          Сохранить
        </Button>
      </Box>
    </form>
  );
};

export default UserUpdate;
