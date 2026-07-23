async function loadRecipes() {
    const response = await fetch("/api/recipes");
    const recipes = await response.json();
    const container = document.getElementById("recipeContainer");
    recipes.forEach(recipe => {
        container.innerHTML += `
        <div class="col s12 m6 l4">

            <div class="card">

                <div class="card-image">
                    <img src="${recipe.image}" style="width: 100%; height: 200px; object-fit: cover;">
                    <span class="card-title">${recipe.name}</span>
                </div>

                <div class="card-content">
                    <p>${recipe.description}</p>
                </div>

                <div class="card-action">
                    <a href="#">${recipe.category}</a>
                </div>

            </div>

        </div>
        `;
    });
}

loadRecipes();