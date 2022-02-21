var game = {
    gameArea: 'gameArea',
    index: 0,
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
document.getElementById(game.gameArea).addEventListener('keydown', game.keyEventHandeler, false);