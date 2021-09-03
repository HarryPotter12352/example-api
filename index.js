const express = require("express");
const app = express();
const port = process.env.PORT || 5500;
app.use(express.json());
let languages = [
    {id: 1, name : "javascript"}
]

app.get("/", (req, res) => {
    res.send("This is my API's homepage!");
})

app.get("/api/get/:language_id", (req, res) => {
    let language = languages.find(r => r.id === parseInt(req.params.language_id));
    if(!language){
        res.send("Please give a valid language id!");
    }
    res.send(language)
})

app.get("/api/add", (req, res) => {
    const new_id = languages.length + 1;
    const language_name = req.body.name;
    const test = languages.find(r => r.name === language_name);
    if(!test){
        const object_to_push = {
            id: new_id,
            name: language_name
        }
        languages.push(object_to_push);
        res.send("Successfully added your object! :)");
        console.log(languages)
    }

    res.status(400).send(`A language with the name ${language_name} already exists!`);
    console.log(languages);
})

app.get("/api/random", (req, res) => {
    const item = languages[Math.floor(Math.random()*languages.length)]
    res.send(item);
})


app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`)
})