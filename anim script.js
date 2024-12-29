document.addEventListener('DOMContentLoaded', () => {
    const gifElement = document.getElementById('mainGif');
    const walkingGif = 'images/anim/walk.gif';
    const clickGif = 'images/anim/greet.gif';

    gifElement.addEventListener('click', () => {
        if(gifElement.src.includes(walkingGif)){
        // Change to the new GIF
        gifElement.src = `${clickGif}?t=${Date.now()}`;

                // Pause the animation
                const computedStyle = window.getComputedStyle(gifElement);

                // Get the current left position
                const leftPosition = parseFloat(computedStyle.getPropertyValue('left')) || 0;
        
                // Pause the animation
                gifElement.style.animationPlayState = 'paused';
                gifElement.style.left = `${leftPosition}px`; // Freeze the current position
        const gifDuration = 1700; // Adjust based on the duration of clickGif
        setTimeout(() => {
            gifElement.src = `${walkingGif}?t=${Date.now()}`;

            // Resume the animation
            gifElement.style.animationPlayState = 'running';
        }, gifDuration);
    }});
});

