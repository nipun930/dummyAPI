const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

var app = express();

app.use(bodyParser.urlencoded({limit: "50mb", extended: true  }));
app.use(bodyParser.json({limit: "50mb"}));

app.listen( port, () => {

    console.log("Server is listening on http://localhost:" + port);

    app.get('/', (req, res)=>{
        res.json({message : "server is working now"});
    });

    require('./app/routes/appRoutes')(app);

});
