// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  // Get references
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('#expose img');
  const audio = document.querySelector('#expose audio');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('#expose button');

  const jsConfetti = new JSConfetti();

  // Select horn
  hornSelect.addEventListener('change', () => {
    const horn = hornSelect.value;
    hornImage.src = `assets/images/${horn}.svg`;
    audio.src = `assets/audio/${horn}.mp3`;
  });

  // Changes the volume
  volumeSlider.addEventListener('input', () => {
    const volumeValue = volumeSlider.value;
    
    // volume
    audio.volume = volumeValue / 100;

    // icon
    if (volumeValue === 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } else if (volumeValue < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if (volumeValue < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
  });

  // Play
  playButton.addEventListener('click', () => {
    // play the sound
    audio.play();

    // confetti
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}
