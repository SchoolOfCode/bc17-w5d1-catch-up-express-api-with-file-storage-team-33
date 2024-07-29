import express from "express";

import {
  getRecipes,
  getRecipeByID,
  createRecipe,
  updateRecipeByID,
  deleteRecipeByID,
} from "./recipes.js";

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());

app.get('/recipes', (req, res) => {
try {

}catch{
  
}
}

) 

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
