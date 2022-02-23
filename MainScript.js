var game = {
    gameArea: 'gameArea',
    index: 0,
    updateRate: 50,
    fakeCode: '<!DOCTYPE html>\n<html lang="en" xmlns="http://www.w3.org/1999/xhtml">\n    <head>\n        <meta charset="utf-8" />\n        <title></title>\n        <style>\n            #gameArea{\n                width:1340px;\n                height:767;\n            }\n        </style>\n    </head>\n    <body>\n        <textarea id="gameArea"></textarea>\n        <script>\n            var game = {\n                gameArea: \'gameArea\',\n                index: 0,\n                updateRate: 50,\n                fakeCode: \'\',\n                start: function () {\n                    document.getElementById(game.gameArea).addEventListener(\'keydown\', game.keyEventHandeler, false);\n                    setInterval(game.mainInterval, game.updateRate);\n                },\n                update: function () {\n                    document.getElementById(game.gameArea).value = game.fakeCode.substring(0, game.index);\n                },\n                mainInterval: function () { game.update() },\n                keyEvent: function (e) {\n                    var key = e.keyCode;\n                    if (key == 8 && game.index > 0) {\n                        game.index--;\n                    } else if (key != 8 && game.index < game.fakeCode.length) {\n                        game.index++;\n                    }\n                },\n                keyEventHandeler: function (e) {\n                    game.keyEvent(e);\n                },\n            };\n            game.start();\n    </script>\n    </body>\n</html>',
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
        if (key == 8 && game.index > 0) {
            game.index--;
        } else if (key != 8 && game.index < game.fakeCode.length) {
            game.index++;
        }
    },
    keyEventHandeler: function (e) {
        game.keyEvent(e);
    },
};
game.start();