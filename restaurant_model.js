const { Client } = require('pg')
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
}
});

client.connect()

const getRestaurants = () => {
    return new Promise(function(resolve, reject) {
      client.query('SELECT * FROM restaurant', (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
        console.log(results)
      })
    }) 
  }
  const createRestaurant = (body) => {
    return new Promise(function(resolve, reject) {
      const { name, address, operating_hours, imagePath, restaurantType, priceLevel } = body
      client.query('INSERT INTO restaurant (name, address, operating_hours, imagepath, restaurant_type, price_level) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [name, address, operating_hours, imagePath, restaurantType, priceLevel], (error, results) => {
        if (error) {
          reject(error)
        }
        console.log(JSON.stringify(row))
        resolve(`A new restaurant has been added added: ${results.rows[0]}`)
        client.end()
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
  }