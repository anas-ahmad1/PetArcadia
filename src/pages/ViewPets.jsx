import { useState } from 'react';

import { Button } from '@mui/material';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import PetList from '../components/PetList';
import AddPet from '../components/AddPet';

function initialisePetsList()
{
  const myPets = [
    { name: 'Matcha', species: 'Cat', gender: "Male", id: 1 },
    { name: 'Cleo', species: 'Dog', gender: "Male", id: 2 },
  ];
  return myPets;
}

export default function ViewPets() {
  const [pets, setPets] = useState(initialisePetsList);

  const handleAddPet = (newPet) => {
    const newPetList = [...pets, newPet];
    setPets(newPetList);
  };

  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);

  return (
    <>
      <Grid container spacing={2} pt={5} >

        <Grid item xs={6} sx={{textAlign: "center"}}>
          <h1>Your Pets:</h1>
        </Grid>

        <Grid item xs={6} sx={{textAlign: "center"}}>
          <br />
          <Button variant='contained' color="primary" size="large" startIcon={<AddCircleOutlineIcon />}
           onClick={toggleOpen}>
            Add Pet
          </Button>
        </Grid>
      </Grid>

      <PetList pets={pets}/>

      <Modal
        open={open}
        onClose={toggleOpen}
        style={{alignItems:'center',justifyContent:'center'}}
      >
        <AddPet onAddPet={handleAddPet} toggleModal={toggleOpen}/>
      </Modal>

    </>
  );
}
