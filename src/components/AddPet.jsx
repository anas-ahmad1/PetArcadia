/* eslint-disable react/prop-types */

import {useForm} from "react-hook-form";

import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  display: "flex",
  justifyContent: "center",

  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};


export default function AddPet({onAddPet, toggleModal})
{

  const {register, handleSubmit} = useForm({mode: "onChange" });

  const registerOptions = {
    name: {required: "Name cannot be blank"},
    species: {required: "Species cannot be blank"},
    breed: {required: "Breed cannot be blank"},
    gender: {required: "Select one Gender"},
    age: {
      required: "Age is required",
      min: {
        value: -1,
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
        value: -1,
        message: "Weight must be atleast 0",
      },
      max: {
        value: 300,
        message: "Weight must be less than 300",
      }
    }
  }

  const onFormSubmit = (data) => {
    onAddPet(data);

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
            '& > :not(style)': { m: 1, width: '35ch' },
            border: 1,
            p: 3,
            textAlign: "center"
          }}
          noValidate
          autoComplete="off"
        >

          <TextField id="outlined-basic" label="Pet Name" variant="outlined"
            name="name" {...register("name", registerOptions.name)}/>

          <br />

          <TextField id="outlined-basic" label="Species" variant="outlined"
            name="species" {...register("species", registerOptions.species)}
          />
          <br />

          <TextField id="outlined-basic" label="Breed" variant="outlined"
            name="breed" {...register("breed", registerOptions.breed)}
          />
          <br />

          <RadioGroup
            row
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

          <Button type="submit" variant="contained"><b style={{color:"white"}}>Add</b></Button>
        </Box>
      </Box>
    </>
  )
}
