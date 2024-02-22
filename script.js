var dateDiffInDays = function (date1, date2) {
  //SGN   write your code here
	var utc1 = Date.UTC(
		parseInt(dateOne.substring(0,4)),
		parseInt(dateOne.substring(5,7)-1),
		parseInt(dateOne.substring(8))
	);

	var utc2 = Date.UTC(
		parseInt(dateTwo.substring(0,4)),
		parseInt(dateTwo.substring(5,7)-1),
		parseInt(dateTwo.substring(8))
	);
	const miliSecPerDay = 24*60*60*1000;
	const diffDays = Math.floor(utc2 - utc1)/miliSecPerDay;
	return diffDays;
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
