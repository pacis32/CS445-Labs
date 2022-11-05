
class Subject{
    constructor(){
        this.subscribers={};

    }

    on(event,fn){
        if (this.subscribers[event]){
        this.subscribers[event].push(fn);
        }
        else{
        this.subscribers[event]=[fn];
        }
    }

   emit(event,message){
         if(this.subscribers) {
    this.subscribers[event].forEach(fn => fn(message));

  }
        
    }
}



const subject = new Subject();
subject.on('eat', console.log); // register an observer
subject.on('study', console.log); // register an observer

function foo(msg) {
    console.log('foo: ' + msg);
}
subject.on('eat', foo);
subject.on('study', foo);

subject.emit('eat', 'Corn');
//output for Line above: subject.emit('eat', 'Corn');
// Corn
// foo: Corn
subject.emit('study', 'cs445');
//output for Line above: subject.emit('study', 'cs445');
// cs445
// foo: cs445

