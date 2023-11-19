import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import PetDetail from "./PetDetail";
import { useTheme } from "@mui/material/styles";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

export default function PetModalCard({ petInfo, handleClose }) {
  const theme = useTheme();

  const mediaStyles = {
    component: "img",
    image: petInfo.img,
    alt: "Catto",
    height: 165,
    x: { pt: "56.25%" }, // Maintain aspect ratio
    sx: {
      borderRadius: 6,
      [theme.breakpoints.up("xs1")]: {
        height: 220,
      },
      [theme.breakpoints.up("xs2")]: {
        height: 260,
      },
      [theme.breakpoints.up("sm")]: {
        height: 300,
      },
    },
  };

  return (
    <>
      <Card
        sx={{
          borderRadius: 6,
          backgroundColor: "white",
          width: "80vw",
          [theme.breakpoints.up("sm")]: {
            width: 560,
          },
        }}
      >
        <CancelOutlinedIcon
          onClick={handleClose}
          sx={{
            float: "right",
            pt: 1,
            pr: 1,
            fontSize: 40,
            "&:hover": {
              cursor: "pointer",
              color: "#f44336",
            },
          }}
        />
        <Box
          sx={{
            px: 4,
            pt: 6,
            [theme.breakpoints.up("sm")]: {
              px: 10,
              pt: 4,
            },
          }}
        >
          <CardMedia {...mediaStyles} />
        </Box>

        <CardContent sx={{ flexGrow: 1, p: 4 }}>
          <PetDetail petInfo={petInfo} />
        </CardContent>
      </Card>
    </>
  );
}
