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
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import useMediaQuery from '@mui/material/useMediaQuery';




export default function Report() {



    const [activeButton, setActive] = useState('LOST');

    const handleButtonClick = (buttonName) => {
        setActive(buttonName)
    }
    const handleImageUpload = (event) => {
        // Handle image upload logic here
        console.log('Image uploaded:', event.target.files[0]);
    };

    const isSmallScreen = useMediaQuery('(max-width:662px)'); {/*Media query used to make page responsive*/ }
    const isSmallerScreen = useMediaQuery('(max-width:568px)');
    const isMoreSmallerScreen = useMediaQuery('(max-width:492px)');
    const isMoreSmallerScreen2 = useMediaQuery('(max-width:408px)');
    const isMoreSmallerScreen3 = useMediaQuery('(max-width:342px)');

    return (

        <Container maxWidth="lg" align='center'> {/*Main Container that defines the paper layout*/}

            <Paper elevation={12} square={false} sx={{ height: "515px", borderRadius: '20px' }}>


                <div>  {/*Div for heading*/}

                    <Typography variant={isMoreSmallerScreen3 ? 'h6' : isMoreSmallerScreen2 ? 'h5' : isSmallerScreen ? "h4" : isSmallScreen ? "h3" : "h2"} align='center' mt={18}>
                        REPORT LOST PET
                    </Typography>

                </div>

                <form action="">

                    <div style={{ paddingTop: '20px' }}>
                        <ButtonGroup  >
                            <Button onClick={() => handleButtonClick('LOST')} sx={{ backgroundColor: activeButton === 'FOUND' ? 'primary.light' : 'primary.main', color: 'white', fontSize: isMoreSmallerScreen2 ? 10 : isSmallScreen ? 15 : isSmallerScreen ? 4 : 20, width: isMoreSmallerScreen3 ? 80 : isMoreSmallerScreen2 ? 100 : 150, borderRadius: '9px' }}>LOST</Button>

                            <Button onClick={() => handleButtonClick('FOUND')} sx={{ backgroundColor: activeButton === 'LOST' ? 'primary.light' : 'primary.main', color: 'white', fontSize: isMoreSmallerScreen2 ? 10 : isSmallScreen ? 15 : isSmallScreen ? 4 : 20, width: isMoreSmallerScreen3 ? 80 : isMoreSmallerScreen2 ? 100 : 150, borderRadius: '9px' }}>FOUND</Button>
                        </ButtonGroup>
                    </div>

                    {/*Box Layout*/}

                    <Box mt={4} component="form"
                        noValidate
                        autoComplete="off">

                        <div style={{ paddingTop: '10px', display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row', justifyContent: 'space-evenly' }}> {/*Div for name and contact fields*/}

                            <TextField
                                id="outlined-required"
                                label="Name"
                                placeholder="Name"
                                type='text'
                                sx={{ width: isMoreSmallerScreen3 ? '150px' : isMoreSmallerScreen2 ? '200px' : isMoreSmallerScreen ? '260px' : isSmallerScreen ? '300px' : isSmallScreen ? '450px' : '300px', marginBottom: isSmallScreen ? '10px' : '0', marginLeft: isMoreSmallerScreen ? '90px' : isSmallerScreen ? '110px' : isSmallScreen ? '70px' : '0px' }}
                            />


                            <TextField

                                id="outlined-required2"
                                placeholder='Contact'
                                type="tel"
                                label='Contact'
                                sx={{ width: isMoreSmallerScreen3 ? '150px' : isMoreSmallerScreen2 ? '200px' : isMoreSmallerScreen ? '260px' : isSmallerScreen ? '300px' : isSmallScreen ? '450px' : '300px', marginBottom: isSmallScreen ? '10px' : '0', marginLeft: isMoreSmallerScreen ? '90px' : isSmallerScreen ? '110px' : isSmallScreen ? '70px' : '0px' }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LocalPhoneIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>

                        <div style={{
                            paddingTop: isSmallScreen ? '5px' : '80px', display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row', justifyContent: 'space-evenly'
                        }}> {/*Div for Description and image upload*/}

                            <Card sx={{ border: '2px dotted', width: isMoreSmallerScreen3 ? '150px' : isMoreSmallerScreen2 ? '200px' : isMoreSmallerScreen ? '260px' : isSmallerScreen ? '300px' : isSmallScreen ? '450px' : '300px', marginBottom: isSmallScreen ? '10px' : '0', marginLeft: isMoreSmallerScreen ? '90px' : isSmallerScreen ? '110px' : isSmallScreen ? '70px' : '0px' }}>
                                <CardContent>
                                    <input
                                        accept="image/*"
                                        style={{ display: 'none', fontSize: isMoreSmallerScreen3 ? 5 : 10 }}
                                        id="contained-button-file"
                                        type="file"
                                        onChange={handleImageUpload}
                                        name='PET PICTURE'

                                    />
                                    <label htmlFor="contained-button-file">
                                        <Button
                                            variant="contained"
                                            component="span"
                                            startIcon={<CloudUploadIcon />}
                                        >
                                            UPLOAD PET PICTURE
                                        </Button>
                                    </label>


                                </CardContent>
                            </Card>

                            <TextareaAutosize
                                id="outlined-multiline-static"
                                label="Description"
                                placeholder='Description'
                                minRows={4}
                                sx={{ width: isMoreSmallerScreen3 ? '100px' : isMoreSmallerScreen2 ? '200px' : isMoreSmallerScreen ? '100px' : isSmallerScreen ? '200px' : isSmallScreen ? '450px' : '300px', marginBottom: isSmallScreen ? '10px' : '0', marginLeft: isMoreSmallerScreen ? '90px' : isSmallerScreen ? '110px' : isSmallScreen ? '70px' : '0px' }}
                            />

                        </div>
                    </Box>


                    <div style={{ marginTop: isMoreSmallerScreen ? '8px' : isSmallScreen ? '30px' : '60px' }}> {/*Div for Report Button*/}
                        <Button
                            variant="contained"
                            component="span"
                            align="center"
                            sx={{ color: 'white', fontSize: isMoreSmallerScreen ? 12 : isSmallScreen ? 15 : 20, width: 210, borderRadius: '9px' }}
                        >
                            REPORT
                        </Button>
                    </div>




                </form>


            </Paper >
        </Container >

    );
}