"use strict";
const toggleButtton = document.getElementById("toggle-skills");
const skills = document.getElementById("skills");
toggleButtton.addEventListener("click", () => {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});
