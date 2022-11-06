
class Lbulbs{
 constructor(color){
    this.range=[50,100];
    this.age=10;
    this.color=color
 }
}

class Rbulds{
constructor(){
    this.range=[5,40];
    this.age=1;
}
}

class Factory{
    createBulb(type,color){
        if(type=='regular'){
            return new Rbulds();
        }
            return new Lbulbs(color);
}
}



const factory = new Factory();
const bulbs = [];

bulbs.push(factory.createBulb("regular"));
bulbs.push(factory.createBulb("energy", "red"));


for (let i = 0, len = bulbs.length; i < len; i++) {
    console.log(bulbs[i]);
}