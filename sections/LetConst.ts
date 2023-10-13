export function overlapping() {

    function foo() {
        let x = 5;
        if (x) {
            let x = 10;
            console.log(x)
            console.log(x)
        }
    }

    foo();

}

export function greaterOrEqual() {
    
    const MAX = 100;
    if(MAX >= 100){
        const MAX = 1000;
        console.log(MAX)
    }
    
    console.log(MAX)
}

export function constExample() {
    //const MAX;
    //console.log(MAX);
}

export function definingVar() {
    {
        let id = 40;
    }
   // console.log(id)
    
}

export function definingLet(){
    
    function foo() {
        console.log(a)
    }
    
    foo();
    
    let a = 10;
    
}
export function varLetDecl(){
    /*
    function foo(){
        var x = 2;
        if(x){
            let x = (x + 3);
            console.log(x)
        }
    }
    
    foo();
    */
}

export function switchCaseLet() {
    /*
    function get(x) {
        switch (true) {
            case x < 10:
                let discount = 5;
                return discount;
            case x >= 10:
                let discount = 20;
                return discount;
        }
    }*/
    
    
}


