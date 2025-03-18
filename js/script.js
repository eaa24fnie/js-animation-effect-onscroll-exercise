"use strict";

let sections = document.querySelectorAll("section");

window.onscroll = () => {
    sections.forEach(sec => {
        let scrollDistance = window.scrollY
        let secDistance = sec.offsetTop;
        
        if (scrollDistance >= secDistance) {
            sec.classList.add("show-animate");
        } else {
            sec.classList.remove("show-animate");
        }
    });
};