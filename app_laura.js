dokument.getElementById("open-popup-btn").addEventListener("click",function(){
  dokument.getElementByClassName("popup")[0].classList.add("active");
});

dokument.getElementById("dissmiss-popup-btn").addEventListener("click",function(){
  dokument.getElementByClassName("popup")[0].classList.remove("active");
});

dokument.getElementById("samarbejde").addEventListener("click",function(){
  alert();
});
