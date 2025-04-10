import {
  Avatar,
  Box,
  Button,
  Link,
  TextField,
  Typography,
  colors,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { useEffect, useState } from "react";
import MainPageHead from "./main";

export default function MainPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        minHeight: "100vh",
        minWidth: "100vh",
        bgcolor: "#000000",
      }}
    >
      <MainPageHead />
      <Link
        sx={{ alignSelf: "flex-end", margin: "5px 5px 0px 0px" }}
        href="http://localhost:3000/registr"
      >
        <Avatar src="https://i.pinimg.com/originals/7e/09/82/7e0982b1de913389ab766c31c3f5f288.png" />
      </Link>
      <Box
        //    самый большой большой
        sx={{
          marginTop: "10%",
          minHeight: "100%",
          minWidth: "100vh",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box
          // поменьше с двумя большими серые
          sx={{
            zIndex: 50,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            borderWidth: "15px",
            borderStyle: "solid",
            borderColor: "#000000",
            borderRadius: "47px",
            bgcolor: "#2A2A2A",
            minWidth: "50vh",
            minHeight: "25vw",
          }}
        >
          <Box
            //   маленький оранжевый
            sx={{
              bgcolor: "#D6951A",
              borderRadius: "53px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: "330px",
              minHeight: "60px",
              borderStyle: "solid",
              borderColor: "#000000",
            }}
          >
            <Typography sx={{ color: "#FFFFFF" }}>
              Количество сотрудников:{}
            </Typography>
          </Box>

          <Box
            //   маленький оранжевый
            sx={{
              bgcolor: "#D6951A",
              borderRadius: "53px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: "330px",
              minHeight: "60px",
              mt: "10%",
              borderStyle: "solid",
              borderColor: "#000000",
            }}
          >
            <Typography sx={{ color: "#FFFFFF" }}>
              Свободные участники:{}
            </Typography>
          </Box>
        </Box>

        <Box
          // поменьше с двумя большими серые
          sx={{
            zIndex: 49,
            marginLeft: "-5%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            borderWidth: "15px",
            borderStyle: "solid",
            borderColor: "#000000",
            bgcolor: "#3B3B3B",
            borderRadius: "0px 47px 47px 0px",
            minWidth: "50vh",
            minHeight: "25vw",
            paddingLeft: "3%",
          }}
        >
          <Box
            sx={{
              bgcolor: "#D6951A",
              borderRadius: "53px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: "330px",
              minHeight: "60px",
              borderStyle: "solid",
              borderColor: "#000000",
            }}
          >
            <Typography sx={{ color: "#FFFFFF" }}>
              Количество проектов:{}
            </Typography>
          </Box>

          <Box
            sx={{
              bgcolor: "#D6951A",
              borderRadius: "53px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: "330px",
              minHeight: "60px",
              mt: "10%",
              borderStyle: "solid",
              borderColor: "#000000",
            }}
          >
            <Typography sx={{ color: "#FFFFFF" }}>
              Активные проекты:{}
            </Typography>
          </Box>
        </Box>
        <Box
          // поменьше серые
          sx={{
            zIndex: 48,
            marginLeft: "-5%",
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            justifyContent: "flex-start",
            borderWidth: "15px",
            borderStyle: "solid",
            borderColor: "#000000",
            bgcolor: "#7D7D7D",
            borderRadius: "0px 47px 47px 0px",
            minWidth: "75vh",
            minHeight: "25vw",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              bgcolor: "#D6951A",
              width: "100%",
              height: "10%",
              borderTopRightRadius: "35px",
            }}
          >
            <Typography variant="h4">Текущие проекты:</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              bgcolor: "#000000",
              width: "100%",
              height: "10%",
              gap: 4,
              paddingLeft: "15%",
            }}
          >
            <Typography variant="h6" color="#FFFFFF">
              Название |
            </Typography>{" "}
            <Typography variant="h6" color="#FFFFFF">
              Ответственный |
            </Typography>{" "}
            <Typography variant="h6" color="#FFFFFF">
              Срок сдачи |
            </Typography>{" "}
            <Typography variant="h6" color="#FFFFFF">
              Статус |
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
