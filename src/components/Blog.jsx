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
import useMediaQuery from '@mui/material/useMediaQuery';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';



export default function Blogs() {

    const [isBookMarked, setBookMarked] = useState(false);

    const handleBookMarkClick = () => {
        setBookMarked(!isBookMarked)
    }

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
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ maxWidth: '100%' }}>
                        <CardMedia
                            sx={{ height: 240 }}
                            image="src/assets/cardimage.jpg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                DOGESH HEALTH TIPS
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Make sure your dogesh get all the necessary nutrients to give good average specially on long
                                routes like between Lahore to Kasur....
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ display: 'flex', margin: '0 10px', justifyContent: "space-between" }}>
                            <Box sx={{ display: "flex" }}>
                                <Avatar alt="User Profile" src="src/assets/chinna.png">
                                </Avatar>
                                <Box ml={2}>
                                    <Typography variant="subtitle2" component="p">
                                        ChinnaSuwami
                                    </Typography>
                                    <Typography variant="subtitle2" component="p" color="textSecondary">
                                        November 20,2023
                                    </Typography>
                                </Box>
                            </Box>
                            <Box onClick={handleBookMarkClick}>
                                {isBookMarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}

                            </Box>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </>
    )

}
