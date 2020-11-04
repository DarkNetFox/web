const projects = require("../views/home/json/projects.json")

function home_start(app) {
    app.get(`/`, (req, res) => {
        res.render(`home/home.ejs`, {
            project_list: projects
        })
    });

    app.get(`/home_js_1.js`, (req, res) => {
        res.sendFile(process.cwd() + "/views/home/js/home_js_1.js")
    });

    app.get(`/home.css`, (req, res) => {
        res.sendFile(process.cwd() + "/views/home/css/main.css")
    });
}

module.exports = {
    home_start
}