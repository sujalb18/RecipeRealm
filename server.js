const express = require('express');
const app = express();

const path = require("path");

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Recipe Data
const recipes = [
    {
        id: 1,
        name: "Margherita Pizza",
        category: "Italian",
        description: "Classic pizza with mozzarella, basil and tomato sauce.",
        image: "images/pizza.jpg"
    },
    {
        id: 2,
        name: "Cheese Burger",
        category: "Fast Food",
        description: "Juicy grilled chicken burger with melted cheddar cheese.",
        image: "images/burger.jpg"
    },
    {
        id: 3,
        name: "Creamy Pasta",
        category: "Italian",
        description: "Creamy Alfredo pasta with parmesan cheese.",
        image: "images/pasta.jpg"
    },
    {
        id: 4,
        name: "Caesar Salad",
        category: "Healthy",
        description: "Fresh lettuce with Caesar dressing and croutons.",
        image: "images/salad.jpg"
    },
    {
        id: 5,
        name: "Chocolate Cake",
        category: "Dessert",
        description: "Rich chocolate cake with smooth frosting.",
        image: "images/cake.jpg"
    },
    {
        id: 6,
        name: "Sushi Platter",
        category: "Japanese",
        description: "Fresh sushi rolls made with fresh ingredients. Served with wasabi.",
        image: "images/sushi.jpg"
    }
];

// REST API
app.get("/api/recipes", (req, res) => {
    res.json(recipes);
});

// Home Page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});