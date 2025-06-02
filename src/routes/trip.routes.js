const router = require("express").Router()
const tripController = require("../controllers/trip.controller")

router.post("/trip", tripController.createTrip )
router.put("/trip/accept/:idTrip", tripController.acceptTrip )
router.get("/trip", tripController.getTripsByStatus )




module.exports = router