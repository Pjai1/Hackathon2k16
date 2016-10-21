window.onload = function() {


    var game = new Phaser.Game(1920, 1080, Phaser.AUTO, '', { preload: preload, create: create });

    function preload () {

        game.load.image('logo', 'css/images/160716123606-trump-pence-new-logo-large-169.jpg');
        game.load.image('button', 'css/images/pressing-start-and-the-games-that-never-stop_f5qb.jpg');

    }

    var text;
    var button;
    var x = 32;
    var y = 80;

    function create () {

        game.stage.backgroundColor = "#fff";

        // var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
        // logo.anchor.setTo(0.5, 0.5);

        game.load.onLoadStart.add(loadStart, this);
        game.load.onFileComplete.add(fileComplete, this);
        game.load.onLoadComplete.add(loadComplete, this);

        text = game.add.text(32, 32, 'Click to start Drumpf', { fill: '#000' });
        button = game.add.button(game.world.centerX - 95, 400, 'button', start, this, 2, 1, 0);
        button.anchor.setTo(0.5, 0.5);

    }

    function start() {

        game.load.image('img1', 'css/images/TrumpPhenomenon2.jpg');
        game.load.image('img2', 'css/images/TrumpPhenomenon2.jpg');

        game.load.start();

        button.visible = false;

    }

    function fileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {

        text.setText("File Complete: " + progress + "% - " + totalLoaded + " out of " + totalFiles);

        var newImage = game.add.image(x, y, cacheKey);

        newImage.scale.set(0.3);

        x += newImage.width + 20;

        if (x > 700)
        {
            x = 32;
            y += 332;
        }

    }

    function loadStart() {

        text.setText("Loading Drumpf...");

    }

    function loadComplete() {

        text.setText("Load Complete");

    }


};