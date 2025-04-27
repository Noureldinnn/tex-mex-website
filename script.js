const menuLink = document.getElementById('menu-link');
const contactLink = document.getElementById('contact-link');
const menuDropdown = document.getElementById('menu-dropdown');
const contactDropdown = document.getElementById('contact-dropdown');

menuLink.addEventListener('click', (e) => {
    e.preventDefault();
    menuDropdown.style.display = menuDropdown.style.display === 'block' ? 'none' : 'block';
    contactDropdown.style.display = 'none'; // Hide contact if open
});

contactLink.addEventListener('click', (e) => {
    e.preventDefault();
    contactDropdown.style.display = contactDropdown.style.display === 'block' ? 'none' : 'block';
    menuDropdown.style.display = 'none'; // Hide menu if open
});
