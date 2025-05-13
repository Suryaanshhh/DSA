function printNumber(n){
    for(let i =1; i<=n ; i++){
        console.log(i)
    }
}
printNumber(10)

function oddNumbers(n){
    for(let i =1; i<=n; i++){
        if(i%2!=0){
            console.log(i)
        }
    }
}
 oddNumbers(10)

function sumOfNumbers(n){
 let sum=0
 for(let i =0; i<=n; i++){
    sum = sum+i;
 }
   console.log(sum)
}
sumOfNumbers(5)

function fibonacci(n){
    let n1 = 0;
    let n2 = 1;
    let sum;
    if(n == 1){
        return 0
    }else if(n == 2){
        return 1
    }else{
        for(let i=3; i<=n; i++){
            sum = n1 + n2;
            n1 = n2;
            n2 = sum;
        }
        return n2
    }
}
console.log(fibonacci(6))