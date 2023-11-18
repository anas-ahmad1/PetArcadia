import { Link, Typography, useTheme } from "@mui/material";
import CustomLogo from "../assets/CustomLogo";
import LoginPetSvg from "../assets/LoginPetSvg"
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import * as React from 'react';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
  const primaryColor = theme.palette.primary.main;
  const secondaryColor = theme.palette.secondary.main;
  const paperColor = theme.palette.background.paper;
  const defColor = theme.palette.background.default;
  const [gender, setGender] = React.useState('');

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const handleRegistration = (formData) => {
    console.log("form submitted");
  };

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
  }

  const handleError = (errors) => {};

  const registerOptions = {
    email: { required: "Email can not be left blank" },
    password: {
      required: "Password is required",
      minLength: {
        value: 10,
        message: "Password can not be less than 10 characters",
      },
    },
  };

  document.body.style = `background: ${defColor};`;

  return (
    <form onSubmit={handleSubmit(handleRegistration, handleError)}>
    <Grid container spacing={2}>
    <Grid container item xs={6} 
      style={{backgroundColor: theme.palette.primary.light, minHeight: '100vh',paddingLeft:0}}>

      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", marginTop:"40px" }}>
        <Typography variant="h1" fontFamily={"Quicksand"} fontSize={"2.5rem"} color={"#01564D"}>Welcome Back!</Typography>
      </Grid>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center"}}>
        <Typography align="center" marginLeft={"200px"} marginRight={"200px"} variant="h5" fontFamily={"Quicksand"} fontWeight={"300"} fontSize={"1rem"} color={"#01564D"}>We Provide an all in one Pet Care Solution. Our aim is to provide ease to pet owners</Typography>
      </Grid>


      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", marginTop:"-50px" }}>
        <LoginPetSvg />
        </Grid>

        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h1" color={"#01564D"}>Login as Vet</Typography>
          </Grid>

      </Grid>
      <Grid container item xs={6} alignContent="baseline">
        
        <Grid container item xs={12}>

          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", marginTop: "60px",marginBottom: "30px" }}>
            <CustomLogo color={primaryColor} />
          </Grid>
          
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", marginBottom: "30px" }}>
            <Typography variant="h1">LOGIN</Typography>
          </Grid> 

          {errors?.email && notify(errors.email.message)}
          {/* {errors?.password && notify(errors.password.message)} */}


            
          <Grid item xs={12} md={12} zeroMinWidth sx={{ display: "flex", justifyContent: "center" }}>
            <TextField
              id="email"
              label="Email address"
              variant="outlined"
              style={{ 
                marginBottom:"30px",
              }}
              {...register("email", registerOptions.email)}
            />
          </Grid>


          <Grid item xs={12} md={12} sx={{ display: "flex", justifyContent: "center" }}>
            <TextField
              id="password"
              label="Password"
              type="password"
              variant="outlined"
              style={{
                marginBottom:"10px",
              }}
              {...register("password", registerOptions.password)}
            />
          </Grid>

          <Grid item xs={12} sx={{ display: "flex", justifyContent: "end", marginBottom:"40px", marginRight: "160px" }}>
          <Link fontFamily={"Quicksand"} fontWeight={"500"} fontSize={"0.8rem"}>Forgot Password?</Link>
          </Grid>


          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
          <Button type="submit" variant="contained" color="primary">
            LOGIN
          </Button>
          </Grid>

          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", marginBottom:"60px" }}>
          <Typography variant="h5">Don't have an Account? </Typography>
          <Link fontFamily={"Quicksand"} marginTop="-1.5px" marginLeft="3px" fontSize={"0.8rem"}>Register</Link>
          </Grid>
          </Grid>
      </Grid>

    </Grid>
    <ToastContainer/>
    </form>    
  );
}
