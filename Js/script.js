(() => {
  'use strict'
  window.addEventListener('load', () => {
    const user = JSON.parse(localStorage.getItem("login_succes")) || false

    if (!user) {
      window.location.href = "../index.html"
    }

    const logout = document.getElementById("logout")

    logout.addEventListener("click", () => {
      localStorage.removeItem("login_succes")
      window.location.href = "../index.html"
    })
  });

})();
