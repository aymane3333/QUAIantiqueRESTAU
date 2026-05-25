// 1. Les boutons et inputs (Ton HTML est nickel ici !)
const inputNom = document.getElementById("NomInput");
const inputPrenom = document.getElementById("PrenomInput"); // n minuscule
const inputMail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const inputValidationPassword = document.getElementById("ValidatePasswordInput");
const btnvalidation = document.getElementById("btn-validation-inscription");

// 2. Les écouteurs de touches
inputNom.addEventListener("keyup", validateForm); 
inputPrenom.addEventListener("keyup", validateForm); // CORRIGÉ : n minuscule
inputMail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputValidationPassword.addEventListener("keyup", validateForm);

// 3. Validation globale du formulaire
function validateForm(){
    const nomOK = validateRequired(inputNom);
    const prenomOK = validateRequired(inputPrenom); // CORRIGÉ : n minuscule
    const mailOK = validateMail(inputMail);
    
    if(nomOK && prenomOK && mailOK){
        btnvalidation.disabled = false;
    }
    else{
        btnvalidation.disabled = true;
    } 
}

// 4. Validation de l'Email
function validateMail(input){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value;
    if(mailUser.match(emailRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid"); 
        return true;
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

// 5. Validation des champs obligatoires
function validateRequired(input){
    if(input.value != ''){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true; 
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}