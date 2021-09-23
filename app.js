let bubbles = document.getElementById('bubbles');


window.addEventListener('scroll', function(){
    var valueY = window.scrollY;
    var valueX = window.scrollX; 

    bubbles.style.top = valueY * -.5 + 'px';
     
});

let menu = document.getElementById('resMenu');

function showMenu() {
    let menu = document.getElementById('resMenu');
    if (menu.style.display == "block") {
        menu.style.display = "none"
    }
    else {
        menu.style.display = "block"
    }
};

let modal = document.getElementById('bg_blur_confirm');
let close = document.getElementById('close');


function showInfo() {
    let myName = document.getElementById("fname").value;
    let myLastName = document.getElementById("lname").value;
    let myDate = document.getElementById("dateInfo").value;
    let myEmail = document.getElementById("emailInfo").value;
    
    let contactInfo = [myName, myLastName, myDate, myEmail]

    document.getElementById("display_fname").innerHTML = contactInfo[0];
    document.getElementById("display_lname").innerHTML = contactInfo[1];
    document.getElementById("display_date").innerHTML = contactInfo[2];
    document.getElementById("display_email").innerHTML = contactInfo[3];

    

    modal.style.display = "block";
}

console.log(showInfo())

 // stop siden fra a reloade ved submit
 var form = document.getElementById("form");

 function handleForm(event) {
      event.preventDefault(); } 

 form.addEventListener('submit', handleForm);


 function bookTid(){
     document.getElementById('form_open').style.display ="block";
 }

