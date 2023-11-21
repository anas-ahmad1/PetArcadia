
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
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Aboutcard(props) {

    return (
        <>
            <Grid item xs={12} sm={6} lg={3}>
                <Card sx={{ maxWidth: 275, boxShadow: '0 2px 4px 0 rgba(0,0,0,0.7)' }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {props.name}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {props.roll}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {props.email}
                        </Typography>
                        <Typography variant="body2">
                            MERN Stack Developer. Senior at FAST NUCES Lahore.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <a href={props.github} target="_blank" rel="noopener noreferrer" style={{ color: "black" }}>
                            <GitHubIcon />
                        </a>
                        <a href={props.insta} target="_blank" rel="noopener noreferrer" style={{ color: "black" }}>
                            <InstagramIcon />
                        </a>
                        <a href={props.facebook} target="_blank" rel="noopener noreferrer" style={{ color: "black" }}>
                            <FacebookIcon />
                        </a>
                    </CardActions>
                </Card>
            </Grid>

        </>
    )
}