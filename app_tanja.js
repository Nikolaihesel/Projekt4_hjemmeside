// Preload popupScreen
window.onload = function(){
  var container = document.getElementById('container_load');

  container.style.visibility = 'hidden';
  container.style.opacity = '0';
}

// Popup box
const popupScreen = document.querySelector(".popup-screen");
const popupBox = document.querySelector(".popup-box");
const closeBtn = document.querySelector(".close-btn");

window.addEventListener("load", () => {
  setTimeout(() => {
    popupScreen.classList.add("active");
  }, 3000); //Popup the screen in 03 seconds after the page is loaded

});


function popUpText() {
  let popUpInfo = ["Vidste du, at du kan få hjælp til at klare din hverdag som studerende og undgå unødvendig stress?", 'Book tid til en studievejleder, stresscoach, psykoterapeup eller psykolog - det er helt gratis.']


  const menu = document.getElementById('popup_text');
  popUpInfo.forEach((field)=> {

      menu.appendChild(createPopupItem(field));
  }
)};

function createPopupItem(field) {
    let p = document.createElement('p');
    p.classList.add("paragraph_popup");
    p.textContent = field;
    return p;


}

popUpText();

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
