
// Initializes the clock found on the right end of the taskbar
export function initClock(clockElementId: string): void {
  const clockElement = document.getElementById(clockElementId);

  if (!clockElement) {
    console.error(`Invalid clock element "${clockElementId}"`);
    return;
  }

  const updateClock = () => {
    const now = new Date();

    // Formats the time as HH:MM:SS
    clockElement.textContent = now.toLocaleTimeString(
        [],
        {hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false});
  };

  updateClock();
  setInterval(updateClock, 1000);
}