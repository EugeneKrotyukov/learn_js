"use strict";

let menuElem = document.getElementById('menu');
let titleElem = menuElem.querySelector('.title');

titleElem.onclick = function() {
  menuElem.classList.toggle('open');
};

