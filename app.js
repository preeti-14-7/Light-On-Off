const textOn = () => document.getElementById('head').innerText = "Can you turn it Off ?";
const textOff = () => document.getElementById('head').innerText = "Can you turn  On the light ?";

const btnOn = document.getElementById('turnOn');

const btnOff = document.getElementById('turnOff');

btnOn.addEventListener('click',textOn);
btnOff.addEventListener('click',textOff);