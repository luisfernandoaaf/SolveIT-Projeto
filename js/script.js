let menu = document.querySelector('#icone-menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};
prompt("Site em Desenvolvimento, Por Favor Clique em OK");