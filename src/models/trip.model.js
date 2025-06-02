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

  const [lastInserted] = await pool.query(
    "SELECT * FROM taxifast.trips WHERE id = LAST_INSERT_ID();"
  );
  return lastInserted[0];
};

const acceptTrip = async (idTrip, data) => {
  const query = `update taxifast.trips set driver_id = ?, status = ? where id = ? and user_id = ?`;

  const trip = await pool.query(query, [
    data.driver_id,
    data.status,
    idTrip,
    data.user_id,
  ]);
  return trip;
};

const getTripsByStatus = async(status) => {
    const query = "select * from taxifast.trips where status = ?;"
     const trips = await pool.query(query, [status])
    return trips[0]
}


module.exports = {
  createTrip,
  acceptTrip,
  getTripsByStatus
};
