const mainImage = document.getElementById('mainImage');
const cityTitle = document.getElementById('cityTitle');
const cityDesc = document.getElementById('cityDesc');
const thumbs = document.querySelectorAll('.thumb');

thumbs.forEach(function (thumb) {
    thumb.addEventListener('click', function () {
        mainImage.style.opacity = '0';
        cityTitle.style.opacity = '0';
        cityDesc.style.opacity = '0';
        setTimeout(function () {
            mainImage.src = thumb.dataset.full;
            cityTitle.textContent = thumb.dataset.title;
            cityDesc.textContent = thumb.dataset.desc;
            mainImage.style.opacity = '1';
            cityTitle.style.opacity = '1';
            cityDesc.style.opacity = '1';
            if (window.innerWidth <= 768) {
                document.querySelector('.title').scrollIntoView({behavior: 'smooth', block: 'start'});
            }
        }, 350);
    });
});