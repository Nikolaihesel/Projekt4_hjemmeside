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
})
