var game = {
    gameArea: 'gameArea',
    update: function () {

    },
    keyEvent: function () {

    },
    keyEventHandeler: function () {
        game.keyEvent();
    },
};
document.getElementById(game.gameArea).addEventListener('keypress', game.keyEventHandeler, false);