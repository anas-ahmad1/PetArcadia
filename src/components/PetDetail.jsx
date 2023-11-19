import React from "react";
import { Typography, useMediaQuery } from "@mui/material";

export default function PetDetail({ petInfo }) {
  const isMobileLarge = useMediaQuery("(max-width: 600px)");
  const isMobileSmall = useMediaQuery("(max-width: 450px)");

  const getStyles = () => {
    if (isMobileSmall) {
      return {
        display: "inline",
        fontSize: 13,
        lineHeight: "1.2",
      };
    } else if (isMobileLarge) {
      return {
        display: "inline",
        fontSize: 17,
        lineHeight: "1.35",
      };
    } else {
      return {
        display: "inline",
        fontSize: 22,
        lineHeight: "1.5",
      };
    }
  };

  return (
    <>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        fontWeight={"600"}
        sx={getStyles()}
      >
        {"Name: "}
      </Typography>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        color="text.secondary"
        sx={getStyles()}
      >
        {petInfo.name}
      </Typography>
      <br />
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        fontWeight={"600"}
        sx={getStyles()}
      >
        {"Location: "}
      </Typography>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        color="text.secondary"
        sx={getStyles()}
      >
        {petInfo.location}
      </Typography>
      <br />
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        fontWeight={"600"}
        sx={getStyles()}
      >
        {"Description: "}
      </Typography>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        color="text.secondary"
        sx={getStyles()}
      >
        {petInfo.description}
      </Typography>
      <br />
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        fontWeight={"600"}
        sx={getStyles()}
      >
        {"Owner Contact: "}
      </Typography>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        color="text.secondary"
        sx={getStyles()}
      >
        {petInfo.contact}
      </Typography>
      <br />
    </>
  );
}
