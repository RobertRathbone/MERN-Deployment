const pirateController = require('../controller/pirateController');


module.exports = (app) => {
    app.get('/api/findpirates', pirateController.findPirates);
    app.post('/api/pirate', pirateController.createPirate);
    app.put('/api/pirate/:id', pirateController.updatePirate);
    app.delete('/api/pirate/:id', pirateController.deletePirate);
    app.get('/api/pirate/:id', pirateController.findPirate);

}