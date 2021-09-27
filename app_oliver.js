
// Popup box
const popupScreenOliver = document.querySelector(".popup-screen-oliver");
const popupBoxOliver = document.querySelector(".popup-box-oliver");
const closeBtnOliver = document.querySelector(".close-btn-oliver");

window.addEventListener("load", () => {
  setTimeout(() => {
    popupScreenOliver.classList.add("active");
  }, 69000); //Popup the screen in 69 seconds after the page is loaded

})


function popUpText() {
  let popUpInfoOliver = ["BATMAN", 'HEST']


  const menu = document.getElementById('popup_text-oliver');
  popUpInfoOliver.forEach((field)=> {

      menu.appendChild(createPopupItem(field));
  }
)};

function createPopupItem(field) {
    let p = document.createElement('p');
    p.classList.add("paragraph_popup-oliver");
    p.textContent = field;
    return p;


}

popUpText();

closeBtnOliver.addEventListener("click", () => {
  popupScreenOliver.classList.remove("active"); //Close the popup screen on click the close button

  document.cookie = "WebsiteName=testWensite; max-age=" + 24 * 60 * 60;
});

 const WebsiteCookieOliver = document.cookie.indexOf("WebsiteName=");

 if(WebsiteCookieOliver != -1){
   popupScreenOliver.style.display = "none"; //Hide the popup screen if the cookie is not expired
 }
 else{
   popupScreenOliver.style.display = "flex"; //Show the popup screen if the cookie is expired
 }
