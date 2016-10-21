window.onload = function() {


    var game = new Phaser.Game(1920, 1080, Phaser.AUTO, '', { preload: preload, create: create, render: render });

    function preload () {

        game.load.image('logo', 'assets/images/160716123606-trump-pence-new-logo-large-169.jpg');
        game.load.image('button', 'assets/images/pressing-start-and-the-games-that-never-stop_f5qb.jpg');
        // game.load.image('background', 'css/images/FLA20121022316_md.jpg');

        game.load.image('trump', 'assets/trumpHead.png');
        game.load.image('woman', 'assets/womanHead.png');
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
    var button;
    var background;
    var trump;
    var trumpHealth = 10;
    var opponentHealth = 5;
    var opponent;
    var click = 0;
    var x;
    var y = 400;

    function create () {

        game.stage.backgroundColor = "#fff";

        graphics = game.add.graphics(0, 980);

        // var background = game.add.sprite(game.world.centerX, game.world.centerY, 'background');
        // background.anchor.setTo(0.5, 0.5);

        game.load.onLoadStart.add(loadStart, this);
        // game.load.onFileComplete.add(fileComplete, this);
        game.load.onLoadComplete.add(fileComplete, this);

        text = game.add.text(32, 32, 'Click to start Drumpf', { fill: '#000' });
        button = game.add.button(game.world.centerX - 95, 400, 'button', start, this, 2, 1, 0);
        button.anchor.setTo(0.5, 0.5);

        // graphics.lineStyle(2, 0x0000FF, 1);
        // graphics.beginFill(0xFF3300);

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

        // text.setText("File Complete: " + progress + "% - " + totalLoaded + " out of " + totalFiles);
        graphics.lineStyle(4, 000, 1);
        graphics.drawRect(0, 0, 1890, 100);

        textAttack = game.add.text(360, 1015, 'Click to start Drumpf', { fill: '#000' });
        textAttack2 = game.add.text(720, 1015, 'Click to start Drumpf', { fill: '#000' });
        textAttack3 = game.add.text(1080, 1015, 'Click to start Drumpf', { fill: '#000' });

        textAttack.inputEnabled = true;
        textAttack2.inputEnabled = true;
        textAttack3.inputEnabled = true;

        textAttack.events.onInputDown.add(startAttack, this);
        textAttack2.events.onInputDown.add(startAttack, this);
        textAttack3.events.onInputDown.add(startAttack, this);

        trump = game.add.image(100, y, 'trump');
        opponent = game.add.sprite(1420, y, 'woman');
        var opponentTween = game.add.tween(opponent);
        opponentTween.to({ y: 150 }, 1500, 'Linear', true, 0);

        trump.scale.set(1.5);
        opponent.scale.set(1.5);

        // game.physics.enable(opponent, Phaser.Physics.ARCADE);
        // opponent.body.y = 250;

        // x += trump.width + 20;
        // x2 += opponent.width + 20;

        text.visible = false;

    }

    function startAttack() {

        click++;
        console.log(click);

        // var tween = this.add.tween(press).to( { alpha: 1 }, 800, "Linear", false, 6000);
        // tween.to( { alpha: 0 }, 800, "Linear", false, 100);
        // tween.loop(true);
        // tween.start();

        var trumpTween = game.add.tween(trump).to({ x: 350 }, 500, 'Linear', true, 0).to({ x: x }, 1500, 'Linear', true, 0);

        // trumpTween.loop(true);
        trumpTween.start();

    }

    function loadStart() {

        text.setText("Loading Drumpf...");

    }

    function loadComplete() {

        text.setText("Load Complete");

    }


};