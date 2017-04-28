// define functions
var month = ["January", "February", "March", "April", "May", "June", "July", 
			"August","September", "October", "November", "December"];
 var getDaysInMonth = function(month) {
	if ( month == "January" || month == "March" || month == "May" || month == "July" || month == "August" || month == "October" || month =="December") {
		return 31;
	} 
	else if (month == "April" || month == "June" || month == "September" || month == "November") {
		return 30;
	} 
	else {
		return 28;
	}
};

module.exports = {
	getDaysInMonth: getDaysInMonth
};
