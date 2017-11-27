'use strict'

class Stopwatch{
	constructor(){
		this.navigation = document.getElementById('navigation');
		window.addEventListener('click',(event) => this.onClick(event));
		this.hours = document.getElementById('hours');
		this.minutes = document.getElementById('minutes');
		this.seconds = document.getElementById('seconds');
		this.timerID;
		this.startStatus = false;
	}

	onClick(event){
		if(event.target.name === 'start' && !this.startStatus){
			this.startStatus = true;
			this.timerID = setInterval(() => {
				this.start();
			},1000);
		}
		if(event.target.name === 'stop'){
			this.stop();
		}
		if(event.target.name ==='restart'){
			this.restart();
		}
	}

	restart(){
		this.stop();
		this.seconds.innerHTML = '00';
		this.minutes.innerHTML = '00';
		this.hours.innerHTML = '00';
	}

	stop(){
		this.startStatus = false;
		clearInterval(this.timerID);
	}

	start(){
		if(+this.seconds.innerHTML === 59 && +this.minutes.innerHTML === 59){
			this.seconds.innerHTML = '00';
			this.minutes.innerHTML = '00';
			+this.hours.innerHTML++;
			if(+this.hours.innerHTML < 10){
				this.hours.innerHTML = '0' + this.hours.innerHTML;
			}
		}else if(+this.seconds.innerHTML === 59){
			+this.minutes.innerHTML++;
			if(+this.minutes.innerHTML < 10){
				this.minutes.innerHTML = '0' + this.minutes.innerHTML;
			}
			this.seconds.innerHTML = '00';
		}else{
			+this.seconds.innerHTML++;
			if(+this.seconds.innerHTML < 10){
				this.seconds.innerHTML = '0' + this.seconds.innerHTML;
			}
		}
	}
}

let stopwatch = new Stopwatch();