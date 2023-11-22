import { useState } from 'react';

import { Button } from '@mui/material';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import PetList from '../components/PetList';
import AddPet from '../components/AddPet';
import SideBar from '../components/SideBar';

import { useMediaQuery } from "@mui/material";

import "./ViewPets.css"

function initialisePetsList()
{
  const myPets = [
    { id: 1, name: 'Matcha', species: 'Cat', breed: "Calico", gender: "Male", age: 1, weight: 5, vaccinated: "Partial"},
    { id: 2, name: 'Cleo', species: 'Dog', breed: "Golden Retriever", gender: "Male", age: 1, weight: 5, vaccinated: "Complete" },
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

  const isMediumScreen = useMediaQuery('(max-width:900px)'); {/*Media query used to make page responsive*/ }

  return (
    <main className='Wrapper'>
      <Grid container pt={5} >

        <Grid item xs={isMediumScreen ? 0 : 4}>
        </Grid>

        <Grid item xs={isMediumScreen ? 12 : 4} sx={{textAlign: "center"}}>
          <b className='Heading'>YOUR PETS</b>
        </Grid>

        <Grid item xs={isMediumScreen ? 12 : 4} sx={{textAlign: "center"}}>
          <Button variant='contained' color="primary" size="large" style={{ fontSize: "1.5rem", borderRadius: "10px"}}
            startIcon={<AddCircleOutlineIcon style={{fontSize: "2rem", color: 'white' }} />}
            onClick={toggleOpen}
          >
            <b className='buttonTextWhite'>Add Pet</b>
          </Button>
        </Grid>
      </Grid>

      <Grid container pt={5} >
        <Grid item xs={1} container>
          <div className='vertical-center'>
            <SideBar />
          </div>
        </Grid>
        <Grid item xs={11}>
          <PetList pets={pets}/>
        </Grid>
      </Grid>


      <Modal
        open={open}
        onClose={toggleOpen}
        style={{alignItems:'center', justifyContent:'center', overflow:'auto'}}
      >
        <AddPet onAddPet={handleAddPet} toggleModal={toggleOpen}/>
      </Modal>

    </main>
  );
}
