
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

  const getMenuById = (body) => {
    return new Promise(function(resolve, reject) {
      const { restaurant_id } = body
      client.query("SELECT * FROM restaurant_menu WHERE owner_id = $1", [restaurant_id], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows)
      })
    })
  }

  const postRestaurantLogin = (body) => {
    return new Promise(function(resolve, reject) {
      console.log("moro2")
      const { email, password } = body
      client.query("SELECT * FROM restaurant_login WHERE restaurant_username = $1 AND restaurant_password = $2", [email, password], (error, results) => {
        if(error) {
          reject(error)
        }
        console.log("moro3")
        resolve(results.rows);
      })
    })
  }

  /*const deleteRestaurant = () => {
    return new Promise(function(resolve, reject) {
      const id = parseInt(request.params.id)
      client.query('DELETE FROM restaurant WHERE id = $1', [id], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(`Restaurant deleted with ID: ${id}`)
      })
    })
  }*/


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

  const createMenu = (body) => {
    return new Promise(function(resolve, reject) {
      const { item_name, description, price, imagepath, owner_id } = body
      client.query('INSERT INTO restaurant_menu (item_name, description, price, imagepath, owner_id) VALUES ($1, $2, $3, $4, $5) RETURNING *', [item_name, description, price, imagepath, owner_id], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(`mooo`)
      })   
    })
  }

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

// drop owner_id

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
  

  const deleteRestaurant = () => {
    return new Promise(function(resolve, reject) {
      const id = parseInt(request.params.id)
      client.query('DELETE FROM restaurant WHERE id = $1', [id], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(`Restaurant deleted with ID: ${id}`)
      })
    })
  }

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
  }

  const createUserOrder = (body) => {
    return new Promise(function(resolve, reject) {
      const { restaurant_name, products, total_price, restaurant_id} = body
      client.query('INSERT INTO user_orderhistory (restaurant_name, products, total_price, restaurant_id) VALUES ($1, $2, $3, $4) RETURNING *', [restaurant_name, products, total_price, restaurant_id], (error, results) => {
        if (error) {
          reject(error)
        }
 
      })   
    })
  }

  const createRestaurantOrder = (body) => {
    return new Promise(function(resolve, reject) {
      const { orderer_username, products, total_price, restaurant_id} = body
      client.query('INSERT INTO restaurant_orderhistory (orderer_username, products, total_price, restaurant_id) VALUES ($1, $2, $3, $4) RETURNING *', [orderer_username, products, total_price, restaurant_id], (error, results) => {
        if (error) {
          reject(error)
        }

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
    getRestaurantOrderhistory,
    getUserOrderhistory,
    createRestaurantOrder,
    createUserOrder, 
    getMenuById
  }
