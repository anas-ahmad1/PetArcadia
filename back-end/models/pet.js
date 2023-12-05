const mongoose = require('mongoose')

const petSchema = new mongoose.Schema({
  name:{
    type: String,
    required: [true, "Name is must"]
  },
  species:{
    type: String,
    required: [true, "Species is must"]
  },
  breed:{
    type: String
  },
  gender:{
    type: String,
    required: [true, "Gender is must"],
    enum: ['Male', 'Female']
  },
  age:{
    type: Number,
    required: [true, "Weight is must"],
    min: 0,
    max: 100
  },
  weight:{
    type: Number,
    required: [true, "Weight is must"],
    min: 0,
    max: 300
  },
  vaccinated:{
    type: String,
    required: [true, "Vaccination Status is must"],
    enum: ['Complete', 'Partial', 'Unvaccinated']
  },
  image: {
    type: String
  }
});

const PetModel = mongoose.model("Pet", petSchema)

module.exports = PetModel;
