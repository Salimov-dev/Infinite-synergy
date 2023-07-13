import { Alert, Snackbar } from "@mui/material";

const AlertText = ({open, onClose}) => {
  return (
    <Snackbar open={open} autoHideDuration={2000} onClose={onClose}>
      <Alert onClose={onClose} severity="success" sx={{ width: "100%" }}>
        Вы успешно изменили данные пользователя
      </Alert>
    </Snackbar>
  );
};

export default AlertText;
