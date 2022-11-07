
const mimoize =(fn) => {
  const cache ={}
 return function(...args){
   if(cache[args])
    return cache[args];
   
   let results= fn(...args);
   cache[args]=results;

   return results;
}
}
function fibonacci(n) {
    if (n <= 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}



console.log("..........")
console.time()
console.log(fibonacci(5));
console.timeEnd()


const fastFunc= mimoize(fibonacci);
console.time()
console.log("fast",fastFunc(5));
console.timeEnd();
