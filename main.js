function myInput(event) {

    let a = event.key;

    let b = event.which;

    let c = event.code;





    document.getElementById("1").innerHTML = "event.key" + a;

    document.getElementById("2").innerHTML = "event.which" + b;

    document.getElementById("3").innerHTML = "event.code" + c;
}