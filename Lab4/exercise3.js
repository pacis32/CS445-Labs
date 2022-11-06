class Info{
    logging(msg){
        console.log(msg);
    }
}

class Warn{
    logging(msg){
        console.log(msg);
    }
}

class Error{
    logging(msg){
        console.log(msg)
    }
    
}

class Table {
    logging(msg){
        console.log(msg);
    }
}

class Strategy{
    
 setStrategy(loggingMethod){
    
    this.loggingMethod= loggingMethod;
    }

    logging(msg){
        this.loggingMethod.logging(msg);
    }
    }


    const strategy = new Strategy();

strategy.setStrategy(new Info());
strategy.logging('info....');

strategy.setStrategy(new Warn());
strategy.logging('warn....');

strategy.setStrategy(new Error());
strategy.logging('error....');

strategy.setStrategy(new Table());
strategy.logging(['table', 'table']);