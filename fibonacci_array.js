function fibonacciArray(n){
    var fibArr = [0, 1];
    for(var i=0; i<n-2; i++){
       fibArr.push((fibArr[i] + fibArr[fibArr.length-1]));

        }
        return fibArr;
    }

var result = fibonacciArray(10);
console.log(result);
