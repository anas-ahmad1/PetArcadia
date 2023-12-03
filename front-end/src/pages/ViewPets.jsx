import { useState } from 'react';

import { Button } from '@mui/material';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import PetList from '../components/PetList';
import AddPet from '../components/AddPet';
import SideBar from '../components/SideBar';

import { useMediaQuery } from "@mui/material";

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { getPetsFromMongoResponse } from '../redux/petSlice'

import "./ViewPets.css"



export default function ViewPets() {

  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);

  const isMediumScreen = useMediaQuery('(max-width:900px)'); {/*Media query used to make page responsive*/ }

  const dispatch = useDispatch()

  useEffect(()=> {
    const fetchData = async() => {
        try
        {
          //this is fetching all pets (of a user) from DB
          const response = await axios.get('http://localhost:3000/pets');

          //sending the response (all pets) to REDUX
          dispatch(getPetsFromMongoResponse(response.data));
        }
        catch(err)
        {
          console.log(err)
        }
    }
    fetchData();
  })

  //getting list of pets from REDUX
  const pets = useSelector(state => state.pets.pets);

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
        style={{alignItems:'center', justifyContent:'center', overflow:'auto'}}
      >
        <AddPet toggleModal={toggleOpen}/>
      </Modal>

    </main>
  );
}
