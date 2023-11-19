import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { CardActionArea } from "@mui/material";
import { useState } from "react";
import PetModal from "./PetModal";

export default function PetCard({ info }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card
        sx={{
          // height: "100%",
          // display: "flex",
          // flexDirection: "column",
          width: 260,
          height: 280,
          borderRadius: 6,
          backgroundColor: "white",
        }}
      >
        <CardActionArea onClick={handleOpen}>
          <Box sx={{ px: 2, pt: 1 }}>
            <CardMedia
              component="img"
              image={info.img}
              alt="Catto"
              height="170"
              x={{
                pt: "56.25%", // Sets the aspect ratio to 16:9
              }}
              sx={{
                borderRadius: 6,
              }}
            />
          </Box>
          <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              fontSize={"1.5rem"}
              fontWeight={"600"}
            >
              {info.name}
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color="text.secondary"
              fontSize={"1.5rem"}
            >
              {info.location}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <PetModal open={open} handleClose={handleClose} petInfo={info} />
    </>
  );
}
