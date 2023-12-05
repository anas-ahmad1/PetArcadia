/* eslint-disable react/prop-types */

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import Matcha from "../assets/myCat.jpg"

import { useDispatch } from "react-redux";
import { deletePet } from "../redux/petSlice";

//NOTE THAT WE NEED THIS LINK FOR ROUTING
//MUI LINK COMPONENT WILL NOT WORK
import { Link } from "react-router-dom";

import "./ViewPetCard.css"

export default function PetCard({pet})
{
  const dispatch = useDispatch();

  const confirmDelete = () => {
    let answer = window.confirm(`Do you want to delete ${pet.name} forever?`);

    if(answer)
    {
      dispatch(deletePet(pet.id));
    }
  }

  return (
    <Card sx={{alignSelf:'center', width:300, marginTop: 10, marginX: 5, paddingX: 2, borderRadius: 5, boxShadow:'0 4px 4px 0 rgba(0,0,0,0.4)'}}>

      <Grid container>
        <Grid item xs={2}>
          <Tooltip title="Delete">
            <Button size="large" onClick={confirmDelete}>
              <DeleteIcon />
            </Button>
          </Tooltip>
        </Grid>
        <Grid item xs={8}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <CardMedia
              component="img"
              alt="Matcha"
              src={pet.image ? pet.image : Matcha}
              sx={{ borderRadius: "50%"}}
              style={{
                alignContent: "center",
                position: "absolute",
                width: "100%",
                maxWidth: "100px",
                height: "100px"
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Tooltip title="Edit">
            <Button size="large" as={Link} to={`/pets/${pet.id}`}>
              <EditIcon />
            </Button>
          </Tooltip>
        </Grid>
      </Grid>

      <CardContent sx={{textAlign: "center"}}>
        <Typography gutterBottom variant="h4" component="div">
          {pet.name}
        </Typography>
      </CardContent>

    </Card>
  )
}
