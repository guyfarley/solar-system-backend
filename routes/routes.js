const express = require("express");
const router = express.Router();
const routeController = require("../controller/routesController");

// Home page
router.get("/", routeController.home);

// Planet Routes
router.get('/planet/:planet_id', routeController.planet)

/* // Moon Routes
router.get('/:planet_id/:moon_id', routeController.moons) */

module.exports = router;
