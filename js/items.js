function items_start(app) {
    app.get(`/canel_arrow.png`, (req, res) => {
        res.sendFile(process.cwd() + "/assets/images/GUI/canel.png")
    });
}

module.exports = {
    items_start
}