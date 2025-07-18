// This script uses GSAP for animations.
window.Webflow = window.Webflow || {};
window.Webflow.ix2 = window.Webflow.ix2 || {};

// --- GSAP Image Animation Logic ---
function initializeImageAnimation() {
    gsap.set(".home-header_image-1", { y: "-72%", z: -800, opacity: 1 });
    gsap.set(".home-header_image-2", { y: "-45%", z: -550, opacity: 1 });
    gsap.set(".home-header_image-3", { y: "-20%", z: -260, opacity: 1 });
    gsap.set(".home-header_image-4", { y: "0%", z: 0, opacity: 1 });
    gsap.set(".home-header_image-5", { y: "20%", z: -260, opacity: 1 });
    gsap.set(".home-header_image-6", { y: "45%", z: -550, opacity: 1 });
    gsap.set(".home-header_image-7", { y: "72%", z: -800, opacity: 1 });
    gsap.set(".home-header_image-8", { y: "92%", z: -1000, opacity: 0 });

    const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0,
        defaults: {
            duration: 1.2,      // Slower duration for a more polished feel
            ease: "power2.inOut" // Smoother easing
        }
    });

    // Each group is one step in the 8-step animation cycle.
    // The timeline will now loop perfectly.
    
    // Step 1
    tl.addLabel("step1")
      .to(".home-header_image-1", { y: "-92%", z: -1000, opacity: 0 }, "step1")
      .to(".home-header_image-2", { y: "-72%", z: -800 }, "step1")
      .to(".home-header_image-3", { y: "-45%", z: -550 }, "step1")
      .to(".home-header_image-4", { y: "-20%", z: -260 }, "step1")
      .to(".home-header_image-5", { y: "0%", z: 0 }, "step1")
      .to(".home-header_image-6", { y: "20%", z: -260 }, "step1")
      .to(".home-header_image-7", { y: "45%", z: -550 }, "step1")
      .to(".home-header_image-8", { y: "72%", z: -800, opacity: 1 }, "step1");
      
    // Step 2
    tl.addLabel("step2", ">+0.1")
      .call(() => gsap.set(".home-header_image-1", {y: "92%", z: -1000, opacity: 0})) // Reset position
      .to(".home-header_image-2", { y: "-92%", z: -1000, opacity: 0 }, "step2")
      .to(".home-header_image-3", { y: "-72%", z: -800 }, "step2")
      .to(".home-header_image-4", { y: "-45%", z: -550 }, "step2")
      .to(".home-header_image-5", { y: "-20%", z: -260 }, "step2")
      .to(".home-header_image-6", { y: "0%", z: 0 }, "step2")
      .to(".home-header_image-7", { y: "20%", z: -260 }, "step2")
      .to(".home-header_image-8", { y: "45%", z: -550 }, "step2")
      .to(".home-header_image-1", { y: "72%", z: -800, opacity: 1 }, "step2");

    // Step 3
    tl.addLabel("step3", ">+0.1")
      .call(() => gsap.set(".home-header_image-2", {y: "92%", z: -1000, opacity: 0}))
      .to(".home-header_image-3", { y: "-92%", z: -1000, opacity: 0 }, "step3")
      .to(".home-header_image-4", { y: "-72%", z: -800 }, "step3")
      .to(".home-header_image-5", { y: "-45%", z: -550 }, "step3")
      .to(".home-header_image-6", { y: "-20%", z: -260 }, "step3")
      .to(".home-header_image-7", { y: "0%", z: 0 }, "step3")
      .to(".home-header_image-8", { y: "20%", z: -260 }, "step3")
      .to(".home-header_image-1", { y: "45%", z: -550 }, "step3")
      .to(".home-header_image-2", { y: "72%", z: -800, opacity: 1 }, "step3");
    
    // Step 4
    tl.addLabel("step4", ">+0.1")
      .call(() => gsap.set(".home-header_image-3", {y: "92%", z: -1000, opacity: 0}))
      .to(".home-header_image-4", { y: "-92%", z: -1000, opacity: 0 }, "step4")
      .to(".home-header_image-5", { y: "-72%", z: -800 }, "step4")
      .to(".home-header_image-6", { y: "-45%", z: -550 }, "step4")
      .to(".home-header_image-7", { y: "-20%", z: -260 }, "step4")
      .to(".home-header_image-8", { y: "0%", z: 0 }, "step4")
      .to(".home-header_image-1", { y: "20%", z: -260 }, "step4")
      .to(".home-header_image-2", { y: "45%", z: -550 }, "step4")
      .to(".home-header_image-3", { y: "72%", z: -800, opacity: 1 }, "step4");

    // Step 5
    tl.addLabel("step5", ">+0.1")
      .call(() => gsap.set(".home-header_image-4", {y: "92%", z: -1000, opacity: 0}))
      .to(".home-header_image-5", { y: "-92%", z: -1000, opacity: 0 }, "step5")
      .to(".home-header_image-6", { y: "-72%", z: -800 }, "step5")
      .to(".home-header_image-7", { y: "-45%", z: -550 }, "step5")
      .to(".home-header_image-8", { y: "-20%", z: -260 }, "step5")
      .to(".home-header_image-1", { y: "0%", z: 0 }, "step5")
      .to(".home-header_image-2", { y: "20%", z: -260 }, "step5")
      .to(".home-header_image-3", { y: "45%", z: -550 }, "step5")
      .to(".home-header_image-4", { y: "72%", z: -800, opacity: 1 }, "step5");
      
    // Step 6
    tl.addLabel("step6", ">+0.1")
      .call(() => gsap.set(".home-header_image-5", {y: "92%", z: -1000, opacity: 0}))
      .to(".home-header_image-6", { y: "-92%", z: -1000, opacity: 0 }, "step6")
      .to(".home-header_image-7", { y: "-72%", z: -800 }, "step6")
      .to(".home-header_image-8", { y: "-45%", z: -550 }, "step6")
      .to(".home-header_image-1", { y: "-20%", z: -260 }, "step6")
      .to(".home-header_image-2", { y: "0%", z: 0 }, "step6")
      .to(".home-header_image-3", { y: "20%", z: -260 }, "step6")
      .to(".home-header_image-4", { y: "45%", z: -550 }, "step6")
      .to(".home-header_image-5", { y: "72%", z: -800, opacity: 1 }, "step6");
      
    // Step 7
    tl.addLabel("step7", ">+0.1")
      .call(() => gsap.set(".home-header_image-6", {y: "92%", z: -1000, opacity: 0}))
      .to(".home-header_image-7", { y: "-92%", z: -1000, opacity: 0 }, "step7")
      .to(".home-header_image-8", { y: "-72%", z: -800 }, "step7")
      .to(".home-header_image-1", { y: "-45%", z: -550 }, "step7")
      .to(".home-header_image-2", { y: "-20%", z: -260 }, "step7")
      .to(".home-header_image-3", { y: "0%", z: 0 }, "step7")
      .to(".home-header_image-4", { y: "20%", z: -260 }, "step7")
      .to(".home-header_image-5", { y: "45%", z: -550 }, "step7")
      .to(".home-header_image-6", { y: "72%", z: -800, opacity: 1 }, "step7");
      
    // Step 8
    tl.addLabel("step8", ">+0.1")
      .call(() => gsap.set(".home-header_image-7", {y: "92%", z: -1000, opacity: 0}))
      .to(".home-header_image-8", { y: "-92%", z: -1000, opacity: 0 }, "step8")
      .to(".home-header_image-1", { y: "-72%", z: -800 }, "step8")
      .to(".home-header_image-2", { y: "-45%", z: -550 }, "step8")
      .to(".home-header_image-3", { y: "-20%", z: -260 }, "step8")
      .to(".home-header_image-4", { y: "0%", z: 0 }, "step8")
      .to(".home-header_image-5", { y: "20%", z: -260 }, "step8")
      .to(".home-header_image-6", { y: "45%", z: -550 }, "step8")
      .to(".home-header_image-7", { y: "72%", z: -800, opacity: 1 }, "step8");
}

// Call the animation initialization function when the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', (event) => {
    initializeImageAnimation();
});


// --- Menu Toggle Logic ---
function initializeMenuToggle() {
    const menuButton = document.getElementById('menu-toggle');
    const menuIcon = menuButton.querySelector('.menu-icon');

    if (menuButton && menuIcon) {
        menuButton.addEventListener('click', () => {
            menuIcon.classList.toggle('is-active');
            document.body.classList.toggle('nav-active');
        });
    }
}

// Call the animation and menu functions when the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', (event) => {
    initializeImageAnimation();
    initializeMenuToggle(); // Add this line
});