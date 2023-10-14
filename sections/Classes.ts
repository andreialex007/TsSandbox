function classExpression() {
    
    let Vehicle = class Car {
        constructor() {
            console.log("created");
        }
    }
    
    var car = new Vehicle();
    
}

function prototypeGet() {
    
    class Person {
        get(){
            
        }
    }
    
    var person = new Person();
    console.log(person.get === Person.prototype.get);
    
}


export function classTypeOf() {
    
    class Person {
        
    }

    let message = typeof Person;
    console.log(message);
    
}

export function classScope() {
    
    class Task {
        
    }
    
    console.log((<any>global).Task === Task);
    
}
export function classInstanceTypeOf() {
    
    class Person {
        
    }
    
    var person = new Person();
    console.log(typeof person)
    
}
export function staticMethod() {
    
    class Task {
        static get(){
            return 10;
        }
    }
    
    var task = new Task();
   // console.log(task.get())
    
}

export function classDeclOrder() {
    
    /*
    var car = new Car();
    class Car {
        constructor() {
        }
    } */
    
}

export function staticAndInstance() {
    
    class Person {
        get(){}    
    }
    
    var person = new Person();
    console.log(person.get === (<any>Person).get);
    
    
}
























