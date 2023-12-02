import { createSlice } from "@reduxjs/toolkit";

const petSlice = createSlice({
    name: "pets",
    initialState: {
      pets: []
    },
    reducers: {
      addPet : (state, action) => {
        state.pets.push(action.payload)
      },
    }
});

export const {addPet} = petSlice.actions;
export default petSlice.reducer;
