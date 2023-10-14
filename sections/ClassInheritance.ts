export function ParentCtor() {

    class Parent {
        constructor(name: any, second: number) {
            console.log(name);
        }
    }

    class Child extends Parent {

    }

   // var a = new Child();

}

export function baseClassNoCtor() {
    /*
    class Parent {
        
    }
    
    class Child extends Parent{
        constructor() {
            console.log("created");
        }
    }
    */

}

export function methodInheritance() {

    class Parent {
        get() {
            return 10;
        }
    }
    
    class Child extends Parent{
        get() {
            return super.get();
        }
    }

}

export function propSuperCall() {
    
    class Parent {
        constructor() {
            (<any>this).name = 'component';
        }
    }
    
    class Child extends Parent{
        
        constructor() {
            super();
            (<any>this).name = "child " + (<any>this).name;
        }
        
    }
    
    var child = new Child();
    console.log((<any>child).name)
    
}