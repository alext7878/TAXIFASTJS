const model = require("../models/trip.model");

const createTrip = async (req, res, next) => {
  try {
    const trip = await model.createTrip(req.body)
    res.status(200).json(trip);
  } catch (error) {
    console.error("Error al crear viaje:", error);
    res.status(500).json({ error: "Error al crear viaje" });
  }
};

module.exports = {
  createTrip
};