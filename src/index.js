function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsElement = document.querySelector("#user-instructions");
  let apiKey = "c9f3e1aa2eo8b1a80d203dc2740btbf9";
  let prompt = `User instructions: Generate a dessert recipe with ${instructionsElement.value}`;
  let context =
    "You are a master pastry chef, expert in easy to make desserts. Your mission is to generate a short recipe in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Sign the recipe with 'SheCodes AI' inside a <strong> element at the end of the recipe and NOT at the beginning";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<span class="generating">⏳ Generating a recipe</span> with ${instructionsElement.value}`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
