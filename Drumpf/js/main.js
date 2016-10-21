window.onload = function() {


    var game = new Phaser.Game(1920, 1080, Phaser.AUTO, '', { preload: preload, create: create });

    function preload () {

        game.load.image('logo', 'assets/images/160716123606-trump-pence-new-logo-large-169.jpg');
        game.load.image('button', 'assets/images/pressing-start-and-the-games-that-never-stop_f5qb.jpg');
        game.load.image('background', 'assets/images/FLA20121022316_md.jpg');

        game.load.image('trump', 'assets/images/TrumpPhenomenon2.jpg');
        game.load.image('opponent', 'assets/images/TrumpPhenomenon2.jpg');

    }

    var text;
    var button;
    var background;
    var trump;
    var opponent;
    var x;
    var y = 80;

    function create () {

        game.stage.backgroundColor = "#fff";

        var background = game.add.sprite(game.world.centerX, game.world.centerY, 'background');
        background.anchor.setTo(0.5, 0.5);

        game.load.onLoadStart.add(loadStart, this);
        // game.load.onFileComplete.add(fileComplete, this);
        game.load.onLoadComplete.add(fileComplete, this);

        text = game.add.text(32, 32, 'Click to start Drumpf', { fill: '#000' });
        button = game.add.button(game.world.centerX - 95, 400, 'button', start, this, 2, 1, 0);
        button.anchor.setTo(0.5, 0.5);

    }

    function start() {
        // trump = game.add.image(x1, y, 'img1');
        // opponent = game.add.image(x2, y, 'img2');

        game.load.start();

        button.visible = false;

    }

    function fileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {

        text.setText("File Complete: " + progress + "% - " + totalLoaded + " out of " + totalFiles);

        trump = game.add.image(100, y, 'trump');
        opponent = game.add.image(1420, y, 'opponent');

        trump.scale.set(0.3);
        opponent.scale.set(0.3);

        // x += trump.width + 20;
        // x2 += opponent.width + 20;

        text.visible = false;

    }

    function loadStart() {

        text.setText("Loading Drumpf...");

    }

    function loadComplete() {

        text.setText("Load Complete");

    }


};