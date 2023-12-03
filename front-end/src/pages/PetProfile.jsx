//VALUES FROM REDUX NEED TO BE PUT IN INPUT FIELDS

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

import FormControl from "@mui/material/FormControl";
import { useTheme } from "@emotion/react";

import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";


import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

import { updatePet } from '../redux/petSlice'


const getStyles = () => {
  return {
    display: "inline",
    fontSize: 22,
    lineHeight: "1.5",
  };
};

export default function PetProfile() {
  const theme = useTheme();

  const initialiseStatic = {species: "", breed: "", gender: ""};
  //contains those properties of a pet that cannot be changed
  const [staticProperties, setStaticProperties] = useState(initialiseStatic);

  const {register, handleSubmit} = useForm({mode: "onChange"});

  const registerOptions = {
    name: {},
    age: {
      min: {
        value: 0,
        message: "Age must be atleast 0",
      },
      max: {
        value: 100,
        message: "Age must be less than 100",
      }
    },
    weight: {
      min: {
        value: 0,
        message: "Weight must be atleast 0",
      },
      max: {
        value: 300,
        message: "Weight must be less than 300",
      }
    },
    vaccinated: {},
    //image: {}
  }


  //getting id from url parameters
  const {id} = useParams()

  const pets = useSelector(state => state.pets.pets)

  useEffect(()=> {
    const pet = pets.find(u => u.id === id)

    if (pet) {
      const fields = ['name', 'age', 'weight', 'vaccinated'];

      for(let field of fields)
      {
        registerOptions[field] = pet[field];
      }

      //setting Static Properties
      const newStatic = {...pet};
      setStaticProperties(newStatic);
    }

  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = async (formdata) => {

    const name = formdata.name;
    const age = formdata.age;
    const weight = formdata.weight;
    const vaccinated = formdata.vaccinated;

    axios.put('http://localhost:3000/pets/'+id, {name, age, weight, vaccinated})
    .then(res => {
      dispatch(updatePet({id, name, age, weight, vaccinated}))
      navigate('/pets')
    })
    .catch(err => console.log(err))
  }


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
        <form onSubmit={handleSubmit(handleUpdate)}>

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
                            {staticProperties.species}
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
                            {staticProperties.breed ? staticProperties.breed : 'N/A'}
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
                            {staticProperties.gender}
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
                          {...register("name", registerOptions.name)}
                          label="Name"
                          variant="outlined"
                          defaultValue={staticProperties.species}
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
                          {...register("age", registerOptions.age)}
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
                          {...register("weight", registerOptions.weight)}
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
                          <FormLabel id="vaccination-status">Vaccination Status:</FormLabel>
                            <RadioGroup
                              row
                              aria-labelledby="vaccination-status"
                              name="vaccinated"
                              sx={{display: "flex", justifyContent: "center"}}
                            >
                              <FormControlLabel value="Complete" control={<Radio />} {...register("vaccinated", registerOptions.vaccinated)} label="Complete" />
                              <FormControlLabel value="Partial" control={<Radio />} {...register("vaccinated", registerOptions.vaccinated)} label="Partial" />
                              <FormControlLabel value="Unvaccinated" control={<Radio />} {...register("vaccinated", registerOptions.vaccinated)} label="Unvaccinated" />
                            </RadioGroup>
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
