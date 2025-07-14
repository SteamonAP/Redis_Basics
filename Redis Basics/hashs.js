const client = require('./client');

const fieldAdded = async () => {
  await client.hset('bike:1', {
    model: 'hc900',
    brand: 'Audi',
    type: 'speed bikes',
    price: 1000,
  });
};

const model = async () => await client.hget('bike:1', 'model');
const price = async () => await client.hget('bike:1', 'price');
const fields  = async () => await client.hmget('bike:1', ['brand','type']);
const newPrice = async () => await client.hincrby('bike:1', 'price', 1200);

(async () => {
  await fieldAdded(); // Save fields

  const modelValue = await model();
  const priceValue = await price();
  const fieldsTogs = await fields();
  const newPrices = await newPrice()

  console.log(`model: ${modelValue}`);
  console.log(`price: ${priceValue}`);
  console.log(`other Details: ${fieldsTogs}`);
  console.log(`New Price : ${newPrices}`);
})();
