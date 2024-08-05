class FoodCategory {
  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
  }

  static schema = {
    id: {
      type: 'integer',
      primaryKey: true
    },
    name: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string',
      required: false
    }
  };
}

module.exports = FoodCategory;