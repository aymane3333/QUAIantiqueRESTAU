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
    const passwordOK = validatePassword(inputPassword);
    const passwordComfirmOK = validateConfirmationPassword(inputPassword, inputValidationPassword);
    
    if(nomOK && prenomOK && mailOK && passwordOK && passwordComfirmOK){
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

function validatePassword(input){
    //Définir mon regex
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    const passwordUser = input.value;
    if(passwordUser.match(passwordRegex)){
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

function validateConfirmationPassword(inputPwd, inputConfirmPwd){
    if(inputPwd.value == inputConfirmPwd.value){
        inputConfirmPwd.classList.add("is-valid");
        inputConfirmPwd.classList.remove("is-invalid");
        return true;
    }
    else{
        inputConfirmPwd.classList.add("is-invalid");
        inputConfirmPwd.classList.remove("is-valid");
        return false;
    }
}