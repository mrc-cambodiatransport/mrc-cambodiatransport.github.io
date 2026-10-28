// Small vanilla-JS replacement for the old jQuery-based theme scripts.
document.addEventListener('DOMContentLoaded', function () {
    var nav = document.getElementById('mainNav');
    var menu = document.getElementById('navbarMenu');

    // Shrink the navbar once the page has scrolled
    function onScroll() {
        nav.classList.toggle('navbar-shrink', window.scrollY > 100);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    // Highlight the current section in the navbar
    new bootstrap.ScrollSpy(document.body, { target: '#mainNav', rootMargin: '0px 0px -60%' });

    // Close the mobile menu after picking a link
    document.querySelectorAll('#navbarMenu .nav-link').forEach(function (link) {
        link.addEventListener('click', function () {
            if (menu.classList.contains('show')) {
                bootstrap.Collapse.getOrCreateInstance(menu).hide();
            }
        });
    });
});
