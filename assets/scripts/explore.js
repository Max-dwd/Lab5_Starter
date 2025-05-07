// explore.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.getElementById('voice-select');
  const talkButton = document.querySelector('#explore button');
  const textArea = document.getElementById('text-to-speak');
  const faceImg = document.querySelector('#explore img');

  const CLOSED_FACE = 'assets/images/smiling.png';
  const OPEN_FACE = 'assets/images/smiling-open.png';

  function populateVoiceList() {
    const voices = speechSynthesis.getVoices();
    voiceSelect.innerHTML = '<option value="" disabled selected>Select Voice:</option>';

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.value = voices[i].name;
      option.dataset.lang = voices[i].lang;
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();
  speechSynthesis.addEventListener('voiceschanged', populateVoiceList);

  talkButton.addEventListener('click', () => {
    const text = textArea.value ;

    const voices = speechSynthesis.getVoices();
    const utterance = new SpeechSynthesisUtterance(text);
    const selectedName = voiceSelect.value;

    // find
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedName) {
        utterance.voice = voices[i];
      }
    }

    utterance.addEventListener('start', () => {
      faceImg.src = OPEN_FACE;
    });
    utterance.addEventListener('end', () => {
      faceImg.src = CLOSED_FACE;
    });
    utterance.addEventListener('error', () => {
      faceImg.src = CLOSED_FACE;
    });

    speechSynthesis.speak(utterance);
  });
}