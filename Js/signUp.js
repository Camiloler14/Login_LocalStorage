(() => {
    'use strict'
    window.addEventListener('load', () => {
        const formSingUp = document.getElementById("formSingUp");
        const inpustSingUp = document.querySelectorAll("#formSingUp input");

        const info = {
            name: false,
            email: false,
            password: false,
            confpass: false
        }

        const expression = {
            user: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
            name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
            password: /^.{4,12}$/, // 4 a 12 digitos.
            email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            tel: /^\d{7,14}$/ // 7 a 14 numeros.
        }
        const validateForm = (e) => {
            switch (e.target.name) {
                case "name":
                    if (expression.name.test(e.target.value)) {
                        document.getElementById("nameSingUp").classList.remove("red")
                        info["name"] = true
                    } else {
                        document.getElementById("nameSingUp").classList.add("red")
                        info["name"] = false
                    }
                    break;
                case "email":
                    if (expression.email.test(e.target.value)) {
                        document.getElementById("emailSingUp").classList.remove("red")
                        info["email"] = true
                    } else {
                        document.getElementById("emailSingUp").classList.add("red")
                        info["email"] = false
                    }
                    break;
                case "password":
                    if (expression.password.test(e.target.value)) {
                        document.getElementById("passwordSingUp").classList.remove("red")
                        info["password"] = true
                    } else {
                        document.getElementById("passwordSingUp").classList.add("red")
                        info["password"] = false
                    }
                    break;
                case "confpass":
                    validatePassword()
            }
        }

        inpustSingUp.forEach((input) => {
            input.addEventListener("keyup", validateForm)
            input.addEventListener("blur", validateForm)
        });



        const validatePassword = () => {
            const password = document.getElementById("passwordSingUp");
            const confpassword = document.getElementById("confpassSingUp");

            if (password.value !== confpassword.value) {
                document.getElementById("confpassSingUp").classList.add("red")
                info["confpass"] = false
            } else {
                document.getElementById("confpassSingUp").classList.remove("red")
                info["confpass"] = true
            }
        }



        formSingUp.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("nameSingUp").value
            const email = document.getElementById("emailSingUp").value
            const password = document.getElementById("passwordSingUp").value
            const confpassword = document.getElementById("confpassSingUp").value

            const users = JSON.parse(localStorage.getItem("users")) || [];
            const isUserRegistered = users.find(user => user.email === email)

            if (name.length == 0 || email.length == 0 || password.length == 0 || confpassword == 0) {
                return alert("complete all fields")
            }

            if (isUserRegistered) {
                return alert("user already exists")
            }

            if (password !== confpassword) {
                return alert("Passwords do not match")
            } else {
                users.push({ name: name, email: email, password: password })
                localStorage.setItem("users", JSON.stringify(users))
                alert("Successful registration")
            }
            formSingUp.reset();

        });

    });

})();
