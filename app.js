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

