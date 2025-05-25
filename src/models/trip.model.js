const pool = require("../db/connection");

const createTrip = async (trip) => {
  const query = `INSERT INTO taxifast.trips
(
user_id,
driver_id,
start_location,
destination,
status,
payment_method
)
VALUES
(?,?,?,?,?,?);`;

  await pool.query(query, [
    trip.user_id,
    trip.driver_id,
    trip.start_location,
    trip.destination,
    trip.status,
    trip.payment_method,
  ]);

  const [lastInserted] = await pool.query('SELECT * FROM taxifast.trips WHERE id = LAST_INSERT_ID();')
  return lastInserted[0];
};

module.exports = {
  createTrip,
};
