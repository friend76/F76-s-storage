import logo from "./logo.svg";
import "./App.css";
import Registr from "./components/registr";
import { Height } from "@mui/icons-material";
import { color, margin } from "@mui/system";
import { Box } from "@mui/material";
import SignUp from "./components/signup";
import MainPage from "./components/mainPage";
import MainPageHead from "./components/main";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        color: "Error",
        flexDirection: "column",
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/main" exact element={<MainPage />} />
          <Route path="/" exact element={<SignUp />} />
          <Route path="/registr" exact element={<Registr />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
