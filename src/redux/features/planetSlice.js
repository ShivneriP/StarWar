import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchplanets= createAsyncThunk(
    "planet/fetchplanets",async()=>{
        return fetch("https://swapi.dev/api/planets/")
        .then((res)=>res.json())
          
    }
)

const planetSlice=createSlice({
    name:'planets',
    initialState:{
        people:[],
        error:null,
        loading:false,
    },
    extraReducers: {
        [fetchplanets.pending]:(state,action)=>
                    { 
                     state.loading=true;
                    },
         [fetchplanets.fulfilled]:(state,action)=>{
              state.people=action.payload.results;
         },
         [fetchplanets.rejected]:(state,action)=>{
            state.error=true;
         }           

    }

})
 export default planetSlice.reducer;
 