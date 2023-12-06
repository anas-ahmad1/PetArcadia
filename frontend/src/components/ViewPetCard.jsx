/* eslint-disable react/prop-types */

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';

import Matcha from "../assets/myCat.jpg"

import "./ViewPetCard.css"

export default function PetCard({pet})
{

  return (
    <Card sx={{minWidth:300, marginTop: 10, marginX: 5, paddingX: 2, borderRadius: 5, boxShadow:'0 4px 4px 0 rgba(0,0,0,0.4)'}}>

      <Grid container>
        <Grid item xs={2}>
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
            <Button size="large" sx={{all:"initial", color:"#47494F"}} to="/">
              <EditIcon/>
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
