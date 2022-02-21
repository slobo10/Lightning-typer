var game = {
    gameArea: 'gameArea',
    index: 0,
    updateRate: 50,
    start: function () {
        document.getElementById(game.gameArea).addEventListener('keydown', game.keyEventHandeler, false);
        setInterval(game.mainIterval, 50);
    },
    update: function () {

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