const router = require("express").Router()
const tripController = require("../controllers/trip.controller")

router.post("/trip", tripController.createTrip )
router.put("/trip/:idTrip", tripController.createTrip )




module.exports = router