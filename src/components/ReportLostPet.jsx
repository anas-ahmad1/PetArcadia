import '@fontsource/roboto/700.css';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Container from '@mui/material/Container';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';



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

        <div>{/*Div for Main outline*/}

            <div>  {/*Div for heading*/}

                <Typography variant="h3" gutterBottom align='center' mt={18} color={'GrayText'}>
                    REPORT LOST PET
                </Typography>

            </div>

            <Container align='center'>   {/*Container for Button Gorup*/}

                <ButtonGroup size="large" aria-label="large button group">
                    <Button onClick={() => handleButtonClick('LOST')} sx={{ backgroundColor: activeButton === 'FOUND' ? 'rgba(0,0,0,0.5)' : 'primary.main', color: 'white' }}>LOST</Button>

                    <Button onClick={() => handleButtonClick('FOUND')} sx={{ backgroundColor: activeButton === 'LOST' ? 'rgba(0,0,0,0.5)' : 'primary.main', color: 'white' }}>FOUND</Button>
                </ButtonGroup>



                <Box mt={4} component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"> {/*Box for all the Input Fields*/}

                    <div>
                        <div>
                            <TextField

                                id="outlined-required"
                                label="Name"
                                placeholder='Name'
                            />
                            <TextField

                                id="outlined-required2"
                                label="Contact"
                                placeholder='Contact'
                            />
                        </div>

                        <div>
                            <input
                                accept="image/*"
                                style={{ display: 'none' }}
                                id="contained-button-file"
                                type="file"
                                onChange={handleImageUpload}
                                name='PET PICTURE'

                            />
                            <label htmlFor="contained-button-file" style={{ border: '3px dotted teal' }}>
                                <Button
                                    variant="contained"
                                    component="span"
                                    sx={{ mt: 2, color: 'white', mr: 12, mt: 10, ml: 4 }}
                                >
                                    UPLOAD
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

                    </div>

                    <div>
                        <Button
                            variant="contained"
                            component="span"
                            align="center"
                            sx={{ mt: 2, color: 'white' }}
                        >
                            REPORT
                        </Button>
                    </div>
                </Box>

            </Container>



        </div >



    );
}
