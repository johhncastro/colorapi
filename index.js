const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const colors = [
    { name: "Red", hex: "#FF0000" },
    { name: "Blue", hex: "#0000FF" },
    { name: "Green", hex: "#008000" },
    { name: "Yellow", hex: "#FFFF00" },
    { name: "Purple", hex: "#800080" },
    { name: "Orange", hex: "#FFA500" },
    { name: "Pink", hex: "#FFC0CB" },
    { name: "Cyan", hex: "#00FFFF" }
];

app.get("/color", (req, res) => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    res.json(randomColor);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Color API running on port ${PORT}`));
