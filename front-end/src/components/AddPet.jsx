/* eslint-disable react/prop-types */

import {useForm} from "react-hook-form";
import { useState } from "react";

import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import axios from "axios";

import { addPet } from "../redux/petSlice";
import { useDispatch } from "react-redux";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  display: "flex",
  justifyContent: "center",

  width: 500,
  bgcolor: 'background.paper',
  borderRadius: "10%",
  boxShadow: 24,
  p: 1
};


export default function AddPet({toggleModal})
{

  const {register, handleSubmit} = useForm({mode: "onChange" });

  const registerOptions = {
    name: {required: "Name cannot be blank"},
    species: {required: "Select one species"},
    breed: {},
    gender: {required: "Select one Gender"},
    age: {
      required: "Age is required",
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
      required: "Weight is required",
      min: {
        value: 0,
        message: "Weight must be atleast 0",
      },
      max: {
        value: 300,
        message: "Weight must be less than 300",
      }
    },
    vaccinated: {required: "Select one Status"},
    image: {required: "Upload"}
  }

  //a separate piece of state to handle image uploads
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };


  const dispatch = useDispatch();

  const onFormSubmit = async (data) => {

    data.image = selectedImage;

    const name = data.name;
    const species = data.species;
    const breed = data.breed;
    const gender = data.gender;
    const age = data.age;
    const weight = data.weight;
    const vaccinated = data.vaccinated;

    axios.post("http://localhost:3000/addpet", {name, species, breed, gender, age, weight, vaccinated})
    .then((res) => {
      dispatch(addPet(res.data))
      //first we sent a post request to our backend server
      //the server responds with res.data (contains the pet object in JSON)
    })
    .catch((error) => {
      console.log("Error!");
      console.log(error)
    })

    //onAddPet(data);

    //closing Modal
    toggleModal();
  }

  return (
    <>
      <Box sx={style}>

        <Box
          component="form"
          //handleSubmit validates inputs prior to submission of Form
          onSubmit={handleSubmit(onFormSubmit)}
          sx={{
            '& > :not(style)': { m: 1, width: '50ch' },
            p: 3,
            textAlign: "center"
          }}
          noValidate
          autoComplete="off"
        >

          <TextField id="outlined-basic" label="Pet Name" variant="outlined"
            name="name" {...register("name", registerOptions.name)}/>

          <br />
          <FormControl fullWidth>
            <InputLabel id="species-label">Species:</InputLabel>
            <Select
              labelId="species-label"
              id="species"
              label="Species:"
              {...register("species", registerOptions.species)}
            >
              <MenuItem value={"Cat"}>Cat</MenuItem>
              <MenuItem value={"Dog"}>Dog</MenuItem>
              <MenuItem value={"Rabbit"}>Rabbit</MenuItem>
              <MenuItem value={"Rabbit"}>Hamster</MenuItem>
              <MenuItem value={"Monkey"}>Monkey</MenuItem>
              <MenuItem value={"Parrot"}>Parrot</MenuItem>
              <MenuItem value={"Chicken"}>Chicken</MenuItem>
              <MenuItem value={"Other"}>Other</MenuItem>
            </Select>
          </FormControl>
          <br />

          <TextField id="outlined-basic" label="Breed" variant="outlined"
            name="breed" {...register("breed", registerOptions.breed)}
          />
          <br />
          <br />

          <input
              accept="image/*"
              style={{ display: 'none' }}
              id="image-upload"
              type="file"
              ref={register}
              {...register("image", registerOptions.image)}
              onChange={handleImageChange}
          />
          <label htmlFor="image-upload">
              <Button
                  variant="contained"
                  color="primary"
                  component="span"
              >
                <b style={{color: "white"}}>Upload Image</b>
              </Button>
          </label>

          <p>{selectedImage &&
            <img src={selectedImage} height={100} width={100} />}
          </p>

          <FormLabel sx={{mb: 0}} id="gender">Gender:</FormLabel>
          <RadioGroup
            row
            aria-labelledby="gender"
            name="gender"
            sx={{display: "flex", justifyContent: "center"}}
          >
            <FormControlLabel value="Male" control={<Radio />} {...register("gender", registerOptions.gender)} label="Male" />
            <FormControlLabel value="Female" control={<Radio />} {...register("gender", registerOptions.gender)} label="Female" />
          </RadioGroup>

          <TextField id="outlined-basic" label="Age" variant="outlined"
            name="age" {...register("age", registerOptions.age)}
          />
          <br />

          <TextField id="outlined-basic" label="Weight (kg)" variant="outlined"
            name="weight" {...register("weight", registerOptions.weight)}
          />
          <br />
          <br />

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

          <Button type="submit" variant="contained"><b style={{color:"white"}}>Add</b></Button>
        </Box>
      </Box>
    </>
  )
}
