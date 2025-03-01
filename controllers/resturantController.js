const Restaurant = require('/models/Restaurant');

// Add a new restaurant
exports.addRestaurant = async (req, res) => {
  const { name, location, cuisine, rating, image } = req.body;

  try {
    const newRestaurant = new Restaurant({ name, location, cuisine, rating, image });
    await newRestaurant.save();
    res.status(201).json(newRestaurant);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get all restaurants
exports.getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};