// Form variables
let recipeForm = document.getElementById("recipe_form");
let recipeName = document.getElementById("recipe_Name");
let ingredients = document.getElementById("ingredients");
let steps = document.getElementById("steps");

// Display area
let displayArea = document.getElementById('recipe_Area')

// Recipe list
let recipes = [];

// Changes background color on hover
function changeBackgroundColor(element) {
    var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    element.style.backgroundColor = randomColor;
}

// Deletes recipe
function deleteRecipe(index) {
    for (let i = 0; i < recipes.length; i++) {
        console.log(recipes[i].id);
        console.log(index);
        console.log(recipes)
        if (recipes[i].id == index) {
            recipes.splice(i, 1);
            console.log("delete_works");
            console.log(recipes)
        }
    };
}



function displayRecipe(recipe) {
  let recipeDiv = document.createElement("div");
  recipeDiv.classList.add("recipe-item");
  recipeDiv.id = recipe.id;

  // Create elements for displaying recipe details
  let recipeNameElement = document.createElement("h2");
  recipeNameElement.textContent = recipe.name;

  let ingredientsElement = document.createElement("p");
  ingredientsElement.textContent = "Ingredients: " + recipe.ingredients;

  let stepsElement = document.createElement("p");
  stepsElement.textContent = "Steps: " + recipe.steps;

  let deleteButton = document.createElement("button");
  deleteButton.classList.add("change_button")
  deleteButton.textContent = "Delete Recipe";

  // Append the elements to the recipeDiv
  recipeDiv.appendChild(recipeNameElement);
  recipeDiv.appendChild(ingredientsElement);
  recipeDiv.appendChild(stepsElement);
  recipeDiv.appendChild(deleteButton)


    recipeDiv.addEventListener("mouseover", function(event) {
    changeBackgroundColor(this);
  });

  recipeDiv.addEventListener("mouseout", function(event) {
    this.style.backgroundColor = "";
  });

  deleteButton.addEventListener("click", function(event) {
    let index_id = this.parentElement.id;
    this.parentElement.remove();
    deleteRecipe(index_id);
  });

  displayArea.appendChild(recipeDiv);

}


recipeForm.addEventListener("submit", function(event) {
  event.preventDefault();

  let enteredRecipeName = recipeName.value;
  let enteredIngredients = ingredients.value;
  let enteredSteps = steps.value;

  let newRecipe = {
    id : addIndex(),
    name: enteredRecipeName,
    ingredients: enteredIngredients,
    steps: enteredSteps
  };

  recipes.push(newRecipe);

  // Clear the form fields
  recipeName.value = "";
  ingredients.value = "";
  steps.value = "";

  // Call the displayRecipes function to display all recipes
  resetIndex();

  console.log("add_works");
});

function displayRecipes() {
  // Clear the display area before displaying recipes
  displayArea.innerHTML = "";

  // Loop through the recipes array and display each recipe
  recipes.forEach((recipe) => {

    displayRecipe(recipe);
  });
}

function addIndex() {
    i = recipes.length + 1;
    z = "recipe-item-" + i;
    return z;
}


function resetIndex() {
    displayRecipes();
}

