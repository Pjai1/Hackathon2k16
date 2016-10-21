window.onload = function() {

    var game = new Phaser.Game(640, 480, Phaser.AUTO, '', { preload: preload, create: create, render: render, update: update });

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
    var textTrumpHP;
    var textOpponentHP;
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

        textTrumpHP = game.add.text(70, 160, "HP: " + trumpHealth + "/10", { fill: '#000', fontSize: '18px' });
        textTrumpHP.visible = false;
        game.add.tween(textTrumpHP).to({visible: true}, 1500, Phaser.Easing.Default, true, 2000);
        textOpponentHP = game.add.text(520, 150, "HP: " + opponentHealth + "/5", { fill: '#000', fontSize: '18px' });
        textOpponentHP.visible = false;
        game.add.tween(textOpponentHP).to({visible: true}, 1500, Phaser.Easing.Default, true, 2000);

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

        // text.visible = false;

    }

    function start() {

        game.load.start();

        button.visible = false;

    }

    function update() {

    }

    function render() {

    }

    function fileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {

        // text.setText("File Complete: " + progress + "% - " + totalLoaded + " out of " + totalFiles);

    }

    function startAttack() {

        click++;
        console.log(click);
        opponentHealth--;
        textOpponentHP.setText("HP: " + opponentHealth + "/5");

        var trumpTween = game.add.tween(trump).to({ x: 450 }, 150, 'Linear').to({ x: 50 }, 1500, 'Linear').start();

    }

    function loadStart() {

        text.setText("Loading Drumpf...");

    }

    function loadComplete() {

        text.setText("Load Complete");

    }


};