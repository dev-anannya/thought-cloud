
function setFormMessage(formElement, type, message){

    const messageElement = formElement.querySelector(".form_message");

    messageElement.textContent = message;
    messageElement.classList.remove("form_message-success", "form_message-error");
    messageElement.classList.add(`form_message-${type}`);

}

function setInputError(inputElement, message){
    inputElement.classList.add("form_input-error"); 
    inputElement.parentElement.querySelector(".form_input-error-message").textContent = message;
}

function clearInputError(inputElement){
    inputElement.classList.remove("form_input-error");
    inputElement.parentElement.querySelector(".form_input-error-message").textContent = "";

}



document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");


    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form-hidden");
        createAccountForm.classList.remove("form-hidden");  
    });  

    document.querySelector("#linklogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form-hidden");
        createAccountForm.classList.add("form-hidden"); 
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        // Perfrom YOUR  AJAX/Fetch Login

        setFormMessage(loginForm, "error", "Invalid username/password");

    });

    document.querySelectorAll(".form_input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if ( e.target.value.length > 0 && e.target.value.length < 6) {           // add e.target.id == "signupUsername" to the if statement
                setInputError(inputElement, "Username must be atleast 6 characters");

            }      
        
            
        });
        
        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
        
    
    });

    
 
});