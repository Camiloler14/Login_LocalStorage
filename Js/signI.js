(() => {
  'use strict'
  window.addEventListener('load', () => {
    const container = document.getElementById("container");
    const registerBtn = document.getElementById("register");
    const loginBtn = document.getElementById("login");

    registerBtn.addEventListener("click", () => {
      container.classList.add("active");
    });

    loginBtn.addEventListener("click", () => {
      container.classList.remove("active");
    });



    const formSingIn = document.getElementById("formSingIn");


    formSingIn.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.getElementById("emailSingIn").value
      const password = document.getElementById("passwordSingIn").value

      const users = JSON.parse(localStorage.getItem("users")) || []
      const validate = users.find(user => user.email === email && user.password === password)

      if (email.length == 0 || password.length == 0) {
        return alert("complete all fields")
      }
      if (!validate) {
        return alert("incorrect username and/or password")
      }
      localStorage.setItem("login_succes", JSON.stringify(validate))
      window.location.href = "../pages/dashBoard.html"
    })

  });

})();
