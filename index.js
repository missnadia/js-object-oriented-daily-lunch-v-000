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
    });
    return delivery.neighborhoodId === this.id;
  }

  customers() {
    return store.customers.filter(customer => {
      return customer.neighborhoodId === this.id;
    });
  }

  meals() {

  }
}

class Customer {
  constructor(name, neighborhood) {
    this.id = ++customerId;
    this.name = name;
    this.neighborhoodId = neighborhood.id;
    store.customers.push(this);
  }

  deliveries() {
    return store.deliveries.filter(delivery => {
    });
    return delivery.customerId === this.id;
  }

  meals() {

  }

  totalSpent() {

  }
}

class Meal {
  constructor(title, price) {
    this.id = ++mealId;
    this.title = title;
    this.price = price;
    store.meals.push(this);
  }

  deliveries() {
    return store.deliveries.filter(delivery => {
    });
    return delivery.mealId === this.id;
  }

  customers() {

  }

  byPrice() {

  }
}

class Delivery {
  constructor(meal, neighborhood, customer) {
    this.id = ++deliveryId;
    this.mealId = meal.id;
    this.neighborhoodId = neighborhood.id;
    this.customerId = customer.id;
    store.deliveries.push(this);
  }

  meal() {
    return store.meals.find(meal =>
      return meal.id === this.mealId;
    });
  }

  customer() {

  }

  neighborhood() {

  }
}
