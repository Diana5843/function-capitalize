const a1 = function(){
    console.log(arguments);

}

const a2 = () => {
    console.log(arguments);
}

function sumArgs () {
    let res = null;
    for (let i = 0; i < arguments.length; i++){
        res += arguments[i];

    }
    return res;
}

//rest большое количество елементов собирает в массив применяется в функуиях и все!
const sumArrow = (...rest) => {
    return rest.reduce((accumulator, currentValue) =>{
    return accumulator + currentValue;

    });
}

// spread используется в массивах, в объектах, и прочем 
const l1 = [12, 34, 56, 78,10];
const l2 = [33, 44, 55, 66, 77];

const l3 = [...l1, ...l2];


factorial = (n) => {
    // return n <= 0 ? 1 : n * factorial(n - 1); //recursion
    if(n<=0){
        return 1;
    }
    return n * factorial(n - 1);
}

