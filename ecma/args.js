
function fetchOrders(start = 10, count = 50) {

  console.log(start, count);
  // some implementation here
}

fetchOrders(undefined, 100);


// Be careful when setting default values
// of object keys
// WILL NOT WORK å
function printSettings(settings = { host: '0.0.0.0' }) {

  console.log(settings);
  // some implementation here
}

printSettings({
  host: 'localhost',
  port: 4050,
  name: 'root'
});
