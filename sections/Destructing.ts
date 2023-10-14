export function arrSkipping() {

    let arr = [40, 60, 80];
    let [low, , high] = arr;
    console.log(high);

}


export function objDestruct1() {

    let obj = {a: 1, b: 2};
    let {a: x} = obj;
    console.log(a); //fix console.log(x)

}


export function objDestruct2() {

    let obj = {a: 2, b: 4};
    let x, y;
    ({a: x, b: y} = obj);
    console.log(y);
}
