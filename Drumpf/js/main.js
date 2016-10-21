window.onload = function() {

    var game = new Phaser.Game(640, 480, Phaser.AUTO, '', { preload: preload, create: create, render: render });

    function preload () {

        // game.load.image('logo', 'assets/images/160716123606-trump-pence-new-logo-large-169.jpg');
        // game.load.image('button', 'assets/images/pressing-start-and-the-games-that-never-stop_f5qb.jpg');
        // game.load.image('background', 'css/images/FLA20121022316_md.jpg');

        game.load.image('trump', 'assets/trumpHead.png');
        game.load.image('woman', 'assets/womanGif.gif');
        game.load.image('hilary', 'assets/hillaryHead.png');
        game.load.image('mexican', 'assets/mexicanHead.png');

        // game.load.audio('mexican', []);
        // game.load.audio('arab', []);
        // game.load.audio('woman', []);

    }

    var graphics;
    var textAttack;
    var textAttack2;
    var textAttack3;
    var textAttack4;
    var button;
    var background;
    var trump;
    var trumpHealth = 10;
    var opponentHealth = 5;
    var opponent;
    var click = 0;
    var x;
    var y = 200;

    function create () {

        game.stage.backgroundColor = "#fff";

        graphics = game.add.graphics(0, 980);

        game.load.onLoadStart.add(loadStart, this);

        graphics.lineStyle(10, 000, 1);
        graphics.drawRect(0, -605, 640, 100);

        textAttack = game.add.text(100, 390, 'Click to start Drumpf', { fill: '#000', fontSize: '18px' });
        textAttack2 = game.add.text(380, 390, 'Click to start Drumpf', { fill: '#000', fontSize: '18px' });
        textAttack3 = game.add.text(100, 440, 'Click to start Drumpf', { fill: '#000', fontSize: '18px' });
        textAttack4 = game.add.text(380, 440, 'Click to start Drumpf', { fill: '#000', fontSize: '18px' });

        textAttack.inputEnabled = true;
        textAttack2.inputEnabled = true;
        textAttack3.inputEnabled = true;
        textAttack4.inputEnabled = true;

        textAttack.events.onInputDown.add(startAttack, this);
        textAttack2.events.onInputDown.add(startAttack, this);
        textAttack3.events.onInputDown.add(startAttack, this);
        textAttack4.events.onInputDown.add(startAttack, this);

        trump = game.add.image(50, y, 'trump');
        opponent = game.add.sprite(520, y, 'woman');
        var opponentTween = game.add.tween(opponent);
        opponentTween.to({ y: 50 }, 2000, 'Linear', true, 0);

        trump.scale.set(0.4);
        opponent.scale.set(1.2);

        text.visible = false;

    }

    function start() {

        game.load.start();

        button.visible = false;

    }

    function render() {

    }

    function fileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {

        // text.setText("File Complete: " + progress + "% - " + totalLoaded + " out of " + totalFiles);

    }

    function startAttack() {

        click++;
        console.log(click);

        var trumpTween = game.add.tween(trump).to({ x: 450 }, 150, 'Linear').to({ x: 100 }, 2000, 'Linear').start();

    }

    function loadStart() {

        text.setText("Loading Drumpf...");

    }

    function loadComplete() {

        text.setText("Load Complete");

    }


};