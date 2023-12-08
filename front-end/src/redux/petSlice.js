import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPets = createAsyncThunk(
  "getPets",
  async (args, { rejectWithValue }) => {
    try
    {
      const result = await axios.get("http://localhost:3000/pets");
      return result.data;
    }
      catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getPet = createAsyncThunk(
  "getPet",
  async (id, { rejectWithValue }) => {
    try
    {
      console.log("Here");
      const result = await axios.get(`http://localhost:3000/pets/${id}`);
      return result.data;
    }
      catch (error) {
      return rejectWithValue(error);
    }
  }
);


// create action
export const addPet = createAsyncThunk(
  "addPet",
  async (data, { rejectWithValue }) => {
    try {
      const result = await axios.post("http://localhost:3000/pets/new", data);
      console.log("result", result)
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

// delete action
export const deletePet = createAsyncThunk(
  "deletePet",
  async (id, { rejectWithValue }) => {
    try
    {
      const result = await axios.delete(`http://localhost:3000/pets/${id}/delete`);
      return result.data;
    }
    catch (error)
    {
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
    },
    extraReducers: (builder) => {
      builder
        //getPets reducers
        .addCase(getPets.fulfilled, (state, action) => {
          state.pets = action.payload;
        })
        .addCase(getPets.rejected, (state, action) => {
          state.error = action.payload;
        })
        //getPet reducers
        .addCase(getPet.fulfilled, (state, action) => {
          state.pets.push(action.payload);
        })
        .addCase(getPet.rejected, (state, action) => {
          state.error = action.payload;
        })
        //addPet reducers
        .addCase(addPet.fulfilled, (state, action) => {
          state.pets.push(action.payload);
        })
        .addCase(addPet.rejected, (state, action) => {
          state.error = action.payload.message;
        })
        //updatePet reducers
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
        })
        //deletePet reducers:
        .addCase(deletePet.fulfilled, (state, action) => {
          const { _id } = action.payload;
          if (_id) {
            state.pets = state.pets.filter((pet) => pet._id !== _id);
          }
        })
        .addCase(deletePet.rejected, (state, action) => {
          state.error = action.payload;
        });
    }
});

export const {getPetsFromMongoResponse} = petSlice.actions;
export default petSlice.reducer;
