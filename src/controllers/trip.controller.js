const model = require("../models/trip.model");

const createTrip = async (req, res, next) => {
  try {
    const trip = await model.createTrip(req.body);
    res.status(200).json(trip);
  } catch (error) {
    console.error("Error al crear viaje:", error);
    res.status(500).json({ error: "Error al crear viaje" });
  }
};

const acceptTrip = async (req, res, next) => {
  try {
    const { idTrip } = req.params;
    const trip = await model.acceptTrip(idTrip, req.body);
    res.status(200).json(trip);
  } catch (error) {
    console.error("Error al aceptar viaje:", error);
    res.status(500).json({ error: "Error al aceptar viaje" });
  }
};

const getTripsByStatus = async (req, res, next) => {
  try {
    const {status} = req.query
    const trips = await model.getTripsByStatus(status)
    res.status(200).json(trips);
  } catch (error) {
    console.error("Error al aceptar viaje:", error);
    res.status(500).json({ error: "Error al aceptar viaje" });
  }
};

module.exports = {
  createTrip,
  acceptTrip,
  getTripsByStatus
};
