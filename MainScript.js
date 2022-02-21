var game = {
    gameArea: 'gameArea',
    index: 0,
    start: function () {
        document.getElementById(game.gameArea).addEventListener('keydown', game.keyEventHandeler, false);
    },
    update: function () {

    },
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