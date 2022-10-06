function alwaysTrue () {
    return true;
}



const myPromise = new Promise(resolve => setTimeout(resolve, 5000));

myPromise.then(() => console.log("Hola soy una promesa"));


function* idsPares() {
    let id = 0
    while(true) {
        yield id += 2
    }
}
