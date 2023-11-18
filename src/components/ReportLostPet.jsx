import '@fontsource/roboto/700.css';
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



export default function Report() {



    const [activeButton, setActive] = useState('LOST');

    const handleButtonClick = (buttonName) => {
        setActive(buttonName)
    }
    const handleImageUpload = (event) => {
        // Handle image upload logic here
        console.log('Image uploaded:', event.target.files[0]);
    };

    return (

        <Container maxWidth="lg" align='center'> {/*Main Container that defines the paper layout*/}

            <Paper elevation={12} square={false} sx={{ height: "550px", borderRadius: '20px' }}>


                <div>  {/*Div for heading*/}

                    <Typography variant="h3" gutterBottom align='center' mt={18} color={'GrayText'}>
                        REPORT LOST PET
                    </Typography>

                </div>

                <form action="">





                    <ButtonGroup  >
                        <Button onClick={() => handleButtonClick('LOST')} sx={{ backgroundColor: activeButton === 'FOUND' ? 'rgba(135,206,250,0.5)' : 'primary.main', color: 'white', fontSize: 20, width: 150, borderRadius: '9px' }}>LOST</Button>

                        <Button onClick={() => handleButtonClick('FOUND')} sx={{ backgroundColor: activeButton === 'LOST' ? 'rgba(135,206,250,0.5)' : 'primary.main', color: 'white', fontSize: 20, width: 150, borderRadius: '9px' }}>FOUND</Button>
                    </ButtonGroup>



                    <Box mt={4} component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 5, width: '40ch' },

                        }}
                        noValidate
                        autoComplete="off"> {/*Box for all the Input Fields*/}


                        <Box sx={{
                            '& .MuiOutlinedInput-notchedOutline': {
                                border: 'none', // Remove the bottom line
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                border: 'none', // Remove the bottom line on hover
                            },
                            '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                                border: 'none', // Remove the bottom line when focused
                            },
                            '& .MuiOutlinedInput-input': {
                                padding: '15px', // Adjust padding as needed
                            },
                            '& .MuiTextField-root': {
                                m: 3,
                                borderRadius: '17px', // Adjust the border radius as needed
                                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)', // Adjust the shadow as needed

                            },
                        }}>


                            <TextField
                                id="outlined-required"
                                label="Name"
                                placeholder="Name"
                            />


                            <TextField

                                id="outlined-required2"
                                placeholder='Contact'
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LocalPhoneIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />

                            <div style={{ paddingLeft: '50px' }}>
                                <input
                                    accept="image/*"
                                    style={{ display: 'none' }}
                                    id="contained-button-file"
                                    type="file"
                                    onChange={handleImageUpload}
                                    name='PET PICTURE'

                                />
                                <label htmlFor="contained-button-file">
                                    <Button
                                        variant="contained"
                                        component="span"
                                        sx={{ mt: 10, color: 'white', mr: 12, ml: 4 }}
                                        startIcon={<CloudUploadIcon />}
                                    >
                                        UPLOAD PET PICTURE
                                    </Button>
                                </label>


                                <TextField
                                    id="outlined-multiline-static"
                                    multiline
                                    rows={4}
                                    label="Description"
                                    placeholder='Description'

                                />


                            </div>
                        </Box>





                        <div >
                            <Button
                                variant="contained"
                                component="span"
                                align="center"
                                sx={{ color: 'white', fontSize: 20, width: 210, borderRadius: '9px' }}
                            >
                                REPORT
                            </Button>
                        </div>

                    </Box>


                </form>


            </Paper >
        </Container>

    );
}
