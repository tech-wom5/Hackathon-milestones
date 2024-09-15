var toogleButton = document.getElementById('toggle-skill');
var skills = document.getElementById('skill');
toogleButton.addEventListener('click', function () {
    if (skills.style.display === "none") {
        skills.style.display = "block";
    }
    else {
        skills.style.display = "none";
    }
});
