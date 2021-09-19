let bubbles = document.getElementById('bubbles');

window.addEventListener('scroll', function(){
    var valueY = window.scrollY;
    var valueX = window.scrollX; 

    bubbles.style.top = valueY * -.5 + 'px';
     
});