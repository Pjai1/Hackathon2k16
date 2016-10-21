window.onload = function() {


    var game = new Phaser.Game(1920, 1080, Phaser.AUTO, '', { preload: preload, create: create, render: render });

    function preload () {

        game.load.image('logo', 'css/images/160716123606-trump-pence-new-logo-large-169.jpg');
        game.load.image('button', 'css/images/pressing-start-and-the-games-that-never-stop_f5qb.jpg');
        // game.load.image('background', 'css/images/FLA20121022316_md.jpg');

        game.load.image('trump', 'css/images/TrumpPhenomenon2.jpg');
        game.load.image('opponent', 'css/images/TrumpPhenomenon2.jpg');

        // game.load.audio('mexican', []);
        // game.load.audio('arab', []);
        // game.load.audio('woman', []);

    }

    var text;
    var button;
    var background;
    var trump;
    var trumpHealth = 10;
    var opponentHealth = 5;
    var opponent;
    var x;
    var y = 400;

    function create () {

        game.stage.backgroundColor = "#fff";

        // var background = game.add.sprite(game.world.centerX, game.world.centerY, 'background');
        // background.anchor.setTo(0.5, 0.5);

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

    function render() {

    }

    function fileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {


        text.setText("File Complete: " + progress + "% - " + totalLoaded + " out of " + totalFiles);

        trump = game.add.image(100, y, 'trump');
        opponent = game.add.sprite(1420, y, 'opponent');
        var opponentTween = game.add.tween(opponent);
        opponentTween.to({ y: 150 }, 5000, 'Linear', true, 0);

        trump.scale.set(0.3);
        opponent.scale.set(0.3);

        // game.physics.enable(opponent, Phaser.Physics.ARCADE);
        // opponent.body.y = 250;

        // x += trump.width + 20;
        // x2 += opponent.width + 20;

        text.visible = false;


// var sprite = game.add.sprite(100, 100, 'sprite');    
// var demoTween = game.add.tween(sprite).to({x:400,y:400},1000);    
// demoTween.onComplete.add(function(){        
//     sprite.x = 100; sprite.y = 100;        
//     demoTween.start();    });    
// demoTween.start();
    }

    function loadStart() {

        text.setText("Loading Drumpf...");

    }

    function loadComplete() {

        text.setText("Load Complete");

    }


};