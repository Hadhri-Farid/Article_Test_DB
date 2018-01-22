module.exports = (app) => {
    app.post('/createArticle', (req, res) => {
        res.send({
            message: `
        titre : ${req.body.title}
        text  : ${req.body.text}
        img   : ${req.body.img}
        `
        })
    })
}
