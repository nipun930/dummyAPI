// const a = ;

module.exports = (app) => {

    app.get('/testing', require("../controller/api").signup);
    
}