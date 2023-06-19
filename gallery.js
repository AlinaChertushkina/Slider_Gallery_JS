let offset = 0; // смещение справа
const slider = document.querySelector('.slider');

document.querySelector('.button_prev').addEventListener('click', function () {
    offset += 300; // тоже самое, что offset = offset + 300(ширина картинки);
    if (offset > 900) {
        offset = 0;
    }
    slider.style.left = -offset + 'px';
})

document.querySelector('.button_next').addEventListener('click', function () {
    offset -= 300; // здесь мы offset уменьшаем;
    if (offset < 0) {
        offset = 900;
    }
    slider.style.left = -offset + 'px';
})
