// Small vanilla-JS lightbox for the photo gallery: click a photo, then use the
// arrow keys, on-screen arrows, clicks on the image or swipes to move; Esc closes.
document.addEventListener('DOMContentLoaded', function () {
    var links = Array.prototype.slice.call(document.querySelectorAll('.photo-gallery a'));
    if (!links.length) return;

    var box = document.createElement('div');
    box.className = 'lightbox';
    box.hidden = true;
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-modal', 'true');
    box.setAttribute('aria-label', 'Photo viewer');
    box.innerHTML =
        '<button class="lb-btn lb-close" aria-label="Close">&times;</button>' +
        '<button class="lb-btn lb-prev" aria-label="Previous photo">&#8249;</button>' +
        '<figure><img alt=""><figcaption></figcaption></figure>' +
        '<button class="lb-btn lb-next" aria-label="Next photo">&#8250;</button>';
    document.body.appendChild(box);

    var img = box.querySelector('img');
    var caption = box.querySelector('figcaption');
    var current = 0;

    function show(i) {
        current = (i + links.length) % links.length;
        var link = links[current];
        img.src = link.href;
        img.alt = link.querySelector('img').alt;
        caption.textContent = link.dataset.caption || '';
        caption.hidden = !link.dataset.caption;
        // Preload the neighbours so stepping through feels instant
        [current - 1, current + 1].forEach(function (n) {
            new Image().src = links[(n + links.length) % links.length].href;
        });
    }

    function open(i) {
        show(i);
        box.hidden = false;
        document.body.style.overflow = 'hidden';
        box.querySelector('.lb-close').focus();
    }

    function close() {
        box.hidden = true;
        document.body.style.overflow = '';
        links[current].focus();
    }

    links.forEach(function (link, i) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            open(i);
        });
    });

    box.querySelector('.lb-close').addEventListener('click', close);
    box.querySelector('.lb-prev').addEventListener('click', function () { show(current - 1); });
    box.querySelector('.lb-next').addEventListener('click', function () { show(current + 1); });
    // Click on the photo: right half goes forward, left half back. Click on the dark background closes.
    img.addEventListener('click', function (e) {
        var r = img.getBoundingClientRect();
        show(e.clientX - r.left > r.width / 2 ? current + 1 : current - 1);
    });
    box.addEventListener('click', function (e) {
        if (e.target === box || e.target.tagName === 'FIGURE') close();
    });

    document.addEventListener('keydown', function (e) {
        if (box.hidden) return;
        if (e.key === 'Escape') close();
        else if (e.key === 'ArrowRight') show(current + 1);
        else if (e.key === 'ArrowLeft') show(current - 1);
    });

    var startX = null;
    box.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; }, { passive: true });
    box.addEventListener('touchend', function (e) {
        if (startX === null) return;
        var dx = e.changedTouches[0].clientX - startX;
        startX = null;
        if (Math.abs(dx) > 50) show(dx < 0 ? current + 1 : current - 1);
    });
});
