var begin = confirm("НАСТАРТ - ВНИМАНИЕ - МАРШ");

if (begin == true) {
	 var start = new Date();
	var stop = confirm("Остановить?");
		if (stop == true) {
			var stopTime = new Date();
		}
	}

	alert ("Прошло  " + (stopTime - start) / 1000 + "  секунд");

