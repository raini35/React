var GuestList = require('./guestList.js');
require('./style.css');


module.exports  = function () {
	var ul = document.createElement('ul'); 
	GuestList.map(function(guest) {
	//	var email = document.createTextNode(guest.email); 
	//	var number = document.createTextNode(guest.phone); 
		var name = document.createTextNode(guest.name); 
		var li = document.createElement('li');  
		li.appendChild(name); 
	//	li.appendChild(number); 
	//	li.appendChild(email); 
		ul.appendChild(li); 
	}); 
	document.getElementById('list').appendChild(ul); 
}; 
