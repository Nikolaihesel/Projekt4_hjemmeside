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
  let samarbejdeInfo = ['Samarbejde med os virker i virkeligheden','Vi er den tætte kobling til arbejdsmarkedet og dermed til virkeligheden. Vores forskning er anvendelsesorienteret, undervisningen er fokuseret om faktiske udfordringer og samtlige faglige områder drives i nært samarbejde med aftagere, samarbejdspartnere og måske dig?']
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
