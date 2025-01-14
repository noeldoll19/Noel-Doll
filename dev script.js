document.addEventListener('DOMContentLoaded', () => {
    var scoreValue = 0;
    const score = document.getElementById('score');
    const asteroid = document.getElementById('asteroid1');
    const clickGif = 'images/dev/Asteroid.gif';
    let timeout;
    var duration;





    function newStart(){
        const direction = Math.floor(Math.random() * 2); 
    
        if (direction === 0) {
            startFromLeft(); 
        } else if (direction === 1) {
            startFromRight(); 
        }
    }

    asteroid.addEventListener('click', () => {
        if(asteroid.src.includes('Asteroid.png')){
            asteroid.src = `${clickGif}?t=${Date.now()}`;
            const gifDuration = 300;
            setTimeout(() => {
                asteroid.src = 'images/dev/Asteroid.png';
                newStart();
                increaseScore();
            }, gifDuration);
        }
    });

    asteroid.addEventListener('animationend', () => {
        newStart();
    });

    function increaseScore(){
        scoreValue += 1;
        score.textContent = "SCORE:" + scoreValue;
    }

    function startFromLeft(){
        asteroid.style.transition = 'None';
        asteroid.style.left = '-15vw';
        const startTop = Math.floor(Math.random() * 1701 - 200);
        asteroid.style.top = startTop + 'px';
        setTimeout(() => {
            moveFromLeft();
        }, 1500);
    }

    function startFromRight(){
        asteroid.style.transition = 'None';
        asteroid.style.left = '115vw';
        const startTop = Math.floor(Math.random() * 1701 - 200);
        asteroid.style.top = startTop + 'px';
        setTimeout(() => {
            moveFromRight();
        }, 1500);
    }

    function moveFromRight(){
        if (timeout){
            clearTimeout(timeout);
        }
        duration = Math.max(Math.floor(Math.random() * 7), 5);
        asteroid.style.transition = 'left ' + duration + 's linear, top ' + duration +'s linear';
        asteroid.style.left = '-15vw';
        const target = Math.floor(Math.random() * 1501) - 200;
        asteroid.style.top = target + 'px';
        timeout = setTimeout(() => {
            newStart();
        }, duration * 1000 + 1000);
    }



    function moveFromLeft(){
        if (timeout){
            clearTimeout(timeout);
        }
        duration = Math.max(Math.floor(Math.random() * 7), 5);
        asteroid.style.transition = 'left ' + duration + 's linear, top ' + duration +'s linear';
        asteroid.style.left = '115vw';
        const target = Math.floor(Math.random() * 1501) - 200;
        asteroid.style.top = target + 'px';
        timeout = setTimeout(() => {
            newStart();
        }, duration * 1000 + 1000);
    }

    startFromLeft();
});

