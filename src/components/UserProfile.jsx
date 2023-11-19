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

export default function UserProfile() {
  const theme = useTheme();

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
      <CustomLogo color={theme.palette.primary.main} />
      <form onSubmit={handleSubmit(handleRegistration, handleError)}>
      {errors?.oldpassword && notify(errors.oldpassword.message)}
      {errors?.newpassword && notify(errors.newpassword.message)}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            height: "100%",
            "& > :not(style)": {
              ml: 15,
              mr: 15,
              mt: 8,
              width: "80vw",
              height: "70vh",
              backgroundColor: theme.palette.primary.light,
            },
          }}
        >
          <Paper>
            <Grid container spacing={2}>
              <Grid container item xs={6}>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    "& > :not(style)": {
                      ml: 5,
                      mr: 5,
                      mt: 4,
                      width: "30vw",
                      height: "60vh",
                    },
                  }}
                >
                  <Paper>
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
                        <IconButton component="span">
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
                      <Typography variant="h1" fontSize={"1rem"}>
                        My Profile
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      <TextField
                        id="name"
                        value="Anas Ahmad"
                        variant="outlined"
                        style={{
                          marginTop: "20px",
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
                          marginTop: "20px",
                        }}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "20px",
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

              <Grid container item xs={6} alignContent="baseline">
                <Grid container item xs={12} alignContent="baseline">
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        "& > :not(style)": {
                          ml: 5,
                          mr: 5,
                          mt: 4,
                          width: "30vw",
                          height: "60vh",
                        },
                      }}
                    >
                      <Paper>
                      <Grid container item xs={12} alignContent="baseline">
                        <Grid
                          item
                          xs={2}
                          sx={{ display: "flex", justifyContent: "center", mt: 2 }}
                        >
                          <EmailTwoToneIcon color="primary"></EmailTwoToneIcon>
                        </Grid>
                        <Grid
                          item
                          xs={10}
                          sx={{
                            display: "flex",
                            justifyContent: "start",
                            mt: 2,
                          }}
                        >
                          <Typography variant="h5" fontSize={"1rem"}>
                            anasahmadleo@gmail.com
                          </Typography>
                        </Grid>
                      </Grid>
                      <hr style={{height:"3px",border:"none", backgroundColor:theme.palette.primary.light}}/>
                        <Grid
                          item
                          xs={12}
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            mt: "20px",
                          }}
                        >
                          <Typography variant="h1" fontSize={"1rem"}>
                            Reset Password
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          sx={{ display: "flex", justifyContent: "center" }}
                        >
                          <TextField
                            id="oldpassword"
                            label="Old Password"
                            variant="outlined"
                            style={{
                              marginTop: "20px",
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
                              marginTop: "20px",
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
                              marginTop: "20px",
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
                                marginTop: "20px",
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
