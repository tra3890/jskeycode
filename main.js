
// create a function (myInput)

function myInput(event) {

    //  create variables for the 3 outputs.

    // event.key  is for any key pressed on the keyboard kept simple with a single letter (a)

    let a = event.key;    

    // event.which contains the JS key code for any key pressed

    let b = event.which;

    let c = event.code;





    document.getElementById("1").innerHTML = "event.key" + a;

    document.getElementById("2").innerHTML = "event.which" + b;

    document.getElementById("3").innerHTML = "event.code" + c;
}