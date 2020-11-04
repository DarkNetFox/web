function projects_anamorphosis_contemporary_art(app) {
    app.get(`/@projects_anamorphosis-contemporary-art`, (req, res) => {
        res.render(`projects/anamorphosis-contemporary-art/index.ejs`)
    });

    app.get(`/@projects_anamorphosis-contemporary-art.js`, (req, res) => {
        res.sendFile(process.cwd() + "/views/projects/js/anamorphosis-contemporary-art/index.js")
    });

    app.get(`/@projects_anamorphosis-contemporary-art.css`, (req, res) => {
        res.sendFile(process.cwd() + "/views/projects/css/anamorphosis-contemporary-art/main.css")
    });

    
    app.get(`/@projects_anamorphosis-contemporary-art.image_1.png`, (req, res) => {
        res.sendFile(process.cwd() + "/assets/images/1/Anamorphosis.jpg")
    });
}

module.exports = {
    projects_anamorphosis_contemporary_art
}