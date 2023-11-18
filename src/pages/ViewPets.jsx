import { useState } from 'react';

import { Button } from '@mui/material';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import PetList from '../components/PetList';
import AddPet from '../components/AddPet';

import "./ViewPets.css"

function initialisePetsList()
{
  const myPets = [
    { id: 1, name: 'Matcha', species: 'Cat', breed: "Calico", gender: "Male", age: 1, weight: 5},
    { id: 2, name: 'Cleo', species: 'Dog', breed: "Golden Retriever", gender: "Male", age: 1, weight: 5 },
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
      <Grid container spacing={15} pt={5} >

        <Grid item xs={4}>
        </Grid>

        <Grid item xs={4} sx={{textAlign: "center"}}>
          <b className='Heading'>YOUR PETS</b>
        </Grid>

        <Grid item xs={4} sx={{textAlign: "center"}}>
          <Button variant='contained' color="primary" size="large" style={{ fontSize: "1.5rem", borderRadius: "10px"}}
            startIcon={<AddCircleOutlineIcon style={{fontSize: "2rem", color: 'white' }} />}
            onClick={toggleOpen}
          >
            <b className='buttonTextWhite'>Add Pet</b>
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
