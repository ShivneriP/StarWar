import { configureStore } from "@reduxjs/toolkit";
import PlanetReducer from "./features/planetSlice";

export default configureStore({
    reducer:{
        app:PlanetReducer
    }
})