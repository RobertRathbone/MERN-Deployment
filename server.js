const express = require('express');
const cors = require('cors')
const app = express();
require('./server/config/mongoose.config');
app.use(cors(),express.urlencoded({extended:true}),express.json()) 
require('./server/routes/pirateRoutes')(app);
app.listen(8000, () => {
    console.log("Yo dude, 8000")
})