const pathname = window.location.pathname;
const path = pathname.endsWith("/") ? pathname.substr(0, pathname.length - 1) : pathname;
const link = document.querySelector(`.navbar-nav a[href='${path ? path : "/"}']`);
link.classList.add("active");