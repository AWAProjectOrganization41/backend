const { response } = require('express')
const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const path = require('path')


app.use(express.json())

  /*app.use(express.static(path.join(__dirname, 'build')))
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  })*/

const restaurant_model = require('./restaurant_model')

/*
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});*/

app.get('/', (req, res) => {
  console.log("mooi")
  restaurant_model.getRestaurants()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.get('/restaurant_menu', (req, res) => {
  restaurant_model.getMenu()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.get('/user_login', (req, res) => {
  restaurant_model.getUserLogin()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.get('/restaurant_login', (req, res) => {
  restaurant_model.getRestaurantLogin()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.post('/restaurant', (req, res) => {
  restaurant_model.createRestaurant(req.body)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.post('/restaurant', (req, res) => {
  restaurant_model.createMenu(req.body)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.delete('/restaurant/:id', (req, res) => {
  restaurant_model.deleteRestaurant(req.params.id)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})
app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})