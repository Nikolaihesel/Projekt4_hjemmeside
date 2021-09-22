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
    };
};

let modal = document.getElementById('bg_blur_confirm');
let close = document.getElementById('close');
let contactInfo = []
function showInfo() {
    let myName = document.getElementById("fname").value;
    document.getElementById("display_fname").innerHTML = myName;
    let myLastName = document.getElementById("lname").value;
    document.getElementById("display_lname").innerHTML = myLastName;
    let myDate = document.getElementById("dateInfo").value;
    document.getElementById("display_date").innerHTML = myDate;
    let myEmail = document.getElementById("emailInfo").value;
    document.getElementById("display_email").innerHTML = myEmail;
    modal.style.display = "block";
}

 // stop siden fra a reloade ved submit
 var form = document.getElementById("form");

 function handleForm(event) {
      event.preventDefault(); } 

 form.addEventListener('submit', handleForm);


