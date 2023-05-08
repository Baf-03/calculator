let string = "";
let number_of_times_clicked = 0;
let buttons = document.querySelectorAll('.button');//yae sare buttons ko select kr lae ga jin ke class button hoge
let d1 = document.getElementById("display1");
let d2 = document.getElementById("display2");
let new_element = "0.00"
//abb mae iss ke array bana don ga

let array_buttons = Array.from(buttons);
// Array.from is a method in JavaScript
// that creates a new array from an array-like or iterable object.
// The method returns an array that contains all the elements of the input object, in the same order as they appear in the original object.
// Here's an example usage of Array.from:
// const str = "hello";
// const arr = Array.from(str);
// console.log(arr); // Output: ["h", "e", "l", "l", "o"]

let x = function(e) {

  if (e.target.innerHTML == "=") {

    string = eval(string);
    d2.innerHTML = `<div id="display2"><p>${string}</p></div>`;
    new_element = string.toString();
    number_of_times_clicked = new_element.length;
    console.log("it is" + number_of_times_clicked);

    //if user press = button it will get inside this condition

  }

  else if (e.target.innerHTML == "⌫") {
    d1.innerHTML = display1.innerHTML.slice(0, -1);
    string = d1.innerHTML;	//if user press AC button it will get inside this condition

    if (number_of_times_clicked === 12) {
      console.log(number_of_times_clicked)
      number_of_times_clicked--
      d2.innerHTML = `<div id="display2"><p>${new_element}</p></div>`;
    } else if (number_of_times_clicked < 12) {
      console.log(number_of_times_clicked)
      number_of_times_clicked--
    }
  }
  else if (e.target.innerHTML == "AC") {
    d1.innerHTML = "";
    d2.innerHTML = d1.innerHTML;
    string = d1.innerHTML;	//if user press backspace it will get inside this condition
    number_of_times_clicked = 0;
  }
  else {
    //if user press numbers it will get inside this condition
    if (number_of_times_clicked != 12) {
      string += e.target.innerHTML;
      d1.innerHTML = string;
      number_of_times_clicked++
    }
    else {
      d2.innerHTML = `<div id="display2"><p>Max Characters Reached.</p></div>`;
    }
  }

}



for (let i of array_buttons) {
  i.addEventListener('click', x);


}
