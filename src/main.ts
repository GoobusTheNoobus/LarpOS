import {initClock} from './taskbar';

initClock('clock');

const startButton = document.getElementById('start-button');
const startMenu = document.getElementById('start-menu');

let startMenuOpen = false;

if (!startButton || !startMenu) {
  throw new Error('LarpOS: Start menu elements not found');
}

// Toggle start menu's visibility
startButton.addEventListener('click', (event) => {
  // Prevent the event to go to a parent element
  event.stopPropagation();

  startMenu.classList.toggle('hidden');
  startMenuOpen = !startMenu.classList.contains('hidden');
});

startMenu.addEventListener('click', (event) => {
  // Prevent the event to go to a parent element
  event.stopPropagation();
});

document.addEventListener('click', () => {
  startMenu.classList.add('hidden');
  startMenuOpen = false;
});