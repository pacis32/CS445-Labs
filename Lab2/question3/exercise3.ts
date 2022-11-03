class Car {
    constructor(public name:string,public acceleration:number=0) {
        
    }
    honk() {
        console.log(` ${this.name} is saying: Toooooooooot!`);
    }
    accelerate(speed:number) {
        this.acceleration = this.acceleration + speed;
    }
}

let car = new Car("BMW");
car.honk(); // BMW is saying: Toooooooooot!
console.log(car.acceleration); // 0
car.accelerate(60);
console.log(car.acceleration); // 60