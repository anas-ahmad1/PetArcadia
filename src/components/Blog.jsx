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
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import Card from '@mui/material/Card';
import Grid from '@mui/system/Unstable_Grid';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Blogcard from './BlogCard';

export default function Blogs() {



    return (
        <>
            {/*Box Layout used to represent the main image of page */}
            <Box sx={{
                display: 'flex', height: '500px', justifyContent: 'center', alignItems: 'center', backgroundSize: 'cover',
                position: 'relative', backgroundRepeat: 'no-repeat', backgroundImage: 'linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)),url( "src/assets/BlogCover.jpg")',
                marginTop: '50px'
            }}>
                <Typography variant='h3' sx={{ color: 'white', marginBottom: '140px' }}>PET BLOGS</Typography>
            </Box>
            {/*Container Layout used to represent Article heading */}
            <Container maxWidth='lg'>
                <Typography variant='h4' sx={{ textAlign: 'center', marginTop: '20px' }}>ARTICLES</Typography>
            </Container>
            {/*Grid Layout used to represent cards of Blogs */}
            <Grid container spacing={3}>
                <Blogcard />

            </Grid>
        </>
    )

}
