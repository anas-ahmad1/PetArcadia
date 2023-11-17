import { useState } from 'react';

import { Button } from '@mui/material';
import Modal from '@mui/material/Modal';

import PetList from '../components/PetList';
import AddPet from '../components/AddPet';

import Grid from '@mui/material/Grid';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


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
      <Grid container spacing={2} pt={5}>
        <Grid item xs={8}>
          <h1>Your Pets:</h1>
        </Grid>
        <Grid item xs={4}>
          <br />
          <Button variant='contained' color="success" size="large" startIcon={<AddCircleOutlineIcon />}
           onClick={toggleOpen}>
            Add Pet
          </Button>
        </Grid>
      </Grid>

      <main>

        <PetList pets={pets}/>

        <Modal
          open={open}
          onClose={toggleOpen}
        >
          <AddPet onAddPet={handleAddPet} toggleModal={toggleOpen}/>
        </Modal>

      </main>

    </>
  );
}
