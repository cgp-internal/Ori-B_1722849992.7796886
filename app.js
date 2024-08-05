const FoodCategory = require('./models/food-category');
const { getFoodCategories, addFoodCategory, updateFoodCategory, deleteFoodCategory } = require('./services/food-category-service');

async function main() {
  try {
    console.log('Application started');

    // Initialize data from CSV
    const foodCategories = await getFoodCategories();
    console.log('Initial food categories:', foodCategories);

    // Example usage of data manipulation methods
    const newCategory = new FoodCategory(5, 'Desserts', 'Sweet treats');
    await addFoodCategory(newCategory);
    console.log('Added new category:', newCategory);

    const updatedCategory = new FoodCategory(2, 'Fruits', 'Fresh and juicy');
    await updateFoodCategory(updatedCategory);
    console.log('Updated category:', updatedCategory);

    await deleteFoodCategory('Vegetables');
    console.log('Deleted category: Vegetables');

    console.log('Application finished');
  } catch (error) {
    console.error('Error:', error);
  }
}

main();