import { Link, Typography, useTheme } from "@mui/material";
import CustomLogo from "../assets/CustomLogo";
import SignupUser from "../assets/SignupUser";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMediaQuery } from "@mui/material";
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {register, reset} from '../redux/authSlice'
import {useEffect, useState} from 'react'
import Spinner from './Spinner'
import Man from '../assets/man.png'
import Woman from '../assets/woman.png'
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { IconButton } from "@mui/material";


// const customTheme = createTheme({
//   components: {
//     MuiOutlinedInput: {
//       styleOverrides: {
//         root: {
//           backgroundColor: '#fff',
//           borderRadius: '10px',
//           boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
//         },
//       },
//     },
//   },
// });

var putImage = ''

function loadXHR(url) {

  return new Promise(function(resolve, reject) {
      try {
          var xhr = new XMLHttpRequest();
          xhr.open("GET", url);
          xhr.responseType = "blob";
          xhr.onerror = function() {reject("Network error.")};
          xhr.onload = function() {
              if (xhr.status === 200) {resolve(xhr.response)}
              else {reject("Loading error:" + xhr.statusText)}
          };
          xhr.send();
      }
      catch(err) {reject(err.message)}
  });
}


const handleImageChange = (person) => {
  return new Promise((resolve, reject) => {
    loadXHR(person)
      .then((blob) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onload = () => {
          putImage = reader.result;
          console.log(putImage); // Optional: Log the image URL for debugging
          resolve(putImage);
        };
        reader.onerror = (error) => {
          console.log("Error: ", error);
          reject("Error reading image.");
        };
      })
      .catch((error) => {
        console.log("Error loading image: ", error);
        reject("Error loading image.");
      });
  });
};


