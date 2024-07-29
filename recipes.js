import fs from "node:fs/promises";
import { v4 as uuidv4 } from "uuid";

const fileName = "recipes.json";

console.log(fileName)

// GET ALL RECIPES
export async function getRecipes() {
try {
    const data = await fs.readfile(fileName, 'utf8')
    const converted = JSON.parse(data)
    console.log(converted)
    return converted
    }
    catch (error){
        console.error('Unable to retrieve recipes');
    }
}

// GET A RECIPE BY ID
export async function getRecipeByID(id) {
    try {
       const recipes = await getRecipes();
       if (!Array.isArray(recipes)) throw new Error('Unexpected data format');
       const recipe = recipes.find(r => r.id === id);
       if (!recipe) throw new Error('Recipe not found');
       console.log(recipe);
       return recipe;
    } catch (error) {
       console.error('Unable to retrieve');
       return null;
    }
}

getRecipeByID("4c848d48-b81e-4d6f-b45d-7b3090f4f8ef").then(recipe => {
    console.log(recipe);
}).catch(error => {
    console.error(error);
});

// CREATE A RECIPE
export async function createRecipe(newRecipe) {}

// UPDATE A RECIPE BY ID
export async function updateRecipeByID(id, updatedRecipe) {}

// DELETE A RECIPE BY ID
export async function deleteRecipeByID(id) {}
