const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'lightbnb'
});

/**
 * Get a single user from the database given their email.
 * @param {String} email The email of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithEmail = function(email) {
  const query = `SELECT * FROM users WHERE email = $1`;
  return pool
    .query(query, [email.toLowerCase()])
    .then(res => res.rows[0])
    .catch(err => console.error('Query error', err.stack));
};

/**
 * Get a single user from the database given their id.
 * @param {string} id The id of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithId = function(id) {
  const query = `SELECT * FROM users WHERE id = $1`;
  return pool
    .query(query, [id])
    .then(res => res.rows[0])
    .catch(err => console.error('Query error', err.stack));
};

/**
 * Add a new user to the database.
 * @param {Object} user An object representing the user to be added, with the following properties:
 * @return {Promise<Object>} A promise that resolves to the newly created user object.
 */

const addUser = function(user) {
  const query = `
    INSERT INTO users (name, email, password)
    VALUES ($1, $2, $3)
    RETURNING *;`;

  const values = [user.name, user.email, user.password];

  return pool
    .query(query, values)
    .then(res => res.rows[0])
    .catch(err => console.error('Query error', err.stack));
};

/**
 * @param {string} guestId The id of the user for whom to retrieve reservations.
 * @param {number} [limit=10] The maximum number of reservations to return.
 * @return {Promise<Array>} A promise that will resolve to an array of reservation objects.
 */
const getAllReservations = function(guestId, limit = 10) {
  const query = `
    SELECT reservations.*, properties.*, AVG(property_reviews.rating) as average_rating
    FROM reservations
    JOIN properties ON reservations.property_id = properties.id
    JOIN property_reviews ON properties.id = property_reviews.property_id
    WHERE reservations.guest_id = $1
    GROUP BY properties.id, reservations.id
    ORDER BY reservations.start_date
    LIMIT $2;
  `;
  return pool
    .query(query, [guestId, limit])
    .then(res => res.rows)
    .catch(err => console.error('Query error', err.stack));
};

/**
 * Retrieves properties from the database based on the provided search criteria.
 * @param {Object} options An object containing query options
 * @param {number} [limit=10] The maximum number of property records to return.
 * @return {Promise<Array>} A promise that resolves to an array of property objects that match the criteria.
 */

const getAllProperties = function(options, limit = 10) {
  const queryParams = [];
  let queryString = `
    SELECT properties.*, AVG(property_reviews.rating) as average_rating
    FROM properties
    LEFT JOIN property_reviews ON properties.id = property_reviews.property_id
  `;

  const whereConditions = [];

  if (options.city) {
    queryParams.push(`%${options.city}%`);
    whereConditions.push(`city LIKE $${queryParams.length}`);
  }

  if (options.owner_id) {
    queryParams.push(options.owner_id);
    whereConditions.push(`owner_id = $${queryParams.length}`);
  }

  if (options.minimum_price_per_night) {
    queryParams.push(Number(options.minimum_price_per_night) * 100);
    whereConditions.push(`cost_per_night >= $${queryParams.length}`);
  }

  if (options.maximum_price_per_night) {
    queryParams.push(Number(options.maximum_price_per_night) * 100);
    whereConditions.push(`cost_per_night <= $${queryParams.length}`);
  }

  // Add WHERE conditions to the query
  if (whereConditions.length > 0) {
    queryString += ` WHERE ${whereConditions.join(' AND ')}`;
  }

  queryString += `
    GROUP BY properties.id
  `;

  // Add HAVING clause for minimum rating, if provided
  if (options.minimum_rating) {
    queryParams.push(options.minimum_rating);
    queryString += `HAVING AVG(property_reviews.rating) >= $${queryParams.length} `;
  }

  // Add ORDER BY and LIMIT clauses
  queryParams.push(limit);
  queryString += `
    ORDER BY cost_per_night
    LIMIT $${queryParams.length};
  `;

  // Console log for debug
  console.log(queryString, queryParams);

  return pool
    .query(queryString, queryParams)
    .then(res => res.rows)
    .catch(err => console.error('Query error', err.stack));
};


/**
 * Add a property to the database
 * @param {{}} property An object containing all of the property details.
 * @return {Promise<Object>} A promise that resolves with the newly created property object.
 */
const addProperty = function(property) {
  const queryParams = [
    property.owner_id,
    property.title,
    property.description,
    property.thumbnail_photo_url,
    property.cover_photo_url,
    Number(property.cost_per_night) * 100,
    property.street,
    property.city,
    property.province,
    property.post_code,
    property.country,
    property.parking_spaces,
    property.number_of_bathrooms,
    property.number_of_bedrooms
  ];

  let queryString = `
    INSERT INTO properties (
      owner_id, title, description, thumbnail_photo_url, cover_photo_url,
      cost_per_night, street, city, province, post_code, country,
      parking_spaces, number_of_bathrooms, number_of_bedrooms
    )
    VALUES (
      $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14
    )
    RETURNING *;
  `;

  return pool
    .query(queryString, queryParams)
    .then(res => res.rows[0])
    .catch(err => console.error('Query error', err.stack));
};

module.exports = {
  getUserWithEmail,
  getUserWithId,
  addUser,
  getAllReservations,
  getAllProperties,
  addProperty,
};