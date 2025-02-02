// Handle envelope opening when the flap is clicked
const envelopeFlap = document.getElementById('envelope-flap');
const envelope = document.getElementById('envelope');
const card = document.getElementById('card');

// Envelope opening logic
envelopeFlap.addEventListener('click', () => {
    envelope.classList.add('opened');
});

function celebrate(isYes) {
    if (isYes) {
        // Trigger celebration animation (only if 'Yes' is selected)
        const celebrationElement = document.getElementById('celebration');
        celebrationElement.style.display = 'block'; // Show celebration div
        
        // Generate confetti particles
for (let i = 0; i < 50; i++) {
    const emoji = document.createElement('div');
    emoji.classList.add('boo-emoji');

    // Randomize emojis (including roses and hearts)
    const emojis = ['🌹', '❤️','🥰']; // Add roses and hearts here
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)]; // Randomly choose from the emojis array

    // Random horizontal position
    emoji.style.left = Math.random() * 100 + 'vw'; // Spread the emojis across the screen

    // Random delay for falling effect
    emoji.style.animationDelay = Math.random() * 2 + 's';

    // Append the emoji to the container
    celebrationElement.appendChild(emoji);
}

        // Hide the celebration after 5 seconds
        setTimeout(() => {
            celebrationElement.style.display = 'none';
            // Clean up confetti
            celebrationElement.innerHTML = '';
        }, 5000);
    }
}

function boo(isNo) {
    if (isNo) {
        // Trigger boo effect (only if 'No' is selected)
        const booElement = document.getElementById('boo');
        booElement.style.display = 'block'; // Show boo div

// Generate falling emojis (e.g., 👎, 😔, 💩)
for (let i = 0; i < 50; i++) {
    const emoji = document.createElement('div');
    emoji.classList.add('boo-emoji');

    // Randomize emojis (include 💩)
    const emojis = ['👎', '😔', '💩'];
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)]; // Randomly choose from the emojis array

    // Random horizontal position
    emoji.style.left = Math.random() * 100 + 'vw';

    // Random delay for falling effect
    emoji.style.animationDelay = Math.random() * 2 + 's';

    booElement.appendChild(emoji);
}
        // Hide the boo effect after 5 seconds
        setTimeout(() => {
            booElement.style.display = 'none';
            // Clean up falling emojis
            booElement.innerHTML = '';
        }, 5000);
    }
}