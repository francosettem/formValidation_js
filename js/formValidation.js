// Windows load
window.addEventListener("load", () => {

    let form = document.getElementById("form");
    let submit = document.getElementById("submit");
    let namee = document.getElementById("name");
    let surname = document.getElementById("surname");
    let email = document.getElementById("mail");
    let pass = document.getElementById("pass");

    function validateForm() {

        submit.addEventListener("click", function (event) {
            let nameeValor = namee.value.trim();
            let surnameValor = surname.value.trim();
            let emailValor = email.value.trim();
            let passValor = pass.value.trim();
            let validEmail = 0;
            let validPass = 0;

            // Prevent Default
            event.preventDefault()

            // Validaciones
            let fieldsCheck = () => {
                // Función para mostrar al usuario errores
                function validatePrint(input, msj) {
                    const control = input.parentElement;
                    const controlSelector = control.querySelector('p');
                    controlSelector.innerText = msj

                    input.className = "form-control ok";
                }

                function invalidPrint(input, msj) {
                    const control = input.parentElement;
                    const controlSelector = control.querySelector('p');
                    controlSelector.innerText = msj

                    input.className = "form-control reject";
                }

                // remover estilos



                // Validar nombre
                function validateName() {
                    (!nameeValor) ? invalidPrint(namee, "Empty or invalid name") : validatePrint(namee, "Valid name")
                }


                // Validar apellido
                function validateSurname() {
                    (!surnameValor) ? invalidPrint(surname, "Empty or invalid surname") : validatePrint(surname, "Valid surname")
                }

                // Validar email
                function validateEmail() {
                    validEmail = emailValor.match(
                        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    );

                    (!validEmail) ? invalidPrint(email, "Empty or invalid email") : validatePrint(email, "Valid email");
                    return validEmail;

                }



                // Validar pass 
                function validatePass() {
                    validPass = passValor.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W]{8,}$/);

                    (!validPass) ? invalidPrint(pass, "Min. 8 characters, one uppercase, one number, one lowercase") : validatePrint(pass, "Valid password");
                    return validPass;
                }



                validateName()
                validateSurname()
                validateEmail()
                validatePass()


            }

            fieldsCheck();

            if (nameeValor && surnameValor && validEmail && validPass) {

                alert("Now you're registered, welcome!");
                // Saco los estilos
                form.reset();
                let fields = form.getElementsByTagName("input");
                Array.from(fields).forEach((inp) => inp.classList.remove('form-control'));
                 // Saco los textos
                let texts = form.getElementsByTagName("p");
                Array.from(texts).forEach((p) => p.innerText = "");
                
            }
        })




    }

    validateForm();




})
