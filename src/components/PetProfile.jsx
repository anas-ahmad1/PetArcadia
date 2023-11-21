import { useForm } from "react-hook-form";
import {
  Container,
  Box,
  Paper,
  IconButton,
  Avatar,
  Grid,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useTheme } from "@emotion/react";
import { useState } from "react";

const getStyles = () => {
  return {
    display: "inline",
    fontSize: 22,
    lineHeight: "1.5",
  };
};

export default function PetProfile() {
  const theme = useTheme();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const handleRegistration = (formData) => {
    console.log("FORM SUBMITTED");
    console.log(formData);
  };
  const handleError = (errors) => {};

  const [vaccination, setVaccination] = useState("Unvaccinated");

  const handleChange = (event) => {
    setVaccination(event.target.value);
  };

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto" /* Add margin to auto-center the Box */,
        }}
      >
        <form onSubmit={handleSubmit(handleRegistration, handleError)}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              px: { xs: 0, xs2: 1, sm: 2, md: 6, xl: 2 },
              "& > :not(style)": {
                my: 8,
                width: "100%",
                backgroundColor: theme.palette.primary.light,
                borderRadius: 6,
              },
            }}
          >
            <Paper>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  "& > :not(style)": {
                    m: { xs: 2, xs1: 3, xs2: 4, sm: 5, lg: 6 },
                    width: "100%",
                    borderRadius: 6,
                  },
                }}
              >
                <Paper>
                  <Grid container spacing={0}>
                    <Grid
                      container
                      item
                      xs={12}
                      md={6}
                      alignContent={"baseline"}
                    >
                      <Grid
                        item
                        xs={12}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          mt: { xs: 3, md: 5 },
                          mb: { xs: 1, md: 2 },
                        }}
                      >
                        <input
                          accept="image/*"
                          style={{ display: "none" }}
                          id="contained-button-file"
                          type="file"
                        />
                        <label htmlFor="contained-button-file">
                          <IconButton component="span">
                            <Avatar
                              src={
                                "https://www.vetstreet.com/wp-content/uploads/2022/09/view-pet-portrait-cat-mammal-close-843475-pxhere.com-1.jpg"
                              }
                              style={{
                                width: "250px",
                                height: "250px",
                              }}
                            />
                          </IconButton>
                        </label>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sx={{ display: "flex", justifyContent: "center" }}
                      >
                        <Typography variant="h1" fontSize={"1rem"}>
                          Pet's Profile
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          mt: { xs: 2, md: 5 },
                        }}
                      >
                        <Box>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            fontWeight={"600"}
                            sx={getStyles()}
                          >
                            {"Species:"}&nbsp;
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            color="text.secondary"
                            sx={getStyles()}
                          >
                            {"Cat"}
                          </Typography>
                          <br />
                          <br />
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            fontWeight={"600"}
                            sx={getStyles()}
                          >
                            {"Breed:"}&nbsp;
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            color="text.secondary"
                            sx={getStyles()}
                          >
                            {"Persian"}
                          </Typography>
                          <br />
                          <br />
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            fontWeight={"600"}
                            sx={getStyles()}
                          >
                            {"Gender:"}&nbsp;
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            color="text.secondary"
                            sx={getStyles()}
                          >
                            {"Male"}
                          </Typography>
                          <br />
                          <br />
                          <br />
                        </Box>
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      item
                      xs={12}
                      md={6}
                      alignContent={"baseline"}
                    >
                      <Grid
                        item
                        xs={12}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          mt: { xs: 1, md: 8 },
                        }}
                      >
                        <Typography variant="h1" fontSize={"2rem"}>
                          Update Info
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          mt: { xs: 3, md: 8 },
                        }}
                      >
                        <TextField
                          type="text"
                          id="name"
                          value="Snowbell"
                          label="Name"
                          variant="outlined"
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          mt: { xs: 5, md: 8 },
                        }}
                      >
                        <TextField
                          type="text"
                          id="age"
                          value="4"
                          label="Age"
                          variant="outlined"
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          mt: { xs: 5, md: 8 },
                        }}
                      >
                        <TextField
                          type="text"
                          id="weight"
                          value="7"
                          label="Weight"
                          variant="outlined"
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          mt: { xs: 5, md: 8 },
                        }}
                      >
                        <Box sx={{ minWidth: 250 }}>
                          <FormControl fullWidth>
                            <InputLabel id="vaccination-label">
                              Vaccination Status
                            </InputLabel>
                            <Select
                              labelId="vaccination-label"
                              id="vaccination"
                              value={vaccination}
                              label="Vaccination Status"
                              onChange={handleChange}
                            >
                              <MenuItem value={"Complete"}>Complete</MenuItem>
                              <MenuItem value={"Partial"}>Partial</MenuItem>
                              <MenuItem value={"Unvaccinated"}>
                                Unvaccinated
                              </MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Box display={"flex"} justifyContent={"center"}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      sx={{
                        width: {
                          xs: "62%",
                          xs2: "50%",
                          sm: "40%",
                          md: "30%",
                        },
                        mt: { xs: 6, md: 3 },
                        mb: { xs: 4, md: 5 },
                      }}
                    >
                      UPDATE
                    </Button>
                  </Box>
                </Paper>
              </Box>
            </Paper>
          </Box>
        </form>
      </Box>
    </Container>
  );
}
