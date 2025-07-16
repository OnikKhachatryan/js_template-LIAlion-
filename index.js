// Toggle Login
let LoginVisible = false;
document.getElementById("ShowLogin").onclick = function () {
    const loginMenu = document.getElementById("LoginMenu");
    const signUpMenu = document.getElementById("SignUpMenu");
    LoginVisible = !LoginVisible;

    if (LoginVisible) {
        loginMenu.style.display = "block";
        signUpMenu.style.display = "none";
    } else {
        loginMenu.style.display = "none";
    }
};

// Toggle SignUp
document.querySelector(".aaa").onclick = function () {
    document.getElementById("LoginMenu").style.display = "none";
    document.getElementById("SignUpMenu").style.display = "block";
};
document.getElementById("BackToLogin").onclick = function () {
    document.getElementById("SignUpMenu").style.display = "none";
    document.getElementById("LoginMenu").style.display = "block";
};

// Hide all sections
function hideAllSections() {
    const ids = ["Homeee", "AboutSection", "ServiceSection", "ContactSection"];
    ids.forEach(id => {
        document.getElementById(id).style.display = "none";
    });
}

// Toggle Sections
document.getElementById("Home").onclick = function () {
    hideAllSections();
    document.getElementById("Homeee").style.display = "block";
};
document.getElementById("About").onclick = function () {
    hideAllSections();
    document.getElementById("AboutSection").style.display = "block";
};
document.getElementById("Service").onclick = function () {
    hideAllSections();
    document.getElementById("ServiceSection").style.display = "block";
};
document.getElementById("Contact").onclick = function () {
    hideAllSections();
    document.getElementById("ContactSection").style.display = "block";
};

// Default to Home
window.onload = function () {
    hideAllSections();
    document.getElementById("Homeee").style.display = "block";
};
