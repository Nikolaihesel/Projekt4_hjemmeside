document.getElementById("open-popup-btn").addEventListener("click",function(){
  document.getElementByClassName("popup")[0].classList.add("active");
});

document.getElementById("dissmiss-popup-btn").addEventListener("click",function(){
  document.getElementByClassName("popup")[0].classList.remove("active");
});

document.getElementById("samarbejde").addEventListener("click",function(){
  alert();
});
