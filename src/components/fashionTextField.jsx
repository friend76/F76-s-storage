import { TextField } from "@mui/material";

export default function FashionTextField(props) {
  return (
    <TextField
      label={props.label}
      value={props.data.keyname}
      onChange={(e) =>
        props.setData({ ...props.data, [props.keyname]: e.target.value })
      }
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
    />
  );
}
