import { create } from "zustand";
import { createRecipeSlice, RecipesSliceType } from "./recipeSlice";
import { devtools } from "zustand/middleware";


export const useAppStore = create<RecipesSliceType>()(devtools((...a) => ({
    ...createRecipeSlice(...a)
})))