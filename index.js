const express = require("express");
const app = express();
app.use(express.json());
var family = [];

port = 4040;

app.listen(port, ()=>{
    console.log(`server listening on port ${port}`)
});

app.get("/test", (req, res) => {
    res.send("Test");

});

app.get("/family", (req, res) => {
    family = [
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

app.post ("/family", (req, res) => {
    const member = {
        id : family.length + 1,
        name : req.body.name,
        age : req.body.age
    };
    family.push(member);
    res.send(member);
})

//Test 2nd commit
// Crea una ruta POST /family que cree un agregue un familiar
// La idea es que despues de que llames el post, y luego llames GET en la lista salga el que creastes
// Declarara var family at the top of the file just after imports (por fuera de la función)