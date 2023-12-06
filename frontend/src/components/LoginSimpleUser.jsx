import { Link, Typography, useTheme } from "@mui/material";
import CustomLogo from "../assets/CustomLogo";
import LoginPetSvg from "../assets/LoginPetSvg";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import * as React from "react";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMediaQuery } from "@mui/material";
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {useEffect, useState} from 'react'
import {login, reset} from '../redux/authSlice'
import Spinner from './Spinner'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
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

export default function LoginSimpleUser() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md2"));
  const primaryColor = theme.palette.primary.main;
  const secondaryColor = theme.palette.secondary.main;
  const paperColor = theme.palette.background.paper;
  const defColor = theme.palette.background.default;
  const [gender, setGender] = React.useState("");

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // To change color when email text field is clicked
  const [isTextFieldClicked, setIsTextFieldClicked] = useState(false);

  const handleTextFieldClick = () => {
    setIsTextFieldClicked(true);
  };

  const handleTextFieldBlur = () => {
    setIsTextFieldClicked(false);
  };

  const customColor = isTextFieldClicked ? theme.palette.primary.main : "#757575";

  // To change color when password text field is clicked
  const [isPasswordFieldClicked, setIsPasswordFieldClicked] = useState(false);

  const handleTextFieldClick2 = () => {
    setIsPasswordFieldClicked(true);
  };

  const handleTextFieldBlur2 = () => {
    setIsPasswordFieldClicked(false);
  };

  const passwordIconColor = isPasswordFieldClicked ? theme.palette.primary.main : "#757575";



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


  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }


  const onSubmit = (e) => {
    e.preventDefault()

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

    if (!password) {
      notify("Password cannot be empty");
      return; // Do not proceed with the login if email is empty
    }

    // Check for a minimum password length
    if (password.length < 6) {
      notify("Password must be at least 6 characters long");
      return;
    }

    const userData = {
      email,
      password
    }

    dispatch(login(userData))
  }


  if (isLoading) {
    return <Spinner />
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

  

  document.body.style = `background: ${defColor};`;

  return (
    <form onSubmit={onSubmit}>
      <Grid container spacing={2}>
      {isLargeScreen && (
        <Grid
          container
          item
          xs={6}
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
              marginTop: "40px",
            }}
          >
            <Typography
              variant="h1"
              fontFamily={"Quicksand"}
              fontSize={"2.5rem"}
              color={"#01564D"}
            >
              Welcome Back!
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              align="center"
              marginLeft={"200px"}
              marginRight={"200px"}
              variant="h5"
              fontFamily={"Quicksand"}
              fontWeight={"300"}
              fontSize={"1rem"}
              color={"#01564D"}
            >
              We Provide an all in one Pet Care Solution. Our aim is to provide
              ease to pet owners
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "-50px",
            }}
          >
            <LoginPetSvg />
          </Grid>

          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="h1" color={"#01564D"}>
              Login as Vet
            </Typography>
          </Grid>
        </Grid>
      )}
        <Grid container item xs={isLargeScreen ? 6 : 12} alignContent="baseline">
          <Grid container item xs={12}>
            <Grid
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
            </Grid>

            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "30px",
              }}
            >
              <Typography variant="h1">LOGIN</Typography>
            </Grid>

            {/* {errors?.email && notify(errors.email.message)} */}
            {/* {errors?.password && notify(errors.password.message)} */}

            <Grid
              item
              xs={12}
              md={12}
              zeroMinWidth
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <TextField
                id="email"
                label="Email address"
                name="email"
                value={email}
                variant="outlined"
                onClick={handleTextFieldClick}
                onBlur={handleTextFieldBlur}
                onChange={onChange}
                style={{
                  marginBottom: "30px",
                }}
                InputProps={{
                  endAdornment: (
                <AlternateEmailIcon style={{ color: customColor }}></AlternateEmailIcon>
                )}}
                //{...register("email", registerOptions.email)}
              />
            </Grid>

            
            <Grid
              item
              xs={12}
              md={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <TextField
                id="password"
                label="Password"
                name="password"
                value={password}
                onClick={handleTextFieldClick2}
                onBlur={handleTextFieldBlur2}
                type={showPassword ? 'text' : 'password'}
                variant="outlined"
                onChange={onChange}
                style={{
                  marginBottom: "10px",
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
                        {showPassword ? <VisibilityOff style={{ color: passwordIconColor }}/> : <Visibility style={{ color: passwordIconColor }}/>}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                //{...register("password", registerOptions.password)}
              />
            </Grid>

            <Grid container item sx={{display:"flex", justifyContent:"center"}}>
            <Grid container item width={"300px"}>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "end",
                marginBottom: "40px",
                //marginRight: isLargeScreen ? "160px" : 0,
              }}
            >
              <Link
                fontFamily={"Quicksand"}
                fontWeight={"500"}
                fontSize={"0.8rem"}
              >
                Forgot Password?
              </Link>
            </Grid>
            </Grid>
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
                LOGIN
              </Button>
            </Grid>

            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "60px",
              }}
            >
              <Typography variant="h5">Don't have an Account? </Typography>
              <button
                type="button"
                onClick={() => navigate('/signup')}
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
                Register
              </button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <ToastContainer />
    </form>
  );
}
