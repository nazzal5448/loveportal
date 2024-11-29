// Proposal page interactions
function acceptProposal() {
    const balloonsContainer = document.getElementById('balloons');
    // Generate balloon animations
    for (let i = 0; i < 30; i++) {
        let balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = Math.random() * 100 + 'vw';
        balloonsContainer.appendChild(balloon);

        // Animate the balloons
        gsap.to(balloon, {
            y: -200,
            duration: 3 + Math.random(),
            opacity: 0,
            onComplete: () => balloon.remove(),
        });
    }
    setTimeout(() => {
        window.location.href = '/gallery';
    }, 5000);
}

// Make the "No" button run away
const noBtn = document.getElementById('no-btn');
noBtn.addEventListener('mouseenter', () => {
    noBtn.style.position = 'absolute';
    noBtn.style.top = Math.random() * 80 + 'vh';
    noBtn.style.left = Math.random() * 80 + 'vw';
});

// Background music toggle
const bgMusic = new Audio('/static/audio/love_song.mp3');
let isPlaying = false;
function toggleMusic() {
    if (isPlaying) {
        bgMusic.pause();
    } else {
        bgMusic.play();
    }
    isPlaying = !isPlaying;
}
window.addEventListener('DOMContentLoaded', () => {
    // Update journey map based on the current chapter (you can add more dynamic features as you go)
    const journeyBubbles = document.querySelectorAll('.journey-bubble');
    const currentChapter = 1; // Change this dynamically as user progresses

    // Highlight current chapter bubble
    journeyBubbles[currentChapter].classList.add('active');

    // Handle Chapter Progression (For simplicity, just for demo)
    const nextButton = document.getElementById('go-ahead-button');
    nextButton.addEventListener('click', () => {
        // Change chapter logic here
        alert('Loading Chapter 1...');
        // You could change the page or update the journey map accordingly
    });
});
