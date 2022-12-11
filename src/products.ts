interface Product{
    price:number, 
    name:string,
}

//implement
let products:Product[] = [
    {name: "Motor", price: 10},
    {name: "sensor", price: 12.50},
    {name: "LED", price: 1.00},
];

function calcAverageProductPrice(products: Product[]): number {
    if (products.length === 0) {
      return 0;
    } else {
      let totalPrice = 0;
      for (let product of products) {
        totalPrice += product.price;
      }
      return totalPrice / products.length;
    }
  }
  console.log(calcAverageProductPrice(products).toFixed(2))

export {Product, calcAverageProductPrice }