const express = require("express");
const app = express();

port = 4040;

app.listen(port, ()=>{
    console.log(`server listening on port ${port}`)
});

app.get("/test", (req, res) => {
    res.send("Test");

});

app.get("/family", (req, res) => {
    const family = [
        {
            id : 1,
            name : "Alfredo 👨",
            age : 2024-1967,
        },
        {
            id : 2,
            name : "Lety 👩‍🔬",
            age : 2024-1969,
        },
        {
            id : 3,
            name : "Abner",
            age : 29,
        },
        {
            id : 4,
            name : "Eliasib",
            age : 20,
        },
        {
            id : 5,
            name : "Phillip ♥️",
            age : 28,
        }

    ];
    res.json(family);

});

//Test 2nd commit