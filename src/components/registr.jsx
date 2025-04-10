import { Email, Error } from "@mui/icons-material";
import {
  Box,
  Button,
  CardMedia,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { useEffect, useState } from "react";
import { PatternFormat } from "react-number-format";
import FashionTextField from "./fashionTextField";

export default function Registr() {
  const [data, setData] = useState({
    Familia: "",
    Name: "",
    Otchestvo: "",
    Pswrd: "",
    Emile: "",
    PhoneNomber: "",
    PswrdCheck: "",
  });
  const [IsActive, SetIsActive] = useState({
    IsButtonDisabled: true,
    IsPasswordDublicated: false,
    WarningText: false,
    warningEmail: false,
  });
  useEffect(() => {
    if (
      data.Familia &&
      data.Name &&
      data.Otchestvo &&
      data.Pswrd &&
      data.PhoneNomber &&
      data.Emile &&
      data.PswrdCheck &&
      IsActive.IsPasswordDublicated === true
    ) {
      SetIsActive({ ...IsActive, IsButtonDisabled: false });
    } else {
      SetIsActive({ ...IsActive, IsButtonDisabled: true });
    }
  }, [data, IsActive.IsPasswordDublicated]);

  return (
    <Box
      sx={{
        bgcolor: "#000000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          borderRadius: "65px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 0.5,
          minHeight: "95vh",
          margin: 0,
          width: { xs: "80%", sm: "60%", xl: "62%" },
          bgcolor: "#222222", //цвет фона
        }}
      >
        <Box
          sx={{
            borderRadius: "65px",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: 4,
            bgcolor: "#222222",
            width: { xs: "80%", sm: "60%", xl: "62%" },
          }}
        >
          <CardMedia
            component="img"
            height="194"
            image="https://bashturist.ru/images/avatar_question_round.png"
            alt="Paella dish"
            sx={{
              marginTop: 3,
              width: { xs: "40%", sm: "30%", xl: "25%" },
              height: { xs: "40%", sm: "30%", xl: "25%" },
            }}
          />

          <Typography variant="h2" sx={{ color: "white", marginBottom: 10 }}>
            Создание <br /> аккаунта
          </Typography>
        </Box>
        <FashionTextField
          label={"Фамилия"}
          keyname={"Familia"}
          setData={setData}
          data={data}
        />
        <FashionTextField
          label={"Имя"}
          keyname={"Name"}
          setData={setData}
          data={data}
        />
        <FashionTextField
          label={"Отчестов:"}
          keyname={"Otchestvo"}
          setData={setData}
          data={data}
        />

        <PatternFormat
          sx={{
            // Обращаемся к внутреннему компоненту ввода
            "& .MuiOutlinedInput-root": {
              // стиль поля ввода
              "& input": {
                // Скруглённые углы поля (80 пикселей)
                m: 1,
                backgroundColor: "#000000",
                borderRadius: "80px",
                color: "white",
              },
              // Стиль рамки по умолчанию
              "& fieldset": {
                borderRadius: "80px",
                //borderWidth: "0px", // можно добавить, чтобы совсем убрать рамку, но необходимо будет это прописать и к другим ее состояниямм (при фокусе/наведении)
                borderColor: "black", // Серый цвет рамки
              },
              // Стиль рамки при наведении мыши
              "&:hover fieldset": {
                borderColor: "black", // Синий цвет рамки
              },
              // Стиль рамки при фокусе (ввод текста)
              "&.Mui-focused fieldset": {
                borderColor: "black", // Зелёный цвет рамки
              },
            },

            "& .MuiInputLabel-root": {
              color: "white !important",
              marginTop: 1, // белый цвет всегда
              "&.Mui-focused": {
                color: "white !important",
                marginTop: 0, // белый цвет при фокусе
              },
            },
            width: { xs: "80%", sm: "60%", xl: "62%" },
          }}
          format="+7 (###) ###-##-##"
          value={data.PhoneNomber}
          onValueChange={(e) => {
            if (e.value.length == 10) {
              setData({ ...data, PhoneNomber: e.value });
            }
          }}
          mask="_"
          customInput={TextField}
          label="Номер таелефона"
          fullWidth
          variant="outlined"
          placeholder="+7 (___) ___-__-__"
        />

        <TextField
          sx={{
            // Обращаемся к внутреннему компоненту ввода
            "& .MuiOutlinedInput-root": {
              // стиль поля ввода
              "& input": {
                // Скруглённые углы поля (80 пикселей)
                m: 1,
                backgroundColor: "#000000",
                borderRadius: "80px",
                color: "white",
              },
              // Стиль рамки по умолчанию
              "& fieldset": {
                borderRadius: "80px",
                //borderWidth: "0px", // можно добавить, чтобы совсем убрать рамку, но необходимо будет это прописать и к другим ее состояниямм (при фокусе/наведении)
                borderColor: "black", // Серый цвет рамки
              },
              // Стиль рамки при наведении мыши
              "&:hover fieldset": {
                borderColor: "black", // Синий цвет рамки
              },
              // Стиль рамки при фокусе (ввод текста)
              "&.Mui-focused fieldset": {
                borderColor: "black", // Зелёный цвет рамки
              },
            },

            "& .MuiInputLabel-root": {
              color: "white !important",
              marginTop: 1, // белый цвет всегда
              "&.Mui-focused": {
                color: "white !important",
                marginTop: 0, // белый цвет при фокусе
              },
            },
            width: { xs: "80%", sm: "60%", xl: "62%" },
          }}
          label="Email"
          value={data.Emile}
          type="Email"
          error={IsActive.warningEmail}
          onChange={(event) => {
            if (!event.target.value.includes("@")) {
              SetIsActive({ ...IsActive, warningEmail: true });
            } else {
              SetIsActive({ ...IsActive, warningEmail: "" });
            }
            setData({ ...data, Emile: event.target.value });
          }}
        />
        <TextField
          sx={{
            // Обращаемся к внутреннему компоненту ввода
            "& .MuiOutlinedInput-root": {
              // стиль поля ввода
              "& input": {
                // Скруглённые углы поля (80 пикселей)
                m: 1,
                backgroundColor: "#000000",
                borderRadius: "80px",
                color: "white",
              },
              // Стиль рамки по умолчанию
              "& fieldset": {
                borderRadius: "80px",
                //borderWidth: "0px", // можно добавить, чтобы совсем убрать рамку, но необходимо будет это прописать и к другим ее состояниямм (при фокусе/наведении)
                borderColor: "black", // Серый цвет рамки
              },
              // Стиль рамки при наведении мыши
              "&:hover fieldset": {
                borderColor: "black", // Синий цвет рамки
              },
              // Стиль рамки при фокусе (ввод текста)
              "&.Mui-focused fieldset": {
                borderColor: "black", // Зелёный цвет рамки
              },
            },

            "& .MuiInputLabel-root": {
              color: "white !important",
              marginTop: 1, // белый цвет всегда
              "&.Mui-focused": {
                color: "white !important",
                marginTop: 0, // белый цвет при фокусе
              },
            },
            width: { xs: "80%", sm: "60%", xl: "62%" },
          }}
          label="Пароль"
          value={data.Pswrd}
          type="password"
          onChange={(event) => {
            setData({
              ...data,
              Pswrd: event.target.value,
            });
          }}
        />
        <TextField
          type="password"
          sx={{
            // Обращаемся к внутреннему компоненту ввода
            "& .MuiOutlinedInput-root": {
              // стиль поля ввода
              "& input": {
                // Скруглённые углы поля (80 пикселей)
                m: 1,
                backgroundColor: "#000000",
                borderRadius: "80px",
                color: "white",
              },
              // Стиль рамки по умолчанию
              "& fieldset": {
                borderRadius: "80px",
                //borderWidth: "0px", // можно добавить, чтобы совсем убрать рамку, но необходимо будет это прописать и к другим ее состояниямм (при фокусе/наведении)
                borderColor: "black", // Серый цвет рамки
              },
              // Стиль рамки при наведении мыши
              "&:hover fieldset": {
                borderColor: "black", // Синий цвет рамки
              },
              // Стиль рамки при фокусе (ввод текста)
              "&.Mui-focused fieldset": {
                borderColor: "black", // Зелёный цвет рамки
              },
            },

            "& .MuiInputLabel-root": {
              color: "white !important",
              marginTop: 1, // белый цвет всегда
              "&.Mui-focused": {
                color: "white !important",
                marginTop: 0, // белый цвет при фокусе
              },
            },
            width: { xs: "80%", sm: "60%", xl: "62%" },
          }}
          label="Подтверждение пароля"
          value={data.PswrdCheck}
          error={IsActive.WarningText}
          onChange={(event) => {
            setData({
              ...data,
              PswrdCheck: event.target.value,
            });
            if (event.target.value === data?.Pswrd) {
              SetIsActive({
                ...IsActive,
                IsPasswordDublicated: true,
                WarningText: "",
              });
            } else {
              SetIsActive({
                ...IsActive,
                WarningText: "Пароли не совпадают",
                IsPasswordDublicated: false,
              });
            }
          }}
        />
        <Link
          sx={{ width: { xs: "80%", sm: "50%", xl: "45%" } }}
          href="http://localhost:3000/main"
        >
          <Button
            sx={{
              width: { xs: "120%", sm: "110%", xl: "100%" },
              padding: { xs: "0.5%", sm: "1%", xl: "1.2%" },
              color: "#FFFFFF",
              bgcolor: "#D6951A",
              borderRadius: "45px",
              fontSize: "24px",
            }}
            variant="contained"
            disabled={IsActive.IsButtonDisabled}
            onClick={() => {
              if (
                IsActive.IsPasswordDublicated &&
                IsActive.warningEmail == ""
              ) {
              }
              console.log(data);
            }}
          >
            Зарегестрироваться.
          </Button>
        </Link>
        <Link
          href="http://localhost:3000/"
          sx={{
            width: { xs: "60%", sm: "50%", xl: "40%" },
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
            Есть аккаунт
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
