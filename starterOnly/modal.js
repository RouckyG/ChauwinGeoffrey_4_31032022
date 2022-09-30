function editNav() {
  const x = document.getElementById("myTopnav");
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
const modalSuccess = document.getElementById("modalSuccess");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  form.style.display = "block";
  modalSuccess.style.display = "none";
}

// close modal event
modalCloseBtn.addEventListener("click", closeModal);
modalSuccess.querySelector("input").addEventListener("click", closeModal);

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

form.addEventListener("submit",(e) => {e.preventDefault();})

// DOM of the form
const first = document.querySelector("#first");
const firstError = document.querySelector("#firstError");
const last = document.querySelector("#last");
const lastError = document.querySelector("#lastError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const birthdate = document.querySelector("#birthdate");
const birthdateError = document.querySelector("#birthdateError");
const quantity = document.querySelector("#quantity");
const quantityError = document.querySelector("#quantityError");
const locations = document.querySelectorAll(".checkbox-input[type=radio]");
const locationError = document.querySelector("#locationError");
const termsOfUse = document.querySelector("#checkbox1");
const checkbox1Error = document.querySelector("#checkbox1Error");

// validate the form
function validate() {

  let isValid = true;

  if (first.value.length < 2){
    isValid = false;

    firstError.style.display='block';
    first.style.border = "1px solid red";
  }
  else{
    firstError.style.display='none';
    first.style.border = "none";
  }

  if (last.value.length < 2){
    isValid = false;
    lastError.style.display='block';
    last.style.border = "1px solid red";
  }
  else{
    lastError.style.display='none';
    last.style.border = "none";
  }

  if (!email.value.split("").includes("@")){
    isValid = false;
    emailError.style.display='block';
    email.style.border = "1px solid red";
  }
  else{
    emailError.style.display='none';
    email.style.border = "none";
  }

  if(birthdate.value === ""){
    birthdateError.style.display='block';
    birthdate.style.border = "1px solid red";
    birthdateError.textContent = "Vous devez entrer votre date de naissance.";
  }
  else{
    let date = birthdate.value.split("-");
    let newDate = new Date(parseInt(date[0])+16,date[1]-1,date[2]);

    if (newDate.getTime() > Date.now()){
      isValid = false;
      birthdateError.style.display='block';
      birthdate.style.border = "1px solid red";
      birthdateError.textContent = "Vous devez avoir au moins 16 ans.";
    }
    else{
      birthdateError.style.display='none';
      birthdate.style.border = "none";
    }
  }

  if(parseInt(quantity.value) < 0 || parseInt(quantity.value) > 99 || quantity.value == ""){
    isValid = false;
    quantityError.style.display='block';
    quantity.style.border = "1px solid red";
  }
  else{
    quantityError.style.display='none';
    quantity.style.border = "none";
  }

  let radioValue = 0;

  locations.forEach(location => {
    if(location.checked === true){
      radioValue++;
    }
  })

  if(radioValue != 1){
    isValid = false;
    locationError.style.display='block';
  }
  else{
    locationError.style.display='none';
  }

  if (!termsOfUse.checked){
    isValid = false;
    checkbox1Error.style.display='block';
  }
  else{
    checkbox1Error.style.display='none';
  }

  if(isValid){
    form.style.display = "none";
    modalSuccess.style.display = "block";
  }

  return false;
}