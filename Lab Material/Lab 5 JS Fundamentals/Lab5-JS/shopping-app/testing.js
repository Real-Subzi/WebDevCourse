const products = [
    { id: 1, name: 'Apple 14 Pro Max', price: 4500 },
    { id: 2, name: 'iPad Pro 12.9-inch', price: 5600 },
    { id: 3, name: 'Samsung Galaxy S14', price: 3900 },
    { id: 4, name: 'Microsoft Surface Book 3', price: 6700 },
    { id: 5, name: 'Sony PlayStation 5', price: 3500 },
    { id: 6, name: 'Dell XPS 13', price: 4500 },
    { id: 7, name: 'LG 65-inch OLED TV', price: 9800 },
    { id: 8, name: 'Bose QuietComfort 35 II', price: 1800 }
]

const product = products.find((item)=>item.id===19);
if(product === undefined){
    console.log("true");
}