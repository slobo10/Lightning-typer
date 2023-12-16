let game = {
  fakeCode: "",
  gameArea: "gameArea",
  index: 0,
  start: function () {
    document
      .getElementById(game.gameArea)
      .addEventListener("keydown", game.keyEventHandler, false);
  },
  update: function () {
    document.getElementById(game.gameArea).value = game.fakeCode.substring(
      0,
      game.index
    );
  },
  keyEvent: function ({ keyCode }) {
    if (keyCode == 8 && game.index > 0) {
      game.index--;
    } else if (keyCode != 8 && game.index < game.fakeCode.length) {
      game.index++;
    }

    //TODO: Find better way to do the following
    setTimeout(function () {
      game.update();
    }, 10);
  },
  keyEventHandler: function (e) {
    game.keyEvent(e);
  },
};

window.onload = game.start;
