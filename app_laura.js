function toggleModal() {
  let popup1 = document.getElementById('containerLaura')

  //toggle modal
  if (popup1.style.display == "block") {
    popup1.style.display = "none"
  }
  else {
      popup1.style.display = "block"
  }
 //array
  let samarbejdeInfo = ['hej','hej']
  // loop

  const menu = document.getElementById('txtInfoSam');
  samarbejdeInfo.forEach((field)=> {

      menu.appendChild(createMenuItem(field));
  }
)
};

function createMenuItem(field) {
  let p = document.createElement('p');
  p.classList.add("listItem_confirm");
  p.textContent = field;
  return p;
};

function refreshClose() {
  toggleModal()
  location.reload();
};

  let four = 2 +2;


console.log(four);
