
/**
 * upsertItem(item) add an item to basket if doesn't exist, or update if exist.
getItemsCount() returns the total number of items in the basket.
getTotalPrice() calculates the total price of items. Each item price is the product's price multiply item's count.
removeItemById(id) removes an item from the basket. Every product item has the following structure:

 */
//before ES6
let shoppingCart = (function(){
    //private variables or functions
  let   basket =[];
  
  return {
   
   //declare public variables /functions

       upsertItem:function(i) { 
        if(basket.includes(i)){
          i.id=i;
        }
        else
        basket.push(i)
    },
        
    
      getItemsCount : function() {
      
          return basket.length;
        },
    
        getTotalPrice:function(){
          return basket.reduce((sum,curr) => sum+curr.product.price*curr.count,0);
        },
    
        removeItemById:function(id){
             basket=basket.filter(item=> item.id!==id)
           
        }

    }
    
})()
const item1 = { id: 0, product: { id: 1, name: 'Coffee', description: 'Coffee Grounds from Ethiopia', price: 9 }, count: 1 }
const item2 = { id: 1, product: { id: 2, name: 'Tea', description: 'Oonlong Tea from China', price: 10 }, count: 5 }
const item3 = { id: 2, product: { id: 3, name: 'Bottled Water', description: 'Bottled Water from US', price: 2 }, count: 30 }

shoppingCart.upsertItem(item1);
shoppingCart.upsertItem(item2);
shoppingCart.upsertItem(item3);
console.log(shoppingCart.getTotalPrice()); //Expected Result: 119
item3.product.name = 'Himilayan Water';
item3.product.price = 10;
shoppingCart.upsertItem(item3);

console.log(shoppingCart.getItemsCount()); //Expected Result: 3
console.log(shoppingCart.getTotalPrice()); //Expected Result: 359
shoppingCart.removeItemById(1);
console.log(shoppingCart.getItemsCount()); //Expected Result: 2
console.log(shoppingCart.getTotalPrice()); //Expected Result: 309




