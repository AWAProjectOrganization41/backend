const Pool = require('pg').Pool
const pool = new Pool({
  user: 'local_u',
  host: 'localhost',
  database: 'restaurant_db',
  password: '1234',
  port: 5432,
});

const getRestaurants = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM restaurant', (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })
    }) 
  }
  const createRestaurant = (body) => {
    return new Promise(function(resolve, reject) {
      const { name, address } = body
      pool.query('INSERT INTO restaurant (name, address) VALUES ($1, $2) RETURNING *', [name, address], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(`A new restaurant has been added added: ${results.rows[0]}`)
      })
    })
  }
  const deleteRestaurant = () => {
    return new Promise(function(resolve, reject) {
      const id = parseInt(request.params.id)
      pool.query('DELETE FROM restaurant WHERE id = $1', [id], (error, results) => {
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