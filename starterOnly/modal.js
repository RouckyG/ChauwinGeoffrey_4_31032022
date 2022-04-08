function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalCloseBtn = document.querySelector(".close");
const formData = document.querySelectorAll(".formData");
const form = document.querySelector("form");
const modalMessage = document.getElementById("modalMessage");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
modalCloseBtn.addEventListener("click", closeModal);

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

form.addEventListener("submit",(e) => {e.preventDefault();})

// DOM of the form
const first = document.querySelector("#first");
const last = document.querySelector("#last");
const email = document.querySelector("#email");
const birthdate = document.querySelector("#birthdate");
const quantity = document.querySelector("#quantity");
let locations = document.querySelectorAll(".checkbox-input[type=radio]");
const termsOfUse = document.querySelector("#checkbox1");

// validate the form
function validate() {

  console.log("validate");
  let isValid = true;
  let message = "Votre inscription vient d'être enregistrer";

  if (first.value.length <= 2){
    isValid = false;
    console.log(first.value);
    message = "Votre prénom doit contenir au moins 2 lettres";
  }

  if (last.value.length <= 2){
    isValid = false;
    console.log(last.value);
    message = "Votre nom doit contenir au moins 2 lettres";
  }

  if (!email.value.split("").includes("@")){
    isValid = false;
    console.log(email.value);
    message = "Votre email doit être valide";
  }

  let date = birthdate.value.split("-");
  let newDate = new Date(parseInt(date[0])+18,date[1]-1,date[2]);

  if (newDate.getTime() > Date.now()){
    isValid = false;
    console.log(birthdate.value);
    console.log(Date.now());
    message = "Vous devez être majeur";
  }

  if (quantity.value <0 && quantity.value > 99){
    isValid = false;
    console.log(quantity.value);
    message = "Veuillez selectionner un nombre entre 0 et 99";
  }

  let radioValue = 0;

  locations.forEach(location => {
    if(location.checked == true){
      radioValue++;
    }
  })

  if(radioValue != 1){
    isValid = false;
    console.log(locations);
    message = "Veuillez selectionner un lieu";
  }
  
  if (!termsOfUse.checked){
    isValid = false;
    console.log(termsOfUse);
    message = "Les conditions d\'utilisation doivent être accepter";
  }

  if(isValid){
    console.log(message);
    modalMessage.innerHTML = message;
  }
  else {
    console.log(message);
    modalMessage.innerHTML = message;
  }

  return false;
}