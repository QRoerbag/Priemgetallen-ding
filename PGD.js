	
	var x = 1;
	var y = 1;
	var z = 1;

	function Priem() {

		z = y / x + 1;

		if (z === parseInt(z, 10)) {
    		y = y + 1;
    		x = 1;
    		console.log("Geen Priem");

		} else if (z !== parseInt(z, 10)) {
			x = x + 1;
			console.log("Mogelijke Priem!");
		}
		
	}