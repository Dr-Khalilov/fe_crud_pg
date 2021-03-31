const express = require('express');
const ThingController = require('./controllers/thing.controlles');

const app = express();

const bodyParser = express.json();

app.use(bodyParser); // data stream -> json -> js object -> req.body

app.post('/thing', ThingController.createThing);
app.get('/thing', ThingController.getAllThings);

app
  .route('/thing/:id')
  .get(ThingController.getThingById)
  .patch(ThingController.updateById)
  .delete(ThingController.deleteById);

app.use((err, req, res, next) => {
  // bad practice
  res.status(500).send(err);
});

module.exports = app;