export default function UserSignup() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md2"));
  const primaryColor = theme.palette.primary.main;
  const secondaryColor = theme.palette.secondary.main;
  const paperColor = theme.palette.background.paper;
  const defColor = theme.palette.background.default;

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [showPassword2, setShowPassword2] = React.useState(false);
  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);
  const handleMouseDownPassword2 = (event) => {
    event.preventDefault();
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact:'',
    gender: '',
    password: '',
    password2: '',
  })

  const { name, email, contact, gender, password, password2 } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    
    if(gender==="Male"){
      console.log(gender)
      await handleImageChange(Man)
    }
    else{
      console.log(gender)
      await handleImageChange(Woman)
    }

    if (!name) {
      notify("Name cannot be empty");
      return; // Do not proceed with the login if name is empty
    }

    if (!email) {
      notify("Email cannot be empty");
      return; // Do not proceed with the login if email is empty
    }

    // Check for proper email structure
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      notify("Invalid email format");
      return;
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

    if (!gender) {
      notify("Gender cannot be empty");
      return; // Do not proceed with the login if gender is empty
    }

    if (!password) {
      notify("Password cannot be empty");
      return; // Do not proceed with the login if password is empty
    }

    // Check for a minimum password length
    if (password.length < 6) {
      notify("Password must be at least 6 characters long");
      return;
    }

    if(password!== password2){
      toast.error('Passwords do not match')
    } else {
      const userData = {
        name,
        email,
        gender,
        contact,
        password,
        image: putImage
      }

      await dispatch(register(userData))
    }
  }

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)

  useEffect(() => {
    if(isError){
      toast.error(message)
    }

    if(isSuccess || user){
      console.log("Success")
      navigate('/')
    }

    dispatch(reset())

  }, [user, isError, isSuccess, message, navigate, dispatch])


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

  if (isLoading) {
    return <Spinner />
  }

  document.body.style = `background: ${defColor};`;

  return (
    <form onSubmit={onSubmit}>
      <Grid container spacing={2}>
        <Grid
          container
          item
          xs={isLargeScreen ? 9 : 12}
          alignContent="baseline"
        >
          <Grid
            container
            item
            xs={12}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            {/* <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "60px",
                marginBottom: "30px",
              }}
            >
              <CustomLogo color={primaryColor} />
            </Grid> */}

            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "30px",
                marginTop:"50px"
              }}
            >
              <Typography variant="h1">SIGNUP</Typography>
            </Grid>

            {/* {errors?.name && notify(errors.name.message)} */}
            {/* {errors?.email && notify(errors.email.message)}
          {errors?.contact && notify(errors.contact.message)}
          {errors?.gender && notify(errors.gender.message)}
          {errors?.password && notify(errors.password.message)}
          {errors?.confirmpassword && notify(errors.confirmpassword.message)} */}

            <Grid
              item
              xs={12}
              md2={6}
              zeroMinWidth
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <TextField
                id="name"
                label="Name"
                name="name"
                variant="outlined"
                value={name}
                style={{
                  marginBottom: "30px",
                  marginLeft: isLargeScreen ? "100px" : 0,
                }}
                onChange={onChange}
                // {...register("name", registerOptions.name)}
              />
            </Grid>

            <Grid
              item
              xs={12}
              md2={6}
              zeroMinWidth
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <TextField
                id="email"
                label="Email address"
                name="email"
                value={email}
                variant="outlined"
                style={{
                  marginBottom: "30px",
                  marginRight: isLargeScreen ? "100px" : 0,
                }}
                onChange={onChange}
                // {...register("email", registerOptions.email)}
              />
            </Grid>

            <Grid
              item
              xs={12}
              md2={6}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <TextField
                id="contact"
                label="Contact"
                name="contact"
                value={contact}
                variant="outlined"
                style={{
                  marginBottom: "30px",
                  marginLeft: isLargeScreen ? "100px" : 0,
                }}
                onChange={onChange}
                // {...register("contact", registerOptions.contact)}
              />
            </Grid>

            <Grid
              item
              xs={12}
              md2={6}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <FormControl
                variant="outlined"
                style={{
                  marginBottom: "30px",
                  marginRight: isLargeScreen ? "100px" : 0,
                }}
              >
                <InputLabel id="gender-label">Gender</InputLabel>
                <Select
                  labelId="gender-label"
                  id="gender"
                  name="gender"
                  value={gender}
                  label="Gender"
                  onChange={onChange}
                  MenuProps={{
                    style: {
                      borderRadius: "50px", // Adjust the value based on your preference
                    },
                  }}
                >
                  <MenuItem value={"Male"} style={{fontFamily: "Quicksand" }}>Male</MenuItem>
                  <MenuItem value={"Female"} style={{fontFamily: "Quicksand" }}>Female</MenuItem>
                  <MenuItem value={"Others"} style={{fontFamily: "Quicksand" }}>Others</MenuItem>
                </Select>
              </FormControl>
              {/* <TextField
                id="gender"
                label="Gender"
                name="gender"
                value={gender}
                variant="outlined"
                style={{
                  marginBottom: "30px",
                  marginRight: isLargeScreen ? "100px" : 0,
                }}
                onChange={onChange}
                // {...register("gender", registerOptions.gender)}
              /> */}

              {/* <FormControl
                style={{
                  marginBottom: "30px",
                  marginRight: isLargeScreen ? "100px" : 0,
                }}
              >
                <InputLabel id="gender">Gender</InputLabel>
                <Select
                  labelId="gender"
                  id="gender"
                  value={gender}
                  label="Gender"
                  onChange={handleChange}
                  {...register("gender", registerOptions.gender)}
                >
                  <MenuItem value={"Male"}>Male</MenuItem>
                  <MenuItem value={"Female"}>Female</MenuItem>
                  <MenuItem value={"Others"}>Others</MenuItem>
                </Select>
              </FormControl> */}
            </Grid>

            <Grid
              item
              xs={12}
              md2={6}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <TextField
                id="password"
                label="Password"
                name="password"
                value={password}
                type={showPassword ? 'text' : 'password'}
                variant="outlined"
                style={{
                  marginBottom: "30px",
                  marginLeft: isLargeScreen ? "100px" : 0,
                }}
                onChange={onChange}
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
                // {...register("password", registerOptions.password)}
              />
            </Grid>

            <Grid
              item
              xs={12}
              md2={6}
              zeroMinWidth
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <TextField
                id="confirm-password"
                label="Confirm Password"
                name="password2"
                value={password2}
                variant="outlined"
                type={showPassword2 ? 'text' : 'password'}
                style={{
                  marginBottom: "30px",
                  marginRight: isLargeScreen ? "100px" : 0,
                }}
                onChange={onChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword2}
                        onMouseDown={handleMouseDownPassword2}
                        edge="end"
                      >
                        {showPassword2 ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                // {...register(
                //   "confirm-password",
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
              <Button type="submit" variant="contained" color="primary">
                SIGNUP
              </Button>
            </Grid>

            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "40px",
              }}
            >
              <Typography variant="h5">Already have an Account? </Typography>
              <button
                type="button"
                onClick={() => navigate('/login')}
                style={{
                  border: 'none',
                  background: 'none',
                  padding: '0',
                  font: 'inherit',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  color: theme.palette.primary.main,
                  fontSize: '0.8rem',
                  fontFamily: 'Quicksand',
                  marginTop: '-1.5px',
                  marginLeft: '3px',
                  
                }}
              >
                Login
              </button>
            </Grid>

            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Typography variant="h1" color={"#01564D"}>
                Login as Vet
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {isLargeScreen && (
          <Grid
            container
            item
            xs={3}
            style={{
              backgroundColor: theme.palette.primary.light,
              minHeight: "100vh",
              paddingLeft: 0,
            }}
          >
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <Typography
                variant="h1"
                fontFamily={"Quicksand"}
                fontSize={"2.5rem"}
                color={"#01564D"}
              >
                Welcome to PetArcadia
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <SignupUser />
            </Grid>
          </Grid>
        )}
        ;
      </Grid>
      <ToastContainer />
    </form>
  );
}
