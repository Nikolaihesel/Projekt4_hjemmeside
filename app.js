let bubbles = document.getElementById('bubbles');

let contactInfo = [];
window.addEventListener('scroll', function(){
    var valueY = window.scrollY;
    var valueX = window.scrollX; 

    bubbles.style.top = valueY * -.5 + 'px';
     
});


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
    
    this.contactInfo = [myName, myLastName, myDate, myEmail]
    
    // get the ul#menu
    const menu = document.getElementById('menu');
    contactInfo.forEach((field)=> {
        // add menu item
        menu.appendChild(createMenuItem(field));
    }
)

    modal.style.display = "block";
};

function createMenuItem(field) {
    let li = document.createElement('li');
    li.classList.add("listItem");
    li.textContent = field;
    return li;
}


function bookTid(){
    document.getElementById('form_open').style.display ="block";
}


function closeModal() {
    document.getElementById('form_open').style.display = "none"
    location.reload();
}



 // stop siden fra a reloade ved submit
 var form = document.getElementById("form");

 function handleForm(event) {
      event.preventDefault(); } 

 form.addEventListener('submit', handleForm);



