const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');
let load = 0;
let op = 100;
let blur = 20;
 
function blurring() {
    load++;
    op--;
    blur -= 0.2;
    loadText.textContent = `${load}%`;
    loadText.style.opacity = op / 100;
    bg.style.filter = `blur(${blur}px)`;
    if (load > 99) clearInterval(interval);
}
 
let interval = setInterval(blurring, 30);

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers 
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
