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
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

export default function Blogs() {



    return (
        <>
            {/*Box Layout used to represent the main image of page */}
            <Box sx={{
                display: 'flex', height: '500px', justifyContent: 'center', alignItems: 'center', backgroundSize: 'cover',
                position: 'relative', backgroundRepeat: 'no-repeat', backgroundImage: 'linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)),url( "src/assets/BlogCover.jpg")',
                marginTop: '50px', backgroundAttachment: 'fixed'
            }}>
                <Typography variant='h3' sx={{ color: 'white', marginBottom: '140px' }}>PET BLOGS</Typography>
            </Box>
            {/*Container Layout used to represent Article heading */}
            <Container maxWidth='lg'>
                <Typography variant='h4' sx={{ textAlign: 'center', marginTop: '20px' }}>ARTICLES</Typography>
            </Container>
            {/*Grid Layout used to represent cards of Blogs */}
            <Grid container spacing={3}>

                <Blogcard cardText="Fun Place that you can visit with your pets..... "
                    authorName="Mark"
                    Title="Fun Pet Places"
                    cardmedia="src/assets/cardimage.jpg"
                    userimage="src/assets/user4.jpg"
                />
                <Blogcard cardText="Your Pet Health matters..... "
                    authorName="David"
                    Title="Pet Health Care"
                    cardmedia="src/assets/c2.jpg"
                    userimage="src/assets/user3.jpg"
                />
                <Blogcard cardText="Prefer using these brands food..... "
                    authorName="John"
                    Title="Awsome Pet Food!"
                    cardmedia="src/assets/c1.jpg"
                    userimage="src/assets/user2.jpg"
                />
                <Blogcard cardText="Pet Toys Shop that..... "
                    authorName="Emma"
                    Title="What to buy to Welcome your new pet home?"
                    cardmedia="src/assets/c3.jpg"
                    userimage="src/assets/user1.jpg"
                />

            </Grid>
            <Box my={4}>
                <Pagination count={10} sx={{ display: 'flex', justifyContent: "center" }} />
            </Box>
        </>
    )

}
