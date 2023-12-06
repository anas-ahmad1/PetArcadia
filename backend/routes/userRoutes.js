const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const { protect } = require("../middleware/authMiddleware");

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { name, email, contact, gender, password, image } = req.body;
    // console.log(req.body)
    // console.log("HERE")

    if (!name || !email || !contact || !gender || !password) {
      res.status(400);
      throw new Error("Please add all fields");
    }

    // Check if user exists
    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400).json({message: "User already exists"});
      throw new Error("User already exists");
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = await User.create({
      name,
      email,
      contact,
      gender,
      password: hashedPassword,
      image,
    });

    if (user) {
      res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        contact: user.contact,
        gender: user.gender,
        image: user.image,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }
  })
);

router.post(
  "/login",
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    // Check for user email
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        _id: user.id,
        name: user.name,
        email: user.email,
        contact: user.contact,
        gender: user.gender,
        image: user.image,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).json({ message: "Invalid credentials" });
      throw new Error("Invalid credentials");
    }
  })
);

router.get(
  "/me",
  protect,
  asyncHandler(async (req, res) => {
    res.status(200).json(req.user);
  })
);


router.patch(
    "/update/:id",
    asyncHandler(async (req, res) => {
      try {
        //console.log("Entered function")
        const { id } = req.params;
        const { name, email, contact, image, oldPassword, password } = req.body;
        //console.log("Bodyyy:", req.body)
        const user = await User.findById(id);
  
        // if (!user) {
        //   res.status(404).json({ message: "User not found" });
        //   throw new Error("User not found");
        // }
  
        // Check if old password is provided and matches the stored password
        if (oldPassword) {
            //console.log("Entered oldPassword")
          const isPasswordMatch = await bcrypt.compare(oldPassword, user.password);
          //console.log("Password match or not:", isPasswordMatch)
  
          if (!isPasswordMatch) {
            res.status(400).json({ message: "Wrong Old Password" });
            throw new Error("Wrong Old Password");
          }
  
          // Hash the new password
          console.log("About to hash")
          const salt = await bcrypt.genSalt(10);
          const hashedPassword = await bcrypt.hash(password, salt);
          console.log("Done hashing")
  
          
          const updatedUser = await User.findByIdAndUpdate(
            id,
            {
              name,
              email,
              contact,
              image,
              password: hashedPassword,
            },
            { runValidators: true, new: true }
          ).select("-password");
  
          res.json(updatedUser);
        } else {
          // If password changing too
          const updatedUser = await User.findByIdAndUpdate(
            id,
            {
              name,
              email,
              contact,
              image,
            },
            { runValidators: true, new: true }
          ).select("-password");
  
          res.json(updatedUser);
        }
      } catch (error) {
        console.error(error);
        //res.status(500).json({ error: "Internal server error" });
      }
    })
  );
  

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, "abc123", {
    expiresIn: "30d",
  });
};

module.exports = router;
