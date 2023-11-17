/* eslint-disable react/prop-types */

import { useState } from "react";

import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

//import FormLabel from '@mui/material/FormLabel';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



export default function AddPet({onAddPet, toggleModal})
{

  const initialisePetDetails = () => {
    return( { name: "", species: "", gender: ""});
  }

  const [petDetails, setPetDetails] = useState(initialisePetDetails);

  const updateDetails = (eventObject) =>
  {
    const field = eventObject.target.name;
    const value = eventObject.target.value;

    setPetDetails( (oldDetails) => {
      const newDetails = {...oldDetails};

      newDetails[field] = value;

      return newDetails;
    });
  }

  const validatePetDetails = () => {
    if((petDetails.name !== "") && (petDetails.species !== "") && ((petDetails.gender === "Male") || (petDetails.gender === "Female")))
    {
      return true;
    }
    return false;
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if(validatePetDetails())
    {
      onAddPet(petDetails);

      //reset pet details
      setPetDetails(initialisePetDetails);

      //closing modal
      toggleModal();
    }
  }

  return (
    <>
      <Box sx={style}>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
            border: 1,
            p: 3
          }}
          noValidate
          autoComplete="off"
        >

          <TextField id="outlined-basic" label="Pet Name" variant="outlined"
            name="name" value={petDetails.name} onChange={updateDetails}/>

          <br />

          <TextField id="outlined-basic" label="Pet Type" variant="outlined"
            name="species" value={petDetails.species} onChange={updateDetails}
          />
          <br />

          <RadioGroup
            row
            name="gender"
            value={petDetails.gender}
            onChange={updateDetails}
          >
            <FormControlLabel value="Female" control={<Radio />} label="Female" />
            <FormControlLabel value="Male" control={<Radio />} label="Male" />
          </RadioGroup>

          <Button type="submit" variant="contained">Add</Button>
        </Box>
      </Box>
    </>
  )
}
