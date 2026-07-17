/*==========================================
            LOGIN SCRIPT
==========================================*/

const form = document.getElementById("loginForm");

form.addEventListener("submit", loginUser);

function loginUser(e) {

    e.preventDefault();

    const email = document.getElementById("email").value.trim();

    const password = document.getElementById("password").value.trim();

    const remember = document.getElementById("remember").checked;

    // Check signup data
    const storedUser = JSON.parse(localStorage.getItem("cineverseUser"));

    if (!storedUser) {

        alert("No account found.\nPlease Sign Up first.");

        window.location.href = "signup.html";

        return;

    }

    if (email === storedUser.email && password === storedUser.password) {

        localStorage.setItem("loggedIn", "true");

        localStorage.setItem("currentUser", storedUser.name);

        if (remember) {

            localStorage.setItem("rememberEmail", email);

        } else {

            localStorage.removeItem("rememberEmail");

        }

        showSuccess();

    } else {

        showError();

    }

}

/*==========================================
            SUCCESS
==========================================*/

function showSuccess() {

    const btn = document.querySelector(".login-btn");

    btn.innerHTML = "✔ Logging In...";

    btn.style.background = "#0f9d58";

    btn.disabled = true;

    setTimeout(() => {

        window.location.href = "profiles.html";

    }, 1500);

}

/*==========================================
            ERROR
==========================================*/

function showError() {

    const btn = document.querySelector(".login-btn");

    btn.innerHTML = "✖ Invalid Login";

    btn.style.background = "#d93025";

    setTimeout(() => {

        btn.innerHTML = "LOGIN";

        btn.style.background = "linear-gradient(45deg,#E50914,#ff4b4b)";

    }, 1800);

}

/*==========================================
        REMEMBER EMAIL
==========================================*/

window.addEventListener("load", () => {

    const remembered = localStorage.getItem("rememberEmail");

    if (remembered) {

        document.getElementById("email").value = remembered;

        document.getElementById("remember").checked = true;

    }

});

/*==========================================
        ENTER KEY
==========================================*/

document.addEventListener("keypress", (e) => {

    if (e.key === "Enter") {

        form.requestSubmit();

    }

});

/*==========================================
        LOGO CLICK
==========================================*/

document.querySelector(".logo").addEventListener("click", () => {

    window.location.href = "index.html";

});