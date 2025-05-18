var click = new Audio('https://pixel5.info/sound/P5R-Select.mp3');

const choices = document.querySelectorAll('.choice');
    let selectedIndex = 0;

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

    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        selectedIndex = (selectedIndex - 1 + choices.length) % choices.length;
        updateSelection();
      } else if (e.key === 'ArrowRight') {
        selectedIndex = (selectedIndex + 1) % choices.length;
        updateSelection();
      } else if (e.key === 'Enter') {
        const selectedChoice = choices[selectedIndex].dataset.choice;
        alert(`You chose: ${selectedChoice}`);
           click.play();
      }
    });

    updateSelection(); // Initial display
