const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 500 },
    { name: "Mobile", price: 30000 },
    { name: "Keyboard", price: 1500 }
];

const expensiveProducts = products.filter(
    product => product.price > 1000
);

console.log(expensiveProducts);