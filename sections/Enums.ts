export function Enums() {

    enum AGE { CHILD, TEENAGER, ADULT };
    let age: string = AGE[2];
    console.log('age=', age);

}