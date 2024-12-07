import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import { Avatar, CardHeader, Collapse, IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function RecadoCard({
  id,
  titulo,
  descricao,
  dataMarcada,
  remetenteCompleto,
  remetenteInicial,
  expandedCards,
  toggleExpand,
}) {
  return (
    <Card sx={{ width: "100%" }}>
      <CardHeader
        sx={{ backgroundColor: "#dedede" }}
        avatar={
          <Avatar sx={{ bgcolor: "#6700b3" }} aria-label="recipe">
            {remetenteInicial}
          </Avatar>
        }
        title={titulo}
        subheader={`Remetente: ${remetenteCompleto} | Data marcada: ${dataMarcada}`}
      />
      <CardActions disableSpacing>
        <IconButton
          onClick={() => toggleExpand(id)} // Alterna a expansão do cartão pelo ID
          aria-expanded={expandedCards[id] || false} // Verifica se está expandido
          aria-label="show more"
        >
          <ExpandMoreIcon
            sx={{
              transform: expandedCards[id] ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s",
            }}
          />
        </IconButton>
      </CardActions>
      <Collapse in={expandedCards[id]} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>{descricao}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
