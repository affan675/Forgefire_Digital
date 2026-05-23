// script.js

/**
 * Handles the toggle between Day and Night (Obsidian) modes.
 */
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme') === 'night' ? 'day' : 'night';
    
    body.setAttribute('data-theme', currentTheme);
    
    // Re-initialize particles to update ember colors/sizes for the new theme
    initParticles(currentTheme);
}

    // Initialize particles based on the current theme
    function initParticles(currentTheme) {
        // Remove existing particles canvas if it exists (important for theme switching)
        const oldCanvas = document.getElementById('particles-js');
        if (oldCanvas) {
            oldCanvas.remove();
        }

        // Add a div for particles.js to attach to in the hero section
        const heroSection = document.getElementById('hero');
        if (heroSection) {
            const particlesDiv = document.createElement('div');
            particlesDiv.id = 'particles-js'; // particles.js needs this ID to find the canvas
            heroSection.prepend(particlesDiv); // Add as first child to be behind content

            // Set particle properties based on the current theme (Day/Night)
            let particleColor = '#FFD700'; // Gold for Day
            let particleOpacity = 0.6;
            let particleSize = 4;
            let particleDensity = 80;

            if (currentTheme === 'night') {
                particleColor = '#FF4500'; // OrangeRed for Night (more intense ember)
                particleOpacity = 0.8; // More opaque
                particleSize = 6;     // Larger
                particleDensity = 60; // Slightly fewer, larger embers
            }

            // This is the core particles.js initialization call!
            particlesJS('particles-js', {
                "particles": {
                    "number": {
                        "value": particleDensity, // How many particles
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": particleColor // Ember color
                    },
                    "shape": {
                        "type": "circle", // Simple circular embers
                        // ... other shape properties ...
                    },
                    "opacity": {
                        "value": particleOpacity, // How transparent
                        "random": true,
                        "anim": {
                            "enable": true,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false // Each particle animates opacity independently
                        }
                    },
                    "size": {
                        "value": particleSize, // Size of embers
                        "random": true,
                        // ... other size properties ...
                    },
                    "line_linked": {
                        "enable": false // No lines between embers
                    },
                    "move": {
                        "enable": true,
                        "speed": 3, // How fast they move
                        "direction": "top", /* Embers rising */
                        "random": true,
                        "straight": false,
                        "out_mode": "out", // Disappear when leaving screen
                        "bounce": false,
                        // ... other move properties ...
                    }
                },
                "interactivity": { // How particles react to mouse/click
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "bubble" // Embers grow/shrink on hover
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "repulse" // Embers push away on click
                        },
                        "resize": true
                    },
                    "modes": {
                        // ... bubble, repulse, etc. specific settings ...
                    }
                },
                "retina_detect": true // For high-DPI screens
            });
        }
    }

// ... (Rest of your script.js including event listeners and scroll reveal) ...

// Wait for the DOM to be fully loaded before initializing
document.addEventListener('DOMContentLoaded', () => {
    // Get the current theme from the body attribute, defaulting to 'day'
    const currentTheme = document.body.getAttribute('data-theme') || 'day';
    
    // Initial call to start the particles
    initParticles(currentTheme);

    // Add event listener for the theme toggle button
    const themeToggleBtn = document.querySelector('.theme-toggle-btn');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
    }
});