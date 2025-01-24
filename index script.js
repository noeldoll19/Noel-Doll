document.addEventListener('DOMContentLoaded', () => {
    const focus = document.getElementById('focus');
    const veil = document.getElementById('veil');
    const images = document.querySelectorAll('.pic');
    let currentIndex = -1;
    
    const next = document.getElementById('next');
    const prev = document.getElementById('prev');


    veil.classList.add('shrink')

    images.forEach((image, index) => {
        image.addEventListener('click', () => {
                veil.classList.remove('shrink');
                focus.src = image.src;
                currentIndex = index;
                veil.style.visibility = 'visible';
            }
        )
    })

    focus.addEventListener('click', () => {
        veil.classList.add('shrink');
        setTimeout(() => {
            veil.style.visibility = 'hidden';
            currentIndex = -1;
        }, 500);
    })

    next.addEventListener('click', () => {
        if (currentIndex >= images.length-1){
            currentIndex = -1
        }
        currentIndex++;
        const nextImage = images[currentIndex];
        focus.src = nextImage.src;
    })
    prev.addEventListener('click', () => {
        if (currentIndex <= 0){
            currentIndex = images.length;
        }
        currentIndex--;
        const prevImage = images[currentIndex];
        focus.src = prevImage.src;
    })
})

