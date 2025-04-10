import { Email, Error, Label } from "@mui/icons-material";
import {
  Box,
  Button,
  Link,
  TextField,
  Typography,
  colors,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { useEffect, useState } from "react";
import { PatternFormat } from "react-number-format";
import FashionTextField from "./fashionTextField";

export default function SignUp() {
  const [data, setData] = useState({
    gmail: "",
    pswrd: "",
  });
  const [status, setStatus] = useState({ isButtonActive: true });
  useEffect(() => {
    if (data.gmail && data.pswrd) {
      setStatus({ ...status, isButtonActive: false });
    } else {
      setStatus({ ...status, isButtonActive: true });
    }
  });
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 0.5,
        minHeight: "100vh",
        margin: 0,
        minWidth: "100vw",
        bgcolor: "#000000", //цвет фона
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "#2A2A2A",
          gap: 2.5,

          minWidth: { xs: "80%", sm: "70%", xl: "50%" },
          minHeight: { xs: "80vh", sm: "90vh", xl: "70vh" },
          borderRadius: "47px",
        }}
      >
        <Typography variant="h2" sx={{ color: "white", marginBottom: 10 }}>
          Вход
        </Typography>
        <FashionTextField
          label={"Почта:"}
          keyname={"gmail"}
          setData={setData}
          data={data}
        />
        <FashionTextField
          label={" Пароль:"}
          keyname={"pswrd"}
          setData={setData}
          data={data}
        />
        <Link
          href="http://localhost:3000/main"
          sx={{
            width: { xs: "60%", sm: "10%", xl: "40%" },
          }}
        >
          <Button
            sx={{
              width: { xs: "120%", sm: "1100%", xl: "100%" },
              padding: { xs: "0.5%", sm: "1%", xl: "1.2%" },
              color: "#FFFFFF",
              bgcolor: "#D6951A",
              borderRadius: "45px",
              fontSize: "24px",
            }}
            variant="contained"
            disabled={status.isButtonActive}
          >
            Войти
          </Button>
        </Link>
        <Link
          href="http://localhost:3000/registr"
          sx={{
            width: { xs: "60%", sm: "10%", xl: "40%" },
          }}
        >
          <Button
            sx={{
              padding: { xs: "0.5%", sm: "1%", xl: "1.2%" },
              borderRadius: "45px",
              fontSize: "24px",
            }}
            fullWidth
            color="warning"
            variant="outlined"
          >
            Нет аккаунта?
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
