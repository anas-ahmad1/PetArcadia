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
import { Link, NavLink } from 'react-router-dom';


export default function Blogcard(props) {

    const [isBookMarked, setBookMarked] = useState(false);

    const handleBookMarkClick = () => {
        setBookMarked(!isBookMarked)
    }
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const dateFormatter = new Intl.DateTimeFormat('en-US', options);
    const currentDate = dateFormatter.format(new Date());
    return (
        <>

            <Grid item xs={12} sm={6} md={4}>


                <Card sx={{ maxWidth: '100%' }}>
                    <CardMedia
                        sx={{ height: 240 }}
                        image={props.cardmedia}
                        title="green iguana"
                    />
                    <CardContent>

                        <Typography gutterBottom variant="h5" component="div" as={Link} to={`/blogdetails/${props.id}`} >

                            {props.Title.length > 20 ? props.Title.substring(0, 20) + '...' : props.Title}

                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {props.cardText.length > 20 ? props.cardText.substring(0, 20) + '...' : props.cardText}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ display: 'flex', margin: '0 10px', justifyContent: "space-between" }}>
                        <Box sx={{ display: "flex" }}>
                            <Avatar alt="User Profile" src={props.userimage}>
                            </Avatar>
                            <Box ml={2}>
                                <Typography variant="subtitle2" component="p">
                                    {props.authorName}
                                </Typography>
                                <Typography variant="subtitle2" component="p" color="textSecondary">
                                    {currentDate}
                                </Typography>
                            </Box>
                        </Box>
                        {/* <Box onClick={handleBookMarkClick}>
                            {isBookMarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}

                        </Box> */}
                    </CardActions>
                </Card>
            </Grid >
        </>
    )


}