

let input  = document.querySelector("input");
let span = document.getElementById("text");
let btn = document.querySelector("button");



function Validation(){

    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!input.value.match(pattern))
    {
        span.textContent = "Please provide a valid email address ";
        input.style.border = " 1px solid red";
        span.style.color = "red";
        // btn.disabled = false;
    }
    else
    {
        span.textContent = "Valid email";
        input.style.border = " 1px solid green";
        span.style.color = "green";
        console.log("true password");
        btn.disabled = false;
    }
}



