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
    store.customers.push(this);
}

class Meal {
  constructor() {
    this.id = ++mealId;
    store.meals.push(this);
}

class Delivery {
  constructor(meal, neighborhood, customer) {
    this.id = ++deliveryId;
    this.mealId = meal.id;
    this.neighborhoodId = neighborhood.id;
    this.customerId = customer.id;
    store.deliveries.push(this);
}
