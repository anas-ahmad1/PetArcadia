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

import Matcha from "../assets/myCat.jpg"

import "./PetCard.css"

export default function PetCard({pet})
{
  return (
    <Card sx={{minWidth:300, maxWidth: 450, margin: 5, padding: 2}}>

      <Grid container>
        <Grid item xs={3}>
        </Grid>
        <Grid item xs={6}>
          <CardMedia
            component="img"
            alt="Matcha"
            src={Matcha}
            sx={{
              borderRadius: "50%",
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <Tooltip title="Edit">
            <Button size="large" as={Link} to="/" sx={{mt: 5}}>
              <EditIcon />
            </Button>
          </Tooltip>
        </Grid>
      </Grid>

      <CardContent
        sx={{textAlign: "center"}}
      >

        <Typography gutterBottom variant="h4" component="div">
          {pet.name}
        </Typography>

      </CardContent>

    </Card>
  )
}
