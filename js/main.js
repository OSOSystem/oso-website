const currentPath = window.location.pathname;
const link = document.querySelector(`.navbar-nav a[href='${currentPath}']`);
link.classList.add("active");