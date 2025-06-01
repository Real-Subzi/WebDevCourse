//Exercise 4 - Shopping App
import promptSync from 'prompt-sync';
const prompt = promptSync();

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

const shoppingCart = []

function menu(){
    console.log("What would you like to do? \n1. Add Product \n2. Change quantity \n3. Delete product \n4. Display invoice");
    const input = prompt();
    return input;
}

function addProduct(){
    console.log("Choose one of the available products: (Product ID)",products);
    const choice = parseInt(prompt()); //productID
    console.log("Choose the quantity of this product: ");
    const quantity = parseInt(prompt()); //quantity
    
    const productObj = products.find((item) => item.id===choice);//store the product from listing. ALSO == because choice is a string while id is a number.
    if((shoppingCart.find((item)=>item.id===choice))===undefined){//if this item isn't in the cart
        const productCopy = {...productObj};//create a copy of the product from listing.
        productCopy.quantity=quantity;//add the quantity to the productCopy
        console.log(productCopy);
        shoppingCart.push(productCopy);//add the productCopy to the cart.
    }else{ //if the cart has this product
        const product = shoppingCart.find((item)=>item.id===choice);//find the item 
        product.quantity += quantity;
    }
    console.log("Your Shopping Cart: ", shoppingCart);
}

function changeQuantity(){
    console.log("Choose an Item to to change its quantity: (Product ID)",shoppingCart);//display the shopping cart.
    const ProductID = parseInt(prompt()); //Ask for the product ID.

    if(shoppingCart.find((item)=>item.id===ProductID)===undefined){//check if this product is in the cart.
        console.log("The desired Item couldn't be found in your Cart!");
    }else{
        console.log("Please enter the new quantity of the product: ");
        const newQuantity = parseInt(prompt());
        const foundProduct = shoppingCart.find((item)=>item.id===ProductID);
        foundProduct.quantity=newQuantity;
        console.log(shoppingCart);
    }
}

function deleteProduct(){
    console.log("Items in your Cart: ",shoppingCart);
    console.log("Enter the ID of the object that you wish to remove: ");
    const productID = parseInt(prompt()); //ask for the ID and convert to Int.

    if(shoppingCart.find((item)=>item.id===productID)===undefined){ //if the product isn't found.
        console.log("Unfortunately, no such item exists in your Shopping Cart! ");
    }else{//if the product is found.
        const foundProductIndex = shoppingCart.indexOf(shoppingCart.find((item)=>item.id===productID));
        shoppingCart.splice(foundProductIndex,1); //removes the element from index and count of delete
        console.log("The item has been successfully deleted.\n Here are the remaining items in your cart: ",shoppingCart);
    }
}

function displayInvoice(){
    const maxPrice = shoppingCart.reduce((acc,curr)=>acc>curr.price?acc:curr.price,0); //returns max price
    //const maxPriceIndex = shoppingCart.indexOf(shoppingCart.find((item) => item.price===maxPrice)); //index of max price item
    const minPrice = shoppingCart.reduce((acc,curr)=>acc>curr.price?curr.price:acc,Infinity); //returns min price
    //const minPriceIndex = shoppingCart.indexOf(shoppingCart.find((item) => item.price===minPrice)); //index of min price item

    const MaxPriceProduct = shoppingCart.find((item)=>item.price===maxPrice);
    
    const MinPriceProduct = shoppingCart.find((item)=>item.price===minPrice);
    
    shoppingCart.forEach((item)=>{
        if(item.price===maxPrice){
            item.highlight="*";
        }else if(item.price===minPrice){
            item.highlight="**";
        }else{
            item.highlight="";
        }
    })


    console.log("Your Cart: ", shoppingCart);//display cart

    const TotalCostID = shoppingCart.map((item)=>item.quantity*item.price);//calculate total cost for each item
    const CartCost = TotalCostID.reduce((acc,curr)=>acc+curr); //total cost of cart
    console.log("Total Cart Cost: ", CartCost);//display cart total cost
}

while(true){
    const option = menu();
    switch(option){
        case "1":
            addProduct();
            break;
        case "2":
            changeQuantity();
            break;
        case "3":
            deleteProduct();
            break;
        case "4":
            displayInvoice()
            break;
        default:
            console.log("Please choose one of the above input values, and try again!");
    }
}