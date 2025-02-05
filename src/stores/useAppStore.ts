import { create } from "zustand";
import { createRecipeSlice, RecipesSliceType } from "./recipeSlice";


export const useAppStore = create<RecipesSliceType>((...a) => ({
    ...createRecipeSlice(...a)
}))