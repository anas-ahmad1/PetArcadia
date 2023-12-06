import Paper from "@mui/material/Paper";
import * as React from "react";
import Box from "@mui/material/Box";
import CustomLogo from "../assets/CustomLogo";
import { Link, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import myImg from "../assets/profilepic.jpeg";
import { Image } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Input from "@mui/material/Input";
import { useForm } from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMediaQuery } from "@mui/material";
import {useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {update, reset} from '../redux/authSlice'
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function UserProfile() {
  
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md2"));

  const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  console.log(user._id)

  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    contact:user.contact,
    gender: user.gender,
    password: '',
    password2: '',
    oldPassword: '',
    image: user.image
  })

  const { name, email, contact, gender, password, password2, oldPassword, image } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(()=> {
    if(isError){
      toast.error(message)
    }

    console.log("in useEffect")

    if(isSuccess){
      console.log("Success")
      toast.success("Updated!")
    }

    if(!user) {
      navigate('/login')
    }

    dispatch(reset())
  },[user, isError, isSuccess, message, navigate, dispatch])

  const handleImageChange = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setFormData({ ...formData, image: reader.result }); // base64encoded string
    };
    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
  };


  const onSubmit = (e) => {
    console.log("OnSubmit run")
    e.preventDefault()

    if (!name) {
      notify("Name cannot be empty");
      return; // Do not proceed with the login if name is empty
    }

    if (!contact) {
      notify("Contact cannot be empty");
      return; // Do not proceed with the login if contact is empty
    }

    const phoneRegex = /^(?:\+923\d{2}-\d{7}|\+923\d{9}|03\d{2}-\d{7}|03\d{9})$/
    if (!phoneRegex.test(contact)) {
      notify("Invalid phone number");
      return;
    }

    if ((password && (!password2 || !oldPassword)) || (password2 && (!password || !oldPassword)) || (oldPassword && (!password2 || !password))) {
      notify("Complete the password fields");
      return; 
    }

    if(oldPassword && password && password2 && password !== password2){
      notify("Passwords do not match");
      return; 
    }

    if(oldPassword && password && password2 && password.length<6)
    {
      notify("Password must be at least 6 characters");
      return; 
    }


    const userData = {
      id : user._id,
      name,
      email,
      contact,
      image,
      oldPassword,
      password,
    }

    console.log(userData)
    dispatch(update(userData))
  }


  const notify = (errorMsg) => {
    toast.error(errorMsg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };


  return (
    <>
      {/* <CustomLogo color={theme.palette.primary.main} /> */}
      <form onSubmit={onSubmit}>
        {/* {errors?.oldpassword && notify(errors.oldpassword.message)}
        {errors?.newpassword && notify(errors.newpassword.message)} */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            "& > :not(style)": {
              //mx:isLargeScreen ? 20 : 5,
              mt: 2,
              width: "auto",
              height: "auto",
              backgroundColor: theme.palette.primary.light,
            },
          }}
        >
          <Paper sx={{borderRadius:"20px"}}>
            <Grid container spacing={2} justifyContent={"center"}>
              <Grid container item xs={isLargeScreen ? 6 : 12} justifyContent={"center"}>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    "& > :not(style)": {
                      my: 4,
                      ml: isLargeScreen? 6 : 0,
                      mr: isLargeScreen? 2 : 0,
                      width: "auto",
                      height: "auto",
                    },
                  }}
                >
                  <Paper sx={{borderRadius:"20px"}}>
                    <Grid
                      item
                      xs={12}
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      <input
                        accept="image/*"
                        style={{ display: "none" }}
                        id="contained-button-file"
                        //id="image-upload"
                        name="image-upload"
                        type="file"
                        onChange={handleImageChange}
                      />
                      <label htmlFor="contained-button-file">
                        <IconButton component="span" sx={{mt:3}}>
                          <Avatar
                            src={image} 
                            style={{
                              width: "100px",
                              height: "100px",
                            }}
                          />
                        </IconButton>
                      </label>
                    </Grid>

                    <Grid
                      item
                      xs={12}
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      <Typography variant="h1" fontSize={"1.2rem"}>
                        My Profile
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sx={{ display: "flex", justifyContent: "center", mx: 4 }}
                    >
                      <TextField
                        id="name"
                        name="name"
                        value={name}
                        variant="outlined"
                        onChange={onChange}
                        style={{
                          marginTop: "30px", 
                        }}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      <TextField
                        id="contact"
                        name="contact"
                        value={contact}
                        variant="outlined"
                        onChange={onChange}
                        style={{
                          marginTop: "30px",
                        }}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        my: 4,
                      }}
                    >
                      {/* <Button
                        type="button"
                        variant="contained"
                        color="primary"
                        sx={{ width: "30%" }}
                      >
                        Save
                      </Button> */}
                    </Grid>
                  </Paper>
                </Box>
              </Grid>
             

              <Grid container item xs={isLargeScreen ? 6 : 12} alignContent="baseline"  >
                <Grid container item xs={12} alignContent="baseline" justifyContent="center">
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      "& > :not(style)": {
                        my: 4,
                        mr: isLargeScreen? 6 : 0,
                        ml: isLargeScreen? 2 : 0,
                        width: "auto",
                        height: "auto",
                      },
                    }}
                  >
                    <Paper sx={{borderRadius:"20px"}}>
                      <Grid container item xs={12} alignContent="baseline">
                        {/* <Grid
                          item
                          xs={2}
                          sx={{ display: "flex", justifyContent: "center", mt: 2 }}
                        >
                          
                        </Grid> */}
                        <Grid
                          item
                          xs={12}
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            mt: 2,
                          }}
                        >
                          <EmailTwoToneIcon color="primary"></EmailTwoToneIcon>
                          <Typography
                            variant="h5"
                            marginLeft={"10px"}
                            fontSize={"1rem"}
                          >
                            {email}
                          </Typography>
                        </Grid>
                      </Grid>
                      <hr
                        style={{
                          height: "3px",
                          border: "none",
                          backgroundColor: theme.palette.primary.light,
                        }}
                      />
                      <Grid
                        item
                        xs={12}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          my: 4,
                        }}
                      >
                        <Typography variant="h1" fontSize={"1.2rem"}>
                          Reset Password
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sx={{ display: "flex", justifyContent: "center", mx: 4 }}
                      >
                        <TextField
                          id="oldpassword"
                          name="oldPassword"
                          value={oldPassword}
                          label="Old Password"
                          type={showPassword ? 'text' : 'password'}
                          variant="outlined"
                          onChange={onChange}
                          style={{
                            marginTop: "30px",
                          }}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                  edge="end"
                                >
                                  {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Grid>

                      <Grid
                        item
                        xs={12}
                        sx={{ display: "flex", justifyContent: "center" }}
                      >
                        <TextField
                          id="new-password"
                          name="password"
                          value={password}
                          label="New Password"
                          type={showPassword ? 'text' : 'password'}
                          variant="outlined"
                          onChange={onChange}
                          style={{
                            marginTop: "30px",
                          }}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                  edge="end"
                                >
                                  {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                          // {...register(
                          //   "newpassword",
                          //   registerOptions.newpassword
                          // )}
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sx={{ display: "flex", justifyContent: "center" }}
                      >
                        <TextField
                          id="confirm-password"
                          name="password2"
                          value={password2}
                          label="Confirm Password"
                          variant="outlined"
                          type={showPassword ? 'text' : 'password'}
                          onChange={onChange}
                          style={{
                            marginTop: "30px",
                          }}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                  edge="end"
                                >
                                  {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                          // {...register(
                          //   "confirmpassword",
                          //   registerOptions.confirmpassword
                          // )}
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          marginBottom: "20px",
                        }}
                      >
                        {/* <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          style={{
                            marginTop: "30px",
                          }}
                          sx={{ width: "30%" }}
                        >
                          RESET
                        </Button> */}
                      </Grid>
                    </Paper>
                  </Box>
                </Grid>
              </Grid>
              <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{ width: "30%", alignSelf:"center", mb:2}}
                      >
                        UPDATE
                      </Button>
            </Grid>
          </Paper>
        </Box>
        <ToastContainer />
      </form>
    </>
  );
}
