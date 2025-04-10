import {
  Email,
  Error,
  Expand,
  ExpandMore,
  HomeMaxOutlined,
  HomeMini,
  HomeRepairServiceOutlined,
  House,
  Man,
  Man2,
  PortableWifiOff,
} from "@mui/icons-material";
import {
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Button,
  CardMedia,
  Icon,
  Link,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { useEffect, useState } from "react";
import { PatternFormat } from "react-number-format";
import Accordion from "@mui/material/Accordion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function MainPageHead() {
  return (
    <Box
      sx={{
        position: "fixed",
        marginTop: 2.5,
        maxHeight: "10vh",
        bgcolor: "#000000",
        display: "flex",
      }}
    >
      {/* <Link
        href="Ссылка на... куда?"
        sx={{ width: "50vh", maxHeight: { xs: "20vh", sm: "10vh", xl: "5vh" } }}
      > */}
      <Button
        sx={{
          color: "#000000",
          marginLeft: "-18%",
          bgcolor: "#D6951A",
          borderRadius: "550px",
          borderColor: "#FFFFFF",
          width: "50vh",
          maxHeight: { xs: "20vh", sm: "10vh", xl: "5vh" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography sx={{ marginLeft: 2 }}>
          <House sx={{ marginTop: "1%" }} /> ДОМОЙ
        </Typography>
      </Button>
      {/* </Link> */}
      <Box
        sx={{
          borderTopLeftRadius: 500,
          marginLeft: "-10%",
          width: { xs: "80%", sm: "60%", xl: "20%" },
          Height: { xs: "8vw", sm: "5vw", xl: "3vw" },
        }}
      >
        <Accordion
          sx={{
            color: "#FFFFFF",
            bgcolor: "#2A2A2A",
            width: { xs: "80%", sm: "60%", xl: "100%" },
            // Height: { xs: "8vw", sm: "5vw", xl: "3vw" },
          }}
        >
          <AccordionSummary
            // expandIcon={<ExpandMoreIcons />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">
              <HomeRepairServiceOutlined fontSize="small" /> Сотрудники
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            • Все Сотрудники <br /> • Добавить сотрудника
          </AccordionDetails>
        </Accordion>
      </Box>

      <Box
        sx={{
          borderTopLeftRadius: 500,
          marginLeft: "-5%",
          width: { xs: "80%", sm: "60%", xl: "20%" },
          Height: { xs: "8vw", sm: "5vw", xl: "3vw" },
        }}
      >
        <Accordion
          sx={{
            color: "#FFFFFF",
            bgcolor: "#3B3B3B",
            width: { xs: "80%", sm: "60%", xl: "100%" },
            Height: { xs: "8vw", sm: "5vw", xl: "3vw" },
          }}
        >
          <AccordionSummary
            // expandIcon={<ExpandMoreIcons />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">
              <HomeRepairServiceOutlined fontSize="small" /> Проекты
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            • Все проекты <br /> • Добавить проект
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box
        sx={{
          borderTopLeftRadius: 500,
          marginLeft: "-5%",
          width: { xs: "80%", sm: "60%", xl: "20%" },
          Height: { xs: "8vw", sm: "5vw", xl: "3vw" },
        }}
      >
        <Accordion
          sx={{
            color: "#FFFFFF",
            bgcolor: "#7D7D7D",
            width: { xs: "80%", sm: "60%", xl: "100%" },
            Height: { xs: "8vw", sm: "5vw", xl: "3vw" },
          }}
        >
          <AccordionSummary
            // expandIcon={<ExpandMoreIcons />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">
              <Man fontSize="small" /> Заказчик
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            • Все заказчики <br /> • Добавить заказчика
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
}
