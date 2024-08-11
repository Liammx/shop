document.addEventListener('DOMContentLoaded', () => {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    const slides = document.querySelectorAll('.swiper-slide');
    const prevButton = document.querySelector('.swiper-button-prev');
    const nextButton = document.querySelector('.swiper-button-next');
    const searchs = document.querySelector('#searchs');
    const inp = document.querySelector('#input');
    const h = document.querySelector('#h');
    const create = document.querySelector('#create');
    const sign = document.querySelector('#sign')
    let currentIndex = 0;

    sign.addEventListener('click' , () =>{
        location.href = '../html/sign.html'
    })

    create.addEventListener('click' , () =>{
        location.href = '../html/create.html'
    })
    searchs.addEventListener('click', () =>{
        inp.style.display = 'block'
        h.style.display = 'block'
    })
    h.addEventListener('click', () =>{
        inp.style.display = 'none'
        h.style.display = 'none'
    })

    
    window.onclick = (event) => {
        if (event.target === inp) {
            searchs();
        }
    };

    const showSlide = (index) => {
        const offset = -index * 100;
        swiperWrapper.style.transform = `translateX(${offset}%)`;
    };

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
        showSlide(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
        showSlide(currentIndex);
    });

    setInterval(() => {
        currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
        showSlide(currentIndex);
    }, 3000);
});