// libraries
import * as yup from "yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// MUI
import { Box, Paper, Typography, styled, Snackbar, Alert } from "@mui/material";
// store
import { useDispatch } from "react-redux";
import { updateUser } from "../../../store/users-list.store";
// components
import Header from "./components/header";
import UserData from "./components/user-data";
import UserAvatar from "./components/user-avatar";
import UserUpdate from "./components/user-update";
import { capitalizeFirstLetter } from "../../../utils/capitalize-first-letter";
import AlertText from "./components/alert-text";

const Component = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  width: "100vw",
  height: "100vh",
  padding: "10px",
  "& > :not(style)": {
    m: 1,
    width: "100%",
  },
});

const Main = styled(Paper)`
  padding: 15px;
`;

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*$)/, "Имя не должно содержать цифры")
    .required("Имя обязательно для заполнения"),
  lastName: yup
    .string()
    .matches(/^([^0-9]*$)/, "Фамилия не должна содержать цифры")
    .required("Фамилия обязательна для заполнения"),
  age: yup
    .number()
    .typeError("Возраст обязателен для заполнения")
    .min(16, "Введите возраст от 16 до 99")
    .max(99, "Столько не живут!")
    .required("Возраст обязателен для заполнения"),
  email: yup
    .string()
    .email("Введите email корректно")
    .required("Email обязателен для заполнения"),
});

const UserInfo = ({ selectedUser, selectedUserID, setIsEdit, isEdit }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      age: "",
      email: "",
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    reset({
      firstName: selectedUser?.firstName || "",
      lastName: selectedUser?.lastName || "",
      age: selectedUser?.age || "",
      email: selectedUser?.email || "",
    });
  }, [selectedUser, reset]);

  const handleEditUser = () => {
    setIsEdit(true);
  };

  const onSubmit = (data) => {
    const updatedUser = {
      ...data,
      id: selectedUserID,
      firstName: capitalizeFirstLetter(data.firstName),
      lastName: capitalizeFirstLetter(data.lastName),
    };
    dispatch(updateUser(updatedUser));
    setIsEdit(false);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Component>
      <Main elevation={4}>
        {selectedUserID ? (
          <>
            <Header
              user={selectedUser}
              isEdit={isEdit}
              onEditUser={handleEditUser}
            />
            <UserAvatar user={selectedUser} />

            {!isEdit ? (
              <UserData user={selectedUser} />
            ) : (
              <UserUpdate
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
                register={register}
                errors={errors}
              />
            )}
          </>
        ) : (
          <Typography variant="h6">Выберите пользователя</Typography>
        )}
        <AlertText open={open} onClose={handleClose} />
      </Main>
    </Component>
  );
};

export default UserInfo;
