/* eslint-disable react/prop-types */
import { useState } from "react";
import {useForm} from "react-hook-form";

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

  const {register, handleSubmit, setValue} = useForm({mode: "onChange" });

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

  //this is needed to check if a new image was uploaded
  //it needs to be a state so we can trigger a rerender
  const [imageCheck, setImageCheck] = useState(null);

  const handleImageChange = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    reader.onload = () => {
      const newImage = reader.result;

      //setting value of image field in register
      setValue("image", newImage); // base64encoded string

      //rerendering
      setImageCheck(newImage);
    };
    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
  };

  const dispatch = useDispatch();

  const onFormSubmit = async (data) => {

    const name = data.name;
    const species = data.species;
    const breed = data.breed;
    const gender = data.gender;
    const age = data.age;
    const weight = data.weight;
    const vaccinated = data.vaccinated;
    const image = data.image;

    dispatch(addPet({name, species, breed, age, gender, weight, vaccinated, image}));

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

          <p>{imageCheck &&
            <img src={imageCheck} height={100} width={100} />}
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
