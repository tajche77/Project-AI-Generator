function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "The recipe goes here",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let recipeFormElement = document.querySelector("recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
