import fs from "node:fs/promises";
import { v4 as uuidv4 } from "uuid";

const fileName = "recipes.json";

console.log(fileName)
// GET ALL RECIPES
export async function getRecipes() {
try {
    const data = await fs.readfile(fileName, 'utf8')
    const converted = json.parse(data)
    console.log(converted)
    return converted
    }
    catch (error){
        console.error('Unable to retrieve recipes')
    }
}

// GET A RECIPE BY ID
export async function getRecipeByID(id) {}

// CREATE A RECIPE
export async function createRecipe(newRecipe) {}

// UPDATE A RECIPE BY ID
export async function updateRecipeByID(id, updatedRecipe) {}

// DELETE A RECIPE BY ID
export async function deleteRecipeByID(id) {}
