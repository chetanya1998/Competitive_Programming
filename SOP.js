function PrintAllNumbersThenAllPairSum(numbers){
	console.log("These are the numbers:"){
		numbers.forEach(function(number){
			console.log(number);
		});

	consol.log("these are the sum of given above numbers");
	number.forEach(function(firstNumber){
           number.forEach(function(secondNumber){
             console.log(firstNumber+secondNumber);
           });
	});
	}
}
PrintAllNumbersThenAllPairSum([1,2,3,4,5,6])