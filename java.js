function firstfun(arr){
    let result = [];
    for(let i=0; i < arr.length;i++){
        result.push(Math.pow(2,arr[i]));

    }
    return result;
}
console.log(firstfun([6,6,6]));

function firstfun(arr){
    let result = [];
    arr.forEach(element=> {
        result.push(Math.pow(2,element));
        
    });
    return result;
}
console.log(firstfun([4,5,6]));
function firstfun(arr){
    return arr.map(element => {
        return Math.pow(2,element);


    });
    
}
console.log(firstfun([5,8,9]));
    // Q2)_____________________________________________________________________
function fun2(arr){
    return arr.map(element => {
        if (typeof element !== 'number'){
            return "N/A";
        }
        return element % 2 === 0 ? 'Even' : 'Add';
       
    });
    
}

console.log(fun2([3,4,2,4,"ddddd","awad"]));
// q3)___________________________________________________
let names = ["Rawan","Wesam", "Hind", "Muhammad", "Esraa", "Dareen"];
names.forEach(function(name){
    console.log(name);
});
// q4)_______________________________________
function fizzbuzz(numbers){
    let output = [];
     numbers.forEach(number => 

      {
        if(number % 3 === 0 && number % 5 ===0){
            output.push("Fizz Buzz");
        }
        else if (number % 5 === 0){
            output.push("Buzz");
        }
        else if(number % 3 === 0 ){
            output.push("Fizz ");
        }
        else{
            output.push(number);
        }
    });
    return output;
}
console.log(fizzbuzz([6,10,15,30]));

