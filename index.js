// dropdown
const dropDown = document.getElementById('dropDown');
const dropDown2 = document.getElementById('dropDown2');
const dropDown3 = document.getElementById('dropDown3');
const dropDownChild = document.getElementById('dropDown-child');
const dropDownChild2 = document.getElementById('dropDown-child2');
const dropDownChild3 = document.getElementById('dropDown-child3');
   

dropDown.addEventListener('click', () => {
    dropDownChild.classList.toggle('hidden');
});
dropDown2.addEventListener('click', () => {
    dropDownChild2.classList.toggle('hidden');
});

dropDown3.addEventListener('click', () => {
    dropDownChild3.classList.toggle('hidden');
});



const menu = document.getElementById('menu');
const cancel = document.getElementById('cancel');
const nav = document.getElementById('navigation');

menu.addEventListener('click', () => {
    nav.classList.contains('-translate-x-[30em]');
    nav.classList.remove('-translate-x-[30em]');
    nav.classList.add('translate-x-0');
    nav.classList.add('fixed, top-0'); 
});

cancel.addEventListener('click', () => {
    nav.classList.remove('translate-x-0');
    nav.classList.add('-translate-x-[30em]');
});

