import { configureStore } from "@reduxjs/toolkit";
import recipeSlice from './slices/recipesSlice'

const foodStore = configureStore({
    reducer:{
        recipeReducer:recipeSlice
    }
})
export default foodStore