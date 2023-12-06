/* eslint-disable react/prop-types */

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

import { useState } from "react";

import { addPet } from "../redux/petSlice";
import { useDispatch } from "react-redux";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  const [formData, setFormData] = useState({
    name: '',
    species: '',
    breed: '',
    gender: '',
    age: 0,
    weight: 0,
    vaccinated: '',
    image: null,
  });

  const [imageCheck, setImageCheck] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    reader.onload = () => {
      const newImage = reader.result;
      setFormData({ ...formData, image: newImage });
      setImageCheck(newImage);
    };

    reader.onerror = (error) => {
      console.log('Error: ', error);
    };
  };

  const errorMessages =
  {
    name: "Name cannot be blank",
    species: "Select one species",
    breed: "",
    gender: "Select one Gender",
    age: "Age must be between 0 and 100",
    weight: "Weight must be between 0 and 300",
    vaccinated: "Select one vaccination status",
    image: "Image is required"
  }

  const errorChecking = () =>
  {
    if (formData.name === "") {
      notify(errorMessages.name);
      return false;
    }
    else
    {
      if (formData.species === "")
      {
        notify(errorMessages.species);
        return false;
      }
      else
      {
        if ((formData.gender !== "Male") && (formData.gender !== "Female"))
        {
          notify(errorMessages.gender);
          return false;
        }
        else
        {
          if (formData.age < 0)
          {
            notify(errorMessages.age);
            return false;
          }
          else
          {
            if (formData.weight < 0)
            {
              notify(errorMessages.weight);
              return false;
            }
            else
            {
              if (formData.vaccinated === "")
              {
                notify(errorMessages.vaccinated);
                return false;
              }
              else
              {
                if ((formData.image === "") || (formData.image === null))
                {
                  notify(errorMessages.image);
                  return false;
                }
                else
                {
                  return true;
                }
              }
            }
          }
        }
      }
    }
  }

  const notify = (errorMsg) => {
    toast.error(errorMsg, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  const dispatch = useDispatch();

  const onFormSubmit = async (e) => {
    e.preventDefault();

    if (errorChecking()) {
      dispatch(addPet(formData));

      //closing Modal
      toggleModal();
    }
    else
    {
      console.log('error');
    }
  };

  return (
    <>
      <Box sx={style}>

        <Box
          component="form"
          //handleSubmit validates inputs prior to submission of Form
          onSubmit={onFormSubmit}
          sx={{
            '& > :not(style)': { m: 1, width: '50ch' },
            p: 3,
            textAlign: "center"
          }}
          noValidate
          autoComplete="off"
        >

          <TextField id="outlined-basic" label="Pet Name" variant="outlined"
            name="name" onChange={handleInputChange} value={formData.name}/>

          <br />
          <FormControl fullWidth>
            <InputLabel id="species-label">Species:</InputLabel>
            <Select
              labelId="species-label"
              id="species"
              name="species"
              label="Species:"
              onChange={handleInputChange}
              value={formData.species}
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
            name="breed" onChange={handleInputChange} value={formData.breed}
          />
          <br />
          <br />

          <input
              accept="image/*"
              style={{ display: 'none' }}
              id="image-upload"
              type="file"
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
            id="gender"
            aria-labelledby="gender"
            name="gender"
            sx={{display: "flex", justifyContent: "center"}}
            value={formData.gender}
            onChange={handleInputChange}
          >
            <FormControlLabel value="Male" control={<Radio />} label="Male" />
            <FormControlLabel value="Female" control={<Radio />} label="Female" />
          </RadioGroup>

          <TextField defaultValue={0} type="number" id="outlined-basic" label="Age" variant="outlined"
            name="age" onChange={handleInputChange} value={formData.age}
          />
          <br />

          <TextField defaultValue={0} type="number" id="outlined-basic" label="Weight (kg)" variant="outlined"
            name="weight" onChange={handleInputChange} value={formData.weight}
          />
          <br />
          <br />

          <FormLabel id="vaccination-status">Vaccination Status:</FormLabel>
          <RadioGroup
            row
            aria-labelledby="vaccination-status"
            name="vaccinated"
            sx={{display: "flex", justifyContent: "center"}}
            value={formData.vaccinated}
            onChange={handleInputChange}
          >
            <FormControlLabel value="Complete" control={<Radio />} label="Complete" />
            <FormControlLabel value="Partial" control={<Radio />} label="Partial" />
            <FormControlLabel value="Unvaccinated" control={<Radio />} label="Unvaccinated" />
          </RadioGroup>

          <Button type="submit" variant="contained"><b style={{color:"white"}}>Add</b></Button>
        </Box>
        <ToastContainer />
      </Box>
    </>
  )
}
