const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/piratedb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>console.log("Yo ho"))
    .catch(err=>console.log("oh no!", err))