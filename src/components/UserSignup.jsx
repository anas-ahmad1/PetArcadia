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

export default function UserSignup() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md2"));
  const primaryColor = theme.palette.primary.main;
  const secondaryColor = theme.palette.secondary.main;
  const paperColor = theme.palette.background.paper;
  const defColor = theme.palette.background.default;
  const [gender, setGender] = React.useState("");

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
  };

  const handleError = (errors) => {};

  const registerOptions = {
    name: { required: "Name can not be left blank" },
    email: { required: "Email can not be left blank" },
    gender: { required: "Gender can not be left blank" },
    contact: {
      required: "Contact can not be left blank",
      maxlength: {
        value: 11,
        message: "Contact can not be more than 11 characters",
      },
    },
    password: {
      required: "Password is required",
      minLength: {
        value: 10,
        message: "Password can not be less than 10 characters",
      },
    },
    confirmpassword: {
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
              <Typography variant="h1">SIGNUP</Typography>
            </Grid>

            {errors?.name && notify(errors.name.message)}
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
                variant="outlined"
                style={{
                  marginBottom: "30px",
                  marginLeft: isLargeScreen ? "100px" : 0,
                }}
                {...register("name", registerOptions.name)}
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
                variant="outlined"
                style={{
                  marginBottom: "30px",
                  marginRight: isLargeScreen ? "100px" : 0,
                }}
                {...register("email", registerOptions.email)}
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
                variant="outlined"
                style={{
                  marginBottom: "30px",
                  marginLeft: isLargeScreen ? "100px" : 0,
                }}
                {...register("contact", registerOptions.contact)}
              />
            </Grid>

            <Grid
              item
              xs={12}
              md2={6}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <FormControl
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
              </FormControl>
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
                type="password"
                variant="outlined"
                style={{
                  marginBottom: "30px",
                  marginLeft: isLargeScreen ? "100px" : 0,
                }}
                {...register("password", registerOptions.password)}
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
                variant="outlined"
                type="password"
                style={{
                  marginBottom: "30px",
                  marginRight: isLargeScreen ? "100px" : 0,
                }}
                {...register(
                  "confirm-password",
                  registerOptions.confirmpassword
                )}
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
              <Link
                fontFamily={"Quicksand"}
                marginTop="-1.5px"
                marginLeft="3px"
                fontSize={"0.8rem"}
              >
                Login
              </Link>
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
