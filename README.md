# Food Category Application

This application provides a simple data storage and manipulation system for food categories. It uses a CSV file for data storage and provides methods for data manipulation.

## How to Run

1. Clone the repository
2. Run the `run.sh` script in the terminal to install Node and initialize the project
3. Install the `csv-parser` package by running `npm install csv-parser`
4. Start the application by running `node app.js`

## Application Structure

The application consists of the following components:

* `app.js`: The main entry point for the application, initializes the CSV parser, reads and provides methods for data manipulation.
* `models/food-category.js`: Defines the FoodCategory model structure and schema.
* `services/food-category-service.js`: Contains logic for food category data manipulation.
* `utils/csv-parser.js`: CSV parser utility for data storage and manipulation.
* `food-categories.csv`: Initial data storage for 5 random food category records.

## Available Methods

* `getFoodCategories()`: Retrieves all food categories
* `addFoodCategory(category)`: Adds a new food category
* `updateFoodCategory(category)`: Updates an existing food category
* `deleteFoodCategory(category)`: Deletes a food category