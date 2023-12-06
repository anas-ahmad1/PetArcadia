import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Container from '@mui/material/Container';
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import Card from '@mui/material/Card';
import Grid from '@mui/system/Unstable_Grid';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Aboutcard from './AboutCard';

export default function Aboutus() {

    return (

        <>
            <Box sx={{
                display: 'flex', height: '475px', justifyContent: 'center', alignItems: 'center', backgroundSize: 'cover',
                position: 'relative', backgroundRepeat: 'no-repeat', backgroundImage: 'linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)),url( "src/assets/A1.jpg")',
                marginTop: '50px', backgroundAttachment: 'fixed'
            }}>
                <Typography variant='h3' sx={{ color: 'white', marginBottom: '140px' }}>ABOUT US</Typography>
            </Box>
            <Container maxWidth="lg" sx={{ mt: '70px' }}>
                <Grid container spacing={2}>
                    <Aboutcard name="MOOSA IMRAN" roll="20L-0917" github="https://github.com/MoosaImran50" email="l200917@lhr.nu.edu.pk" insta="https://www.instagram.com/accounts/login/" facebook="https://www.facebook.com/login/"/>
                    <Aboutcard name="MUSTAFA NOSHER" roll="20L-0925" github="https://github.com/MustafaNosher" email="l200925@lhr.nu.edu.pk" insta="https://www.instagram.com/accounts/login/" facebook="https://www.facebook.com/login/" />
                    <Aboutcard name="ANAS AHMAD" roll="20L-0932" github="https://github.com/anas-ahmad1" email="l200932@lhr.nu.edu.pk" insta="https://www.instagram.com/accounts/login/" facebook="https://www.facebook.com/login/"/>
                    <Aboutcard name="ZIYAD TALHA" roll="20L-0985" github="https://github.com/ziyadtalha" email="l200985@lhr.nu.edu.pk" insta="https://www.instagram.com/accounts/login/" facebook="https://www.facebook.com/login/" />
                </Grid>
            </Container>
        </>
    )
}