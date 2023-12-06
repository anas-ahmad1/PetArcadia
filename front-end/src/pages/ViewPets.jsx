import { Button } from '@mui/material';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useMediaQuery } from "@mui/material";

import "./ViewPets.css"

import PetList from '../components/PetList';
import AddPet from '../components/AddPet';
import SideBar from '../components/SideBar';

import { useState } from 'react';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getPets } from '../redux/petSlice'


export default function ViewPets() {

  const dispatch = useDispatch();

  //getPets fetches pets list from DB and populates the store
  useEffect(() => {
    dispatch(getPets());
  }, []);

  //getting list of pets from REDUX store
  const pets = useSelector(state => state.pets.pets);


  //managing modal state:
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);

  /*Media query used to make page responsive*/
  const isMediumScreen = useMediaQuery('(max-width:900px)');

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
            <b className='buttonTextWhite'>
              Add Pet
            </b>
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
        style={{alignItems:'center', justifyContent:'center'}}
      >
        <AddPet toggleModal={toggleOpen}/>
      </Modal>

    </main>
  );
}
