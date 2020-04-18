let too="yu";
let twee="gi";
let pif="oh";

function factorsCheck(num) {
    var result=[];
    for(let i=0; i<=num; i++){
        if(i%2===0 && i%3===0 && i%5===0){
            result.push(too + "-" +twee + "-" + pif);
        }
        else if(i%2===0 && i%3===0){
            result.push(too + "-" + twee);
        }
        else if(i%3===0 && i%5===0){
            result.push(twee + "-" + pif);
        }
        else if(i%2===0 && i%5===0){
            result.push(too + "-" + pif);
        }
        else if(i%5===0){
            result.push(pif);
        }
        else if(i%3===0){
            result.push(twee);
        }
        else if(i%2===0){
            result.push(too);
        }
        else result.push(i);
    }
    return result;
}

console.log(factorsCheck(100));
console.log(factorsCheck(200));
