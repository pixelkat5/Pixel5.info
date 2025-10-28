var click = null;
var flip = null;

function collapseui() {
    document.querySelector(".overlay").style.display = "none";
}

document.addEventListener('DOMContentLoaded', function() {
    const choices = document.querySelectorAll('.choice');
    let selectedIndex = 0;
    let audioReady = false;
    
    function updateSelection() {
        choices.forEach((choice, index) => {
            const arrow = choice.querySelector('.arrow');
            if (index === selectedIndex) {
                choice.classList.add('selected');
                arrow.classList.remove('hidden');
            } else {
                choice.classList.remove('selected');
                arrow.classList.add('hidden');
            }
        });
    }
    
    function enableAudio() {
        if (!audioReady) {
            click = new Audio('https://pixel5.info/sound/P5R-Select.mp3');
            flip = new Audio('https://pixel5.info/sound/00002_streaming.mp3');
            click.play().then(() => click.pause()).catch(() => {});
            flip.play().then(() => flip.pause()).catch(() => {});
            audioReady = true;
        }
    }
    
    document.addEventListener('keydown', (e) => {
        const overlay = document.querySelector('.overlay');
        if (!overlay || overlay.style.display === 'none') {
            return;
        }
        
        enableAudio();
        if (e.key === 'ArrowLeft') {
            if (flip) {
                flip.currentTime = 0;
                flip.play();
            }
            selectedIndex = (selectedIndex - 1 + choices.length) % choices.length;
            updateSelection();
        } else if (e.key === 'ArrowRight') {
            if (flip) {
                flip.currentTime = 0;
                flip.play();
            }
            selectedIndex = (selectedIndex + 1) % choices.length;
            updateSelection();
        } else if (e.key === 'Enter') {
            if (click) {
                click.currentTime = 0;
                click.play();
            }
            const selectedChoice = choices[selectedIndex].dataset.choice;
            
            if (selectedChoice === 'Yes') {
                collapseui();
            } else {
                alert('This should inject a cookie. It wont work for now so dont worry.');
            }
        }
    });
    
    document.addEventListener('click', enableAudio, { once: true });
    updateSelection();
    
    const navLinks = document.querySelectorAll('.link-wrapper');
    let navSelectedIndex = 0;
    
    function updateNavSelection() {
        navLinks.forEach((link, index) => {
            if (index === navSelectedIndex) {
                link.classList.add('nav-selected');
            } else {
                link.classList.remove('nav-selected');
            }
        });
    }
    
    navLinks.forEach((link, index) => {
        link.addEventListener('mouseenter', () => {
            navLinks.forEach(l => l.classList.remove('nav-selected'));
        });
        
        link.addEventListener('mouseleave', () => {
            updateNavSelection();
        });
    });
    
    document.addEventListener('keydown', (e) => {
        const overlay = document.querySelector('.overlay');
        if (overlay && overlay.style.display !== 'none') {
            return;
        }
        
        enableAudio();
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (flip) {
                flip.currentTime = 0;
                flip.play();
            }
            navSelectedIndex = (navSelectedIndex - 1 + navLinks.length) % navLinks.length;
            updateNavSelection();
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (flip) {
                flip.currentTime = 0;
                flip.play();
            }
            navSelectedIndex = (navSelectedIndex + 1) % navLinks.length;
            updateNavSelection();
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (click) {
                click.currentTime = 0;
                click.play();
            }
            navLinks[navSelectedIndex].click();
        }
    });
    
    updateNavSelection();
});
