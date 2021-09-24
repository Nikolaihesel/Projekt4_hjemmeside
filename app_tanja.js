const popupScreen = document.querySelector(".popup-screen");
const popupBox = document.querySelector(".popup-box");
const closeBtn = document.querySelector(".close-btn");

window.addEventListener("load", () => {
  setTimeout(() => {
    popupScreen.classList.add("active");
  }, 2000); //Popup the screen in 02 seconds after the page is loaded
});

closeBtn.addEventListener("click", () => {
  popupScreen.classList.remove("active"); //Close the popup screen on click the close button

  document.cookie = "WebsiteName=testWensite; max-age=" + 24 * 60 * 60;
});

const WebsiteCookie = document.cookie.indexOf("WebsiteName=");

if(WebsiteCookie != -1){
  popupScreen.style.display = "none"; //Hide the popup screen if the cookie is not expired
}
else{
  popupScreen.style.display = "flex"; //Show the popup screen if the cookie is expired
}
