const nav = document.querySelector('nav');

nav.addEventListener('wheel', (e) => {
    if (nav.scrollWidth > nav.clientWidth) {
        e.preventDefault();
        nav.scrollLeft += e.deltaY;
    }
}, {passive: false});