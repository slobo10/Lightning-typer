var game = {
    gameArea: 'gameArea',
    index: 0,
    updateRate: 50,
    fakeCode: 'Test',
    start: function () {
        document.getElementById(game.gameArea).addEventListener('keydown', game.keyEventHandeler, false);
        setInterval(game.mainInterval, game.updateRate);
    },
    update: function () {
        document.getElementById(game.gameArea).value = game.fakeCode.substring(0, game.index);
    },
    mainInterval: function () { game.update() },
    keyEvent: function (e) {
        var key = e.keyCode;
        if (key == 8) {
            game.index--;
        } else {
            game.index++;
        }
    },
    keyEventHandeler: function (e) {
        game.keyEvent(e);
    },
};
game.start();