import { Box, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import PetCard from "./PetCard";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const pets = [
  {
    name: "Catto1",
    location: "Lahore",
    img: "https://images.saymedia-content.com/.image/t_share/MTk2NzY3MjA5ODc0MjY5ODI2/top-10-cutest-cat-photos-of-all-time.jpg",
    description:
      "Persian Orange Cat Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow",
    contact: "03123456789",
  },
  {
    name: "Catto2",
    location: "Islamabad",
    img: "https://images.saymedia-content.com/.image/t_share/MTk2NzY3MjA5ODc0MjY5ODI2/top-10-cutest-cat-photos-of-all-time.jpg",
    description:
      "Persian Orange Cat Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow",
    contact: "03123456789",
  },
  {
    name: "Catto3",
    location: "Karachi",
    img: "https://images.saymedia-content.com/.image/t_share/MTk2NzY3MjA5ODc0MjY5ODI2/top-10-cutest-cat-photos-of-all-time.jpg",
    description:
      "Persian Orange Cat Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow",
    contact: "03123456789",
  },
  {
    name: "Catto4",
    location: "Rawalpindi",
    img: "https://images.saymedia-content.com/.image/t_share/MTk2NzY3MjA5ODc0MjY5ODI2/top-10-cutest-cat-photos-of-all-time.jpg",
    description:
      "Persian Orange Cat Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow",
    contact: "03123456789",
  },
  {
    name: "Catto5",
    location: "Peshawar",
    img: "https://images.saymedia-content.com/.image/t_share/MTk2NzY3MjA5ODc0MjY5ODI2/top-10-cutest-cat-photos-of-all-time.jpg",
    description:
      "Persian Orange Cat Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow",
    contact: "03123456789",
  },
  {
    name: "Catto6",
    location: "Quetta",
    img: "https://images.saymedia-content.com/.image/t_share/MTk2NzY3MjA5ODc0MjY5ODI2/top-10-cutest-cat-photos-of-all-time.jpg",
    description:
      "Persian Orange Cat Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow",
    contact: "03123456789",
  },
  {
    name: "Catto7",
    location: "Multan",
    img: "https://images.saymedia-content.com/.image/t_share/MTk2NzY3MjA5ODc0MjY5ODI2/top-10-cutest-cat-photos-of-all-time.jpg",
    description:
      "Persian Orange Cat Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow",
    contact: "03123456789",
  },
  {
    name: "Catto8",
    location: "Kashmir",
    img: "https://images.squarespace-cdn.com/content/v1/5ac696982714e5ccacc1f762/baa1a359-ced7-43d5-85ea-d0f33e347d43/Swan.png",
    description:
      "Persian Orange Cat Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow",
    contact: "03123456789",
  },
];

export default function FoundPets() {
  const theme = useTheme();
  document.body.style = `background: ${theme.palette.background.paper};`;

  return (
    <>
      <Container
        sx={{
          py: 4,
        }}
        maxWidth="xl"
      >
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center", // Center for smaller screens
            [theme.breakpoints.up("md")]: {
              justifyContent: "flex-end", // Align right for medium screens and above
            },
          }}
        >
          <TextField
            id="search-field"
            type="search"
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{
              mr: { md: 3 }, // Right margin for medium screens and above
              width: 300,
            }}
          />
        </Box>

        <Typography
          component="h1"
          variant="h1"
          align="center"
          color="text.primary"
          fontSize={{ xs: 50, xs1: 60, xs2: 70, md: 80 }}
          sx={{ pt: 4, pb: 8, fontWeight: 600, color: "#47494F" }}
        >
          FOUND PETS
        </Typography>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={8}>
            {pets.map((pet) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <PetCard info={pet} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
}
