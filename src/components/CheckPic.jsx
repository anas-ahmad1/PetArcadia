import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import myImg from "../assets/profilepic.jpeg";
import { Image } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Input from "@mui/material/Input";

export default function CheckPic() {
  return (
    <>
      <input
        accept="image/*"
        style={{ display: 'none' }}
        //  className={}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <IconButton component="span">
          <Avatar
            src= {myImg}
            style={{
              margin: "10px",
              width: "60px",
              height: "60px",
            }}
          />
        </IconButton>
      </label>
    </>
  );
}
