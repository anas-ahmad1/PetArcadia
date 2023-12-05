//SERVER SIDE CODE:

const express = require('express')
const app = express();

const mongoose = require('mongoose')
const PetModel = require('./models/pet')
const blogModel = require('./models/blogs')

const cors = require('cors')
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/petArcadia');


//Routes here:

app.post('/pets/new', async (req, res) => {
  try
  {
    const {name, species, breed, gender, age, weight, vaccinated, image} = req.body;

    const pet = new PetModel({name, species, breed, gender, age, weight, vaccinated, image});
    const result = await pet.save();

    res.status(201).json(result);
  }
  catch (error)
  {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.delete("/pets/:id/delete", async (req, res) => {
  try
  {
    const { id } = req.params;
    const result = await PetModel.findByIdAndDelete(id);
    res.json(result);
  }
  catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.put('/pets/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age, weight, vaccinated, image } = req.body;
    const result = await PetModel.findByIdAndUpdate(
      id,
      {
        name, age, weight, vaccinated, image
      },
      {
        runValidators: true,
      }
    );
    res.json(result);
  }
  catch (error)
  {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get('/pets', async (req, res) => {
  PetModel.find()
  .then(pets => res.json(pets))
  .catch(err => res.json(err))
});



app.get('/getblogs', async (req, res) => {
  blogModel.find()
      .then(blog => res.json(blog))
      .catch(err => res.json(err))
});

app.post('/addblog', async (req, res) => {
  const title = req.body.title;
  const authorname = req.body.authorname;
  const description = req.body.description;

  blogModel.create({ title, authorname, description })
      .then(blog => res.json(blog))
      .catch(error => res.json(error))
});

app.get('/blogdetails/:id', async (req, res) => {
  const { id } = req.params;
  blogModel.findById(id)
      .then(blog => res.json(blog))
      .catch(err => res.json(err))
});



app.listen(3000, () => {
  console.log("Listening on port 3000");
});
