let string ="";
let number_of_times_clicked =0;
let buttons = document.querySelectorAll('.button');//yae sare buttons ko select kr lae ga jin ke class button hoge
let d1=document.getElementById("display1");
let d2=document.getElementById("display2");
let d2P = display2.querySelector("p");

let new_element ="0.00"


let array_buttons=Array.from(buttons);

let x=function(e){
	
	if(e.target.textContent=="="){
		
		string=eval(string);
		d2P.textContent = string
		new_element = string.toString();
		number_of_times_clicked=new_element.length;
		console.log("it is"+number_of_times_clicked);


	}

	else if(e.target.textContent=="⌫"){
		d1.textContent = display1.textContent.slice(0, -1);
		string=d1.textContent;	//if user press AC button it will get inside this condition

		if(number_of_times_clicked===12){
			console.log(number_of_times_clicked)
			number_of_times_clicked--
			d2P.textContent = new_element;
		} 
		else if(number_of_times_clicked<12){
			console.log(number_of_times_clicked)
			number_of_times_clicked--
		}
	}	

	else if(e.target.textContent=="AC"){
		d1.textContent = "0";
		d2P.textContent = d1.textContent;
		string=d1.textContent;	//if user press backspace it will get inside this condition
		number_of_times_clicked=0;
	}
	else{
			if(number_of_times_clicked!=12){
				string+=e.target.textContent;
				d1.textContent = string;
				number_of_times_clicked++
			}
			else{

				d2P.textContent = "Max Characters Reached.";
			}
		}

}



for(let i of array_buttons){
	i.addEventListener('click',x);
	

}
