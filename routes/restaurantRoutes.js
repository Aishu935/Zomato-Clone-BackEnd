const express = require('express');
const { addRestaurant, getRestaurants } = require('../controllers/restaurantController');
const router = express.Router();

router.post('/add', addRestaurant);
router.get('/', getRestaurants);

module.exports = router;