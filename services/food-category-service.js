const { parseCSV, writeCSV } = require('./utils/csv-parser');

class FoodCategoryService {
  async getFoodCategories() {
    try {
      const foodCategories = await parseCSV();
      return foodCategories;
    } catch (error) {
      throw error;
    }
  }

  async addFoodCategory(category) {
    try {
      const existingCategories = await parseCSV();
      existingCategories.push(category);
      await writeCSV(existingCategories);
      return category;
    } catch (error) {
      throw error;
    }
  }

  async updateFoodCategory(category) {
    try {
      const existingCategories = await parseCSV();
      const index = existingCategories.findIndex((c) => c['Category Name'] === category['Category Name']);
      if (index !== -1) {
        existingCategories[index] = category;
        await writeCSV(existingCategories);
        return category;
      } else {
        throw new Error('Category not found');
      }
    } catch (error) {
      throw error;
    }
  }

  async deleteFoodCategory(categoryName) {
    try {
      const existingCategories = await parseCSV();
      const index = existingCategories.findIndex((c) => c['Category Name'] === categoryName);
      if (index !== -1) {
        existingCategories.splice(index, 1);
        await writeCSV(existingCategories);
        return true;
      } else {
        throw new Error('Category not found');
      }
    } catch (error) {
      throw error;
    }
  }
}

module.exports = {
  getFoodCategories: new FoodCategoryService().getFoodCategories,
  addFoodCategory: new FoodCategoryService().addFoodCategory,
  updateFoodCategory: new FoodCategoryService().updateFoodCategory,
  deleteFoodCategory: new FoodCategoryService().deleteFoodCategory,
};