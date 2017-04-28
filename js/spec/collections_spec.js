// import code to be tested
var collections = require("../index");

describe("A program to demonstrate the concept of collections", () => {

	it("can report if a given month, during a common year, has how many number of days", () => {
		let month = ["January", "February", "March", "April", "May", "June", "July", 
		"August","September", "October", "November", "December"];
		var getDaysInMonth = require("../index");
		expect(collections.getDaysInMonth("January")).toBe(31);
		expect(collections.getDaysInMonth("February")).toBe(28);
		expect(collections.getDaysInMonth("March")).toBe(31);
		expect(collections.getDaysInMonth("April")).toBe(30);
		expect(collections.getDaysInMonth("May")).toBe(31);
		expect(collections.getDaysInMonth("June")).toBe(30);
		expect(collections.getDaysInMonth("July")).toBe(31);
		expect(collections.getDaysInMonth("August")).toBe(31);
		expect(collections.getDaysInMonth("September")).toBe(30);
		expect(collections.getDaysInMonth("October")).toBe(31);
		expect(collections.getDaysInMonth("November")).toBe(30);
		expect(collections.getDaysInMonth("December")).toBe(31);
	}); 
});