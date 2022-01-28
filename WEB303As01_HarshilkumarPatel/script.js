/*
	WEB 303 Assignment 1 - jQuery
	Harshilkumar Dharmendrakumar Patel
*/
$(document).ready(function() {
	$("input").change(function(){
			let salary = $('#yearly-salary').val();
			let percent = $('#percent').val();
			let spend = salary * percent/100;
			$('#amount').empty();
			$('#amount').append('$' + spend.toFixed(2));
	})
});
