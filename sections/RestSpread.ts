export function funLength() {

    function show(id: any, ...items: any) {
        console.log(show.length);
    }

    show(123, "a", "b", "c")

}


export function missingArgument() {


    function show(id: any, ...items: any) {
        console.log(items);
    }

    show(123)

}

export function argumentsNumber() {
    function show(id: any, ...items: any) {
        console.log(arguments.length)
    }

    show(123,"a","b","c")
    
}



