import { createSlice } from "@reduxjs/toolkit";

const petSlice = createSlice({
    name: "pets",
    initialState: {
      pets: []
    },
    reducers: {
      getPetsFromMongoResponse : (state, action) => {
        //populating array of pets with response
        state.pets = action.payload.map(pet => {
          //creating and returning a pet object to push onto redux pets array
          return {id: pet._id, name: pet.name, species: pet.species, breed: pet.breed, gender: pet.gender, age: pet.age, weight: pet.weight, vaccinated: pet.vaccinated}
        })
      },
      addPet : (state, action) => {
        state.pets.push(action.payload)
      },
      updatePet: (state, action) => {
        const index = state.pets.findIndex(pet => pet.id === action.payload.id)
        state.pets[index] = {
          id: action.payload.id,
          name: action.payload.name,
          age: action.payload.age,
          weight: action.payload.weight,
          vaccinated: action.payload.vaccinated
        }
    },
    }
});

export const {getPetsFromMongoResponse, addPet, updatePet} = petSlice.actions;
export default petSlice.reducer;
