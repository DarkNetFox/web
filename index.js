const express = require('express');
const app = express();
const bodyParser = require("body-parser")

const home = require("./js/home");
const items = require("./js/items");
const projects_anamorphosis_contemporary_art = require("./js/projects/anamorphosis-contemporary-art")
//const social_studies_1 = require("./js/social_studies_1")

app.set(`view engular`, `ejs`)
app.use(bodyParser.urlencoded({
    extended: true
}))

home.home_start(app);
items.items_start(app);
projects_anamorphosis_contemporary_art.projects_anamorphosis_contemporary_art(app);

app.listen(process.env.PORT || 8080, () => {
    console.log(`Сервер запущен на хосте ${process.env.PORT || 8080}!`)
})
