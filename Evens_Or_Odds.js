function evensOfOdds(arr){
    var totalOdds = 0;
    var totalEvens = 0;

        for (var i=0; i<arr.length; i++){
            if (arr[i] % 2 ===0){
                totalEvens++;
            }
            else{
                totalOdds++;

            }
            
        }
        if (totalEvens > totalOdds){
            return "Evens are larger";
        }
        else if (totalOdds > totalEvens){
            return "Odds are larger";
        }
        else if (totalOdds == totalEvens){
            return "Tied";
        }
}
var result = evensOfOdds([6,8,3,10,-2,5,9]);
console.log(result)