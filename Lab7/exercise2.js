Array.prototype.removeDuplicatesAsync = async function(){
   
        let res=  await this.filter((el,index)=> this.indexOf(el)==index);
        console.log(res);  
    }
    
console.log(`start`);
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync(); 
console.log(`end`);