let milisecond = 0;
let second = 0;
let minut = 0;
let hour = 0;

let displayMilisecond = 0;
let displaySecond = 0;
let displayMinut = 0;
let displayHour = 0;

let interval = null;
let status = 'stop';
let i = 1;

const stopWatch = () => {
	milisecond++;
	if (milisecond / 60 === 1) {
		milisecond = 0;
		second++;
		if (second / 60 === 1) {
			second = 0;
			minut++
			if (minut / 60 === 1) {
				minut = 0;
				hour++;
			};
		};
	};

	if (milisecond <= 9) {
		displayMilisecond = "0" + milisecond.toString();
	} else {
		displayMilisecond = milisecond;
	};

	if (second <= 9) {
		displaySecond = "0" + second.toString();
	} else {
		displaySecond = second;
	};

	if (minut <= 9 ){
		displayMinut = "0" + minut.toString();
	} else {
		displayMinut = minut;
	};
	
	if (hour <= 9 ){
		displayHour = "0" + hour.toString();
	} else {
		displayHour = hour;
	};
	document.getElementById('display').innerHTML = displayHour + ':' + displayMinut + ':' + displaySecond + ':' + displayMilisecond;
};
const start = () =>{
	if (status === "stop"){
		interval = window.setInterval(stopWatch, 10);
		document.getElementById('start').innerHTML = "Stop";
		status = 'start';
	} else{
		window.clearInterval(interval)
		document.getElementById('start').innerHTML = "Start";
		status = 'stop';
	};
};
const reset = () => {
	window.clearInterval(interval);
	milisecond = 0;
	second = 0;
	minut = 0;
	hour = 0;
	document.getElementById('display').innerHTML = "00:00:00:00";
	document.getElementById('start').innerHTML = "Start";
	status = 'stop';
	document.getElementById('forLap').innerText = '';
	i = 1;
	document.querySelectorAll('.newLap').forEach(e => e.remove());
	displayMilisecond = 0;
	displaySecond = 0;
	displayMinut = 0;
	displayHour = 0;
};
let newLap = startLap = null;
const lap = () => {
	if (milisecond <= 9) {
		displayMilisecond = "0" + milisecond.toString();
	} else {
		displayMilisecond = milisecond;
	};

	if (second <= 9) {
		displaySecond = "0" + second.toString();
	} else {
		displaySecond = second;
	};

	if (minut <= 9 ){
		displayMinut = "0" + minut.toString();
	} else {
		displayMinut = minut;
	};
	
	if (hour <= 9 ){
		displayHour = "0" + hour.toString();
	} else {
		displayHour = hour;
	};
	let newLap = document.createElement('p');
	if (i === 1)
	{
		newLap.innerHTML = "<p class = 'newLap first'>" + i + ' lap ' + displayHour + ':' + displayMinut + ':' + displaySecond + ':' + displayMilisecond + "</p>";
		startLap = document.getElementById('forLap');
		document.body.insertBefore(newLap, startLap);
	} else {
		newLap.innerHTML = "<p class = 'newLap'>" + i + ' lap ' + displayHour + ':' + displayMinut + ':' + displaySecond + ':' + displayMilisecond + "</p>";
		startLap = document.getElementById('forLap');
		document.body.insertBefore(newLap, startLap);
	}
	
	i++;
};