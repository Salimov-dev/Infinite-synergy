import { CssBaseline } from "@mui/material";
import UsersPage from "./components/UI/page/users-page";
import AppLoader from "./hoc/app-loader";


function App() {
  return (
    <AppLoader>
      <CssBaseline />
      <UsersPage />
    </AppLoader>
  );
}

export default App;
