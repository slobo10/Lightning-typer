var game = {
  fakeCode: "",
  gameArea: "gameArea",
  index: 0,
  updateRate: 10,
  start: function () {
    document
      .getElementById(game.gameArea)
      .addEventListener("keydown", game.keyEventHandler, false);
    setInterval(game.mainInterval, game.updateRate);
  },
  update: function () {
    document.getElementById(game.gameArea).value = game.fakeCode.substring(
      0,
      game.index
    );
  },
  mainInterval: function () {
    game.update();
  },
  keyEvent: function (e) {
    var key = e.keyCode;
    if (key == 8 && game.index > 0) {
      game.index--;
    } else if (key != 8 && game.index < game.fakeCode.length) {
      game.index++;
    }
  },
  keyEventHandler: function (e) {
    game.keyEvent(e);
  },
};
game.start();
