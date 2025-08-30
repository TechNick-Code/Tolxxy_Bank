// dropdown
const dropdown = document.getElementById('dropdown');
const dropdownChild = document.getElementById('dropdown-child');

dropdown.addEventListener('click', () => {
    dropdownChild.classList.toggle('hidden');
});

const menu = document.getElementById('menu');
const cancel = document.getElementById('cancel');
const nav = document.getElementById('navigation');

menu.addEventListener('click', () => {
    nav.classList.contains('-translate-x-[30em]');
    nav.classList.remove('-translate-x-[30em]');
    nav.classList.add('translate-x-0');
});

cancel.addEventListener('click', () => {
    nav.classList.remove('translate-x-0');
    nav.classList.add('-translate-x-[30em]');
});

