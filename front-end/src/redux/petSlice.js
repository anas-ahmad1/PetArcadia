import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// create action
export const addPet = createAsyncThunk(
  "addPet",
  async (data, { rejectWithValue }) => {
    try {
      const result = await axios.post("http://localhost:3000/pets/new", data);
      return result.data;
    }
    catch (error) {
      return rejectWithValue(error);
    }
  }
);

// update action
export const updatePet = createAsyncThunk(
  "updatePet ",
  async (data, { rejectWithValue }) => {
    try {
      console.log(data);
      const result = await axios.put(
        `http://localhost:3000/pets/${data.id}`,
        data
      );
      return result.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const petSlice = createSlice({
    name: "pets",
    initialState: {
      pets: [],
      error: null
    },
    reducers: {
      getPetsFromMongoResponse : (state, action) => {
        //populating array of pets with response
        state.pets = action.payload.map(pet => {
          //creating and returning a pet object to push onto redux pets array
          return {id: pet._id, name: pet.name, species: pet.species, breed: pet.breed, gender: pet.gender, age: pet.age, weight: pet.weight, vaccinated: pet.vaccinated, image: pet.image}
        })
      }
    },
    extraReducers: (builder) => {
      builder
        //Add Pet reducers
        .addCase(addPet.fulfilled, (state, action) => {
          state.pets.push(action.payload);
        })
        .addCase(addPet.rejected, (state, action) => {
          state.error = action.payload.message;
        })
        //Update Pet reducers
        .addCase(updatePet.fulfilled, (state, action) => {
          state.pets = state.pets.map((pet) => {
            if (pet._id === action.payload._id) {
              return action.payload;
            }
            return pet;
          });
        })
        .addCase(updatePet.rejected, (state, action) => {
          state.error = action.payload.message;
        });
    }
});

export const {getPetsFromMongoResponse} = petSlice.actions;
export default petSlice.reducer;
