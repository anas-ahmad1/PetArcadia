import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/system/Unstable_Grid';


export default function Blogcard() {
    const [isBookMarked, setBookMarked] = useState(false);

    const handleBookMarkClick = () => {
        setBookMarked(!isBookMarked)
    }

    return (
        <>
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
        </>
    )


}