const modalOpen = document.querySelector('.btn-open');
const modalClose = document.querySelector('.btn-close');
const modal = document.querySelector('.modal');
overlay = document.querySelector('.overlay');


modalOpen.addEventListener('click', () => {
    modal.classList.add('open-modal');
    overlay.classList.remove('hidden');
});

modalClose.addEventListener('click', () => {
    modal.classList.remove('open-modal');
    overlay.classList.add('hidden');
});

overlay.addEventListener('click', function () {
    modal.classList.remove('open-modal');
    overlay.classList.add('hidden');
})