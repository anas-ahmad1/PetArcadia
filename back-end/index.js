//SERVER SIDE CODE:

const express = require('express')
const app = express();

const mongoose = require('mongoose')
const PetModel = require('./models/pet')

const cors = require('cors')
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/petArcadia');


//Routes here:

app.post('/addpet', async (req, res) => {
  const name = req.body.name;
  const species = req.body.species;
  const breed = req.body.breed;
  const gender = req.body.gender;
  const age = req.body.age;
  const weight = req.body.weight;
  const vaccinated = req.body.vaccinated;

  PetModel.create({name, species, breed, gender, age, weight, vaccinated})
  .then(pet => res.json(pet))
  .catch(error => res.json(error))
});

app.listen(3001, () => {
  console.log("Listening on port 3000");
})
