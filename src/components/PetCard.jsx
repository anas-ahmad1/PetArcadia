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

export default function PetCard({pet})
{
  return (
    <Card sx={{ maxWidth: 350, margin: 5}}>

      <Grid container>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={8}>
          <CardMedia
            component="img"
            alt="Matcha"
            src={Matcha}
            sx={{
              borderRadius: "50%",
            }}
          />
        </Grid>
        <Grid item xs={2}>
          <Tooltip title="Edit">
            <Button size="large" as={Link} to="/">
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
