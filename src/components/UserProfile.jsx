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

export default function UserProfile() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md2"));

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
    // name: { required: "Name can not be left blank" },
    // contact: {
    //   required: "Contact can not be left blank",
    //   maxlength: {
    //     value: 11,
    //     message: "Contact can not be more than 11 characters",
    //   },
    // },
    oldpassword: {
      required: "Old Password is required",
      //   minLength: {
      //     value: 10,
      //     message: "Old Password can not be less than 10 characters",
      //   },
    },
    // newpassword: {
    //   required: "Password is required",
    //   minLength: {
    //     value: 10,
    //     message: "Password can not be less than 10 characters",
    //   },
    // },
    // confirmpassword: {
    //   required: "Password is required",
    //   minLength: {
    //     value: 10,
    //     message: "Password can not be less than 10 characters",
    //   },
    // },
  };

  return (
    <>
      {/* <CustomLogo color={theme.palette.primary.main} /> */}
      <form onSubmit={handleSubmit(handleRegistration, handleError)}>
        {errors?.oldpassword && notify(errors.oldpassword.message)}
        {errors?.newpassword && notify(errors.newpassword.message)}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            "& > :not(style)": {
              //mx:isLargeScreen ? 20 : 5,
              mt: 6,
              width: "auto",
              height: "auto",
              backgroundColor: theme.palette.primary.light,
            },
          }}
        >
          <Paper sx={{borderRadius:"20px"}}>
            <Grid container spacing={2}>
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
                        multiple
                        type="file"
                      />
                      <label htmlFor="contained-button-file">
                        <IconButton component="span" sx={{mt:3}}>
                          <Avatar
                            src={myImg}
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
                        value="Anas Ahmad"
                        variant="outlined"
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
                        value="0308-4424192"
                        variant="outlined"
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
                      <Button
                        type="button"
                        variant="contained"
                        color="primary"
                        sx={{ width: "30%" }}
                      >
                        Save
                      </Button>
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
                            anasahmadleo@gmail.com
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
                          label="Old Password"
                          variant="outlined"
                          style={{
                            marginTop: "30px",
                          }}
                          {...register(
                            "oldpassword",
                            registerOptions.oldpassword
                          )}
                        />
                      </Grid>

                      <Grid
                        item
                        xs={12}
                        sx={{ display: "flex", justifyContent: "center" }}
                      >
                        <TextField
                          id="new-password"
                          label="New Password"
                          variant="outlined"
                          style={{
                            marginTop: "30px",
                          }}
                          {...register(
                            "newpassword",
                            registerOptions.newpassword
                          )}
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sx={{ display: "flex", justifyContent: "center" }}
                      >
                        <TextField
                          id="confirm-password"
                          label="Confirm Password"
                          variant="outlined"
                          style={{
                            marginTop: "30px",
                          }}
                          {...register(
                            "confirmpassword",
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
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          style={{
                            marginTop: "30px",
                          }}
                          sx={{ width: "30%" }}
                        >
                          RESET
                        </Button>
                      </Grid>
                    </Paper>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Box>
        <ToastContainer />
      </form>
    </>
  );
}
