// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, "one", KeyboardInputManager, HTMLActuator, LocalScoreManager);
  new GameManager(4, "two", KeyboardInputManager, HTMLActuator, LocalScoreManager);
});
