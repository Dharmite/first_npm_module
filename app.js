const catMe = require('cat-me');
const faker = require('faker');

console.log(catMe());

console.log(catMe('nyan'));

for (let index = 0; index < 10; index++) {
    console.log(faker.fake('{{commerce.productName}} - ${{commerce.price}}'));
}
