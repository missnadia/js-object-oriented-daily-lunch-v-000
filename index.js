// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };
let neighborhoodId = 0;
let customerId = 0;
let mealId = 0;
let deliveryId = 0;

class Neighborhood {
  constructor(name) {
    this.id = ++neighborhoodId;
    this.name = name;

    store.neighborhoods.push(this);
  }

  deliveries() {
    return store.deliveries.filter(delivery => {
      return delivery.neighborhoodId === this.id;
    });
  }

  customers() {

  }

  meals() {

  }
}

class Customer {
  constructor() {
    this.id = ++customerId;
}

class Meal {
  constructor() {
    this.id = ++mealId;
}

class Delivery {
  constructor() {
    this.id = ++deliveryId;
}
