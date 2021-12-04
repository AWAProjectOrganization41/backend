
const { Client } = require('pg')
const client = new Client({
  // kommaa jos teet lokaalisti
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
}

//unkommaa jos teet lokaalisti
/*user: 'local_u',
  host: 'localhost',
  database: 'restaurant_db',
  password: '1234',
  port: 5432,*/
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

  const getUserLogin = () => {
    return new Promise(function(resolve, reject) {
      client.query('SELECT * FROM user_login', (error, results) => {
        if(error) {
          reject(error)
        }
        resolve(results.rows);
      })
    })
  }

  /*const getRestaurantLogin = () => {
    return new Promise(function(resolve, reject) {
      client.query('SELECT * FROM restaurant_login', (error, results) => {
        if(error) {
          reject(error)
        }
        resolve(results.rows);
      })
    })
  }*/



  const createRestaurant = (body) => {
    return new Promise(function(resolve, reject) {
      const { name, address, operating_hours, imagePath, restaurantType, priceLevel } = body
      client.query('INSERT INTO restaurant (name, address, operating_hours, imagepath, restaurant_type, price_level) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [name, address, operating_hours, imagePath, restaurantType, priceLevel], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(`A new restaurant has been added added: ${results.rows[0]}`)
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
        resolve(` menu has been added`)
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



  
  module.exports = {
    getRestaurants,
    createRestaurant,
    deleteRestaurant,
    getMenu,
    getUserLogin,
   // getRestaurantLogin,
    createMenu}