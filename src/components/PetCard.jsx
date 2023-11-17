/* eslint-disable react/prop-types */

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import Matcha from "../assets/myCat.jpg"

export default function PetCard({pet})
{
  return (
    <Card sx={{ maxWidth: 345, margin: 5}}>

      <CardMedia
        component="img"
        alt="Matcha"
        height="140"
        src={Matcha}
      />

      <CardContent>

        <Typography gutterBottom variant="h5" component="div">
          {pet.name}
        </Typography>

        <Typography variant="body2" color="text.primary">
          Type: {pet.species}
        </Typography>

        <Typography variant="body2" color="text.primary">
          Gender: {pet.gender}
        </Typography>

      </CardContent>

    </Card>
  )
}
