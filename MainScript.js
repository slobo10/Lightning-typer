var game = {
    gameArea: 'gameArea',
    index: 0,
    update: function () {

    },
    keyEvent: function () {
        game.index++;
        console.log(game.index);
    },
    keyEventHandeler: function () {
        game.keyEvent();
    },
};
document.getElementById(game.gameArea).addEventListener('keydown', game.keyEventHandeler, false);