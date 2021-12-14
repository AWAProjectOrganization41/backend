
const { Client } = require('pg')
const client = new Client({
  // kommaa jos teet lokaalisti
 /* connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
}*/

//unkommaa jos teet lokaalisti
user: 'local_u',
  host: 'localhost',
  database: 'restaurant_db',
  password: '1234',
  port: 5432,
});


client.connect()

//function for getting the restaurants
const getRestaurants = () => {
    return new Promise(function(resolve, reject) {
      client.query('SELECT * FROM restaurant', (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })
    }) 
  }

  //function for getting the menu
  const getMenu = () => {
    return new Promise(function(resolve, reject) {
      client.query('SELECT * FROM restaurant_menu WHERE owner_id = 1', (error, results) => {
        if(error) {
          reject(error)
        }
        resolve(results.rows);
      })
    })
  }

  //function for getting the username and password
  const postUserLogin = (body) => {
    return new Promise(function(resolve, reject) {
      const { email, password } = body
      client.query("SELECT * FROM user_login WHERE username = $1 AND password = $2", [email, password], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows)
      })
    })
  }

  //function for getting a restaurant by id
  const getRestaurantsById = (body) => {
    return new Promise(function(resolve, reject) {
      console.log("joo"+JSON.stringify(body[0]))
      const { id } = body[0]
      console.log("iidee on "+id)
      client.query("SELECT * FROM restaurant WHERE owner_id = $1", [id], (error, results) => {
        if (error) {
          reject(error)
        }
        console.log(results.rows)
        resolve(results.rows)
      })
    })
  }

  //gets menu by restaurant id
  const getMenuById = (body) => {
    return new Promise(function(resolve, reject) {
      console.log("joo"+JSON.stringify(body[0]))
      body = JSON.parse(JSON.stringify(body[0]))
      const { id } = body
      console.log("jee"+id)
      client.query("SELECT * FROM restaurant_menu WHERE owner_id = $1", [id], (error, results) => {
        if (error) {
          reject(error)
        }
        console.log(results.rows)
        resolve(results.rows)
      })
    })
  }

  //gets restaurant managers login info
  const postRestaurantLogin = (body) => {
    return new Promise(function(resolve, reject) {
      console.log(body)
      const { email, password } = body
      client.query("SELECT * FROM restaurant_login WHERE restaurant_username = $1 AND restaurant_password = $2", [email, password], (error, results) => {
        if(error) {
          reject(error)
        }
        console.log("Kirjautuminen onnistui")
        resolve(results.rows);
      })
    })
  }

  //creates a new restaurant
  const createRestaurant = (body) => {
    return new Promise(function(resolve, reject) {
      const { name, address, operating_hours, imagepath, restaurant_type, price_level, owner_id } = body
      client.query('INSERT INTO restaurant (name, address, operating_hours, imagepath, restaurant_type, price_level, owner_id) VALUES ($1, $2, $3, $4, $5, $6, $7)', [name, address, operating_hours, imagepath, restaurant_type, price_level, owner_id], (error, results) => {
        if (error) {
          reject(error)
        }
        //resolve(`A new restaurant has been added added: ${results.rows[0]}`)
      })
    })
  }

  //creates a new menu
  const createMenu = (body) => {
    console.log("tehhään menu"+JSON.stringify(body))
    return new Promise(function(resolve, reject) {
      const { item_name, description, price, imagepath, owner_id } = body
      client.query('INSERT INTO restaurant_menu (item_name, description, price, imagepath, owner_id) VALUES ($1, $2, $3, $4, $5) RETURNING *', [item_name, description, price, imagepath, owner_id], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(`Product added succesfully`)
      })   
    })
  }

  //creates a new user
  const createUserLogin = (body) => {
    return new Promise(function(resolve, reject) {
      const { username, password } = body
      console.log(body)
      client.query('INSERT INTO user_login (username, password) VALUES ($1, $2) RETURNING *', [username, password], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(`new user has been created`)
      })   
    })
  }

  //creates a new restaurant
  const createRestaurantLogin = (body) => {
    return new Promise(function(resolve, reject) {
      const { username, password } = body
      console.log("boty: "+JSON.stringify(body))
      client.query('INSERT INTO restaurant_login (restaurant_username, restaurant_password) VALUES ($1, $2) RETURNING *', [username, password], (error, results) => {
        if (error) {
          reject(error)
        }
        console.log("jup")
        resolve(` new user has been created`)
      })   
    })
  }
  
/*
  const getUserOrderhistory = () => {
    return new Promise(function(resolve, reject) {
      client.query('SELECT * FROM user_orderhistory', (error, results) => {
        if(error) {
          reject(error)
        }
        resolve(results.rows);
      })
    })
  }

  const getRestaurantOrderhistory = () => {
    return new Promise(function(resolve, reject) {
      client.query('SELECT * FROM restaurant_orderhistory', (error, results) => {
        if(error) {
          reject(error)
        }
        resolve(results.rows);
      })
    })
  }*/

  //creates an order for user
  const createUserOrder = (body) => {
    return new Promise(function(resolve, reject) {
      const { restaurant_name, products, total_price } = body
      client.query('INSERT INTO user_orderhistory (restaurant_name, products, total_price) VALUES ($1, $2, $3) RETURNING *', [restaurant_name, products, total_price], (error, results) => {
        if (error) {
          reject(error)
        }
 
      })   
    })
  }

  //creates a new order for restaurant manager
  const createRestaurantOrder = (body) => {
    return new Promise(function(resolve, reject) {
      const { orderer_username, products, total_price, owner_id, restaurant_name } = body
      console.log("restaurantorderbackend"+JSON.stringify(body))
      client.query('INSERT INTO restaurant_orderhistory (orderer_username, products, total_price, owner_id, restaurant_name) VALUES ($1, $2, $3, $4, $5) RETURNING *', [orderer_username, products, total_price, owner_id, restaurant_name], (error, results) => {
        if (error) {
          reject(error)
        }

      })   
    })
  }

  //gets user order history
  const postUserOrderHistory = (body) => {
    return new Promise(function(resolve, reject) {
      const { username } = body
      console.log("restaurantorderbackend"+username)
      client.query('SELECT * FROM restaurant_orderhistory WHERE orderer_username = $1', [username], (error, results) => {
        if (error) {
          reject(error)
        }
        console.log(results.rows)
        resolve(results.rows)
      })   
    })
  }

  const postRestaurantOrderHistory = (body) => {
    return new Promise(function(resolve, reject) {
      const { restaurant_id } = body
      console.log("restaurantorderbackend"+restaurant_id)
      client.query('SELECT * FROM restaurant_orderhistory WHERE owner_id = $1', [restaurant_id], (error, results) => {
        if (error) {
          reject(error)
        }
        console.log(results.rows)
        resolve(results.rows)
      })   
    })
  }


  module.exports = {
    getRestaurants,
    createRestaurant,
    deleteRestaurant,
    getMenu,
    postUserLogin,
    postRestaurantLogin,
    createMenu,
    createUserLogin,
    createRestaurantLogin,
    postUserOrderHistory,
    postRestaurantOrderHistory,
    getRestaurantsById,
    //getRestaurantOrderhistory,
    //getUserOrderhistory,
    createRestaurantOrder,
    createUserOrder, 
    getMenuById
  }
