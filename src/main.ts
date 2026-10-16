import {initClock} from './components/Taskbar';
import {WindowManager} from './components/WindowManager';

initClock('clock');

const windowManager = new WindowManager();

const startButton = document.getElementById('start-button');
const startMenu = document.getElementById('start-menu');


if (!startButton || !startMenu) {
  throw new Error('LarpOS: Start menu elements not found');
}

// Toggle start menu's visibility
startButton.addEventListener('click', (event) => {
  // Prevent the event to go to a parent element
  event.stopPropagation();

  startMenu.classList.toggle('hidden');

  startMenu.style.zIndex = 9999999999999999;
});

startMenu.addEventListener('click', (event) => {
  // Prevent the event to go to a parent element
  event.stopPropagation();
});

document.addEventListener('click', () => {
  startMenu.classList.add('hidden');
});

document.querySelector('#apps')?.addEventListener('click', (event) => {
  console.log('clicked!')

  if (!(event.target instanceof Element)) {
    throw new Error('LarpOS: Clicked app isn\'t an element');
  }

  const button = event.target.closest<HTMLButtonElement>('button[data-app]');

  if (!button) {
    console.error('no button!');
    return;
  }

  const app = button.dataset.app;

  if (app === undefined) {
    console.error('App is undefined!');
    return;
  }

  windowManager.launch(app);

  startMenu.classList.add('hidden');
})