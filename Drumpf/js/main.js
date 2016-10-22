window.onload = function() {

    var game = new Phaser.Game(632, 480, Phaser.AUTO, "game", { preload: preload, create: create, render: render, update: update });

    function preload () {

        // game.load.image('logo', 'assets/images/160716123606-trump-pence-new-logo-large-169.jpg');
        // game.load.image('button', 'assets/images/pressing-start-and-the-games-that-never-stop_f5qb.jpg');
        // game.load.image('background', 'css/images/FLA20121022316_md.jpg');

        game.load.image('trump', 'assets/trumpHead.png');
        game.load.image('woman', 'assets/womanGif.gif');
        game.load.image('hilary', 'assets/hillaryGif.gif');
        game.load.image('mexican', 'assets/mexicanGif.gif');
        game.load.image('arrow', 'assets/images/arrow.gif');

        game.load.audio('mex1', 'assets/audio/AndMexicoWillPayForTheWall.mp3');
        game.load.audio('mex2', 'assets/audio/WhenDoWeBeatMexicoAtTheBorder.mp3');
        game.load.audio('mex3', 'assets/audio/IWouldBuildAGreatWall.mp3');

        game.load.audio('hil1', 'assets/audio/BloodCommingOutOfHerEyes.mp3');
        game.load.audio('hil2', 'assets/audio/IThinkHillaryWouldBeATerriblePresident.mp3');
        game.load.audio('hil3', 'assets/audio/ProbablyMabeySheWasentAllowedToHaveAnythingToSay.mp3');

        game.load.audio('wom1', 'assets/audio/GrabThemByThePussy.mp3');
        game.load.audio('wom2', 'assets/audio/NobodyHasMoreRespectForWomenThanIDo.mp3');
        game.load.audio('wom3', 'assets/audio/SuchANastyWoman.mp3');

        game.load.audio('rnd1', 'assets/audio/FreeTradeCanBeWonderFullIfYouHaveSmartPeopleButWeHavePeopleWhoAreStupid.mp3');
        game.load.audio('rnd2', 'assets/audio/HeIsAWarHeroCauseHeGotCaptured.mp3');
        game.load.audio('rnd3', 'assets/audio/IAmANicePerson.mp3');

        game.load.audio('bg_music', 'assets/audio/bg_music.mp3')
        // game.load.audio('arab', []);
        // game.load.audio('woman', []);

    }

    var levelStr = "mex";
    var rndStr = "rnd";
    var soundParam;
    var opponentSpriteValue;
    var rnd;
    var graphics;
    var arrow;
    var textAttack;
    var textAttack2;
    var textAttack3;
    var textAttack4;
    var textTrumpHP;
    var textOpponentHP;
    var victoryBtn;
    var background;
    var trump;
    var trumpHealth = 10;
    var opponentHealth = 5;
    var opponent;
    var click = 0;
    var x;
    var y = 180;
    var p = document.querySelector("p");

    function create () {
                
        var bgMusic = game.add.audio("bg_music")
        bgMusic.volume = 0.05;
        bgMusic.play();
        
        game.stage.backgroundColor = "#fff";
        // victId.style.visibility = "hidden";

        graphics = game.add.graphics(0, 980);

        game.load.onLoadStart.add(loadStart, this);

        setTimeout(function() {

            graphics.lineStyle(5, "0x283681", 1);
            graphics.drawRect(10, -600, 610, 90);

            infoText = game.add.text(10, 10, "DEFEAT YOUR ENEMY!", { fill: '#000', fontSize: '24px' });
            infoTextAttacks = game.add.text(10, 350, "CHOOSE YOUR ATTACK", { fill: '#000', fontSize: '18px' })

            textAttack = game.add.text(120, 395, 'Pay Wall', { fill: '#283681', fontSize: '18px' });
            // textAttack.setAttribute('value', textAttack);
            textAttack2 = game.add.text(360, 395, 'Beat Them At Border', { fill: '#283681', fontSize: '18px' });
            textAttack3 = game.add.text(120, 435, "Build Wall", { fill: '#283681', fontSize: '18px' });
            textAttack4 = game.add.text(360, 435, 'TrumpNation', { fill: '#283681', fontSize: '18px' });

            textAttack.inputEnabled = true;
            textAttack.input.useHandCursor = true;
            textAttack2.inputEnabled = true;
            textAttack2.input.useHandCursor = true;
            textAttack3.inputEnabled = true;
            textAttack3.input.useHandCursor = true;
            textAttack4.inputEnabled = true;
            textAttack4.input.useHandCursor = true;

            textAttack.events.onInputDown.add(startAttack, {param: 1});
            textAttack2.events.onInputDown.add(startAttack, {param: 2});
            textAttack3.events.onInputDown.add(startAttack, {param: 3});
            textAttack4.events.onInputDown.add(startAttack, {param: 4});

        }, 2000);

        textTrumpHP = game.add.text(70, 140, "HP: " + trumpHealth + "/10", { fill: '#283681', fontSize: '18px' });
        textTrumpHP.visible = false;
        game.add.tween(textTrumpHP).to({visible: true}, 1500, Phaser.Easing.Default, true, 2000);
        textOpponentHP = game.add.text(520, 150, "HP: " + opponentHealth + "/5", { fill: '#8A171C', fontSize: '18px' });
        textOpponentHP.visible = false;
        game.add.tween(textOpponentHP).to({visible: true}, 1500, Phaser.Easing.Default, true, 2000);

        arrow = game.add.image(65, 385, 'arrow');
        trump = game.add.image(50, y, 'trump');
        opponentSpriteValue = "mexican";
        opponent = game.add.sprite(520, y, opponentSpriteValue);
        var opponentTween = game.add.tween(opponent);
        opponentTween.to({ y: 50 }, 2000, 'Linear', true, 0);

        trump.scale.set(0.4);
        opponent.scale.set(1.5);
        arrow.scale.set(0.1);

    }

    function start() {

        game.load.start();

        button.visible = false;

    }

    function update() {

    }

    function render() {
        // game.debug.soundInfo(music, 20, 32);
    }

    function fileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {

        // text.setText("File Complete: " + progress + "% - " + totalLoaded + " out of " + totalFiles);

    }

    function startAttack(e) {

        soundParam = this.param;
        rnd = Math.ceil(Math.random()*3);
        click++;
        console.log(soundParam);

        if(soundParam < 4) {
            // e.z-=4;
            music = game.add.audio(levelStr + soundParam);

            music.play();
        }
        else {
            music = game.add.audio(rndStr + rnd);

            music.play();           
        }

        if(opponentHealth != 0) {
            opponentHealth--;
            textOpponentHP.setText("HP: " + opponentHealth + "/5");
        }

        if(opponentHealth == 0) {
            if(opponentSpriteValue == "hilary") {
                console.log("hilary");
                game.world.removeAll();
                victory();
            }

            if(opponentSpriteValue == "woman") {
                opponentSpriteValue = "hilary";
                levelStr = "hil";
                opponentHealth = 5;
                opponent.loadTexture("hilary");
                textOpponentHP.setText("HP: " + opponentHealth + "/5");
                textAttack.setText("Make Her Bleed");
                textAttack2.setText("Maledict Her");
                textAttack3.setText("Shut Her Up");
            }

            if(opponentSpriteValue == "mexican") {
                opponentSpriteValue = "woman";
                levelStr = "wom";
                opponentHealth = 5;
                opponent.loadTexture("woman");
                textOpponentHP.setText("HP: " + opponentHealth + "/5");
                textAttack.setText("Grab Her Pussay");
                textAttack2.setText("Respect Her");
                textAttack3.setText("Nasty Woman");
            }
            // game.world.removeAll();
            // victory();
        }

        var trumpTween = game.add.tween(trump).to({ x: 450 }, 150, 'Linear').to({ x: 50 }, 1500, 'Linear').start();

        setTimeout(function() {
            var opponentTween = game.add.tween(opponent).to({ x: 600}, 150, 'Linear').to({ x: 520}, 500, 'Linear').start();
        }, 130);

        textAttack.events.onInputDown.removeAll();
        textAttack2.events.onInputDown.removeAll();
        textAttack3.events.onInputDown.removeAll();
        textAttack4.events.onInputDown.removeAll();

        setTimeout(function() {
            textAttack.events.onInputDown.add(startAttack, {param: 1});
            textAttack2.events.onInputDown.add(startAttack, {param: 2});
            textAttack3.events.onInputDown.add(startAttack, {param: 3});
            textAttack4.events.onInputDown.add(startAttack, {param: 4});
        }, 2000);

    }

    function victory() {
        window.location = "victory.html#clip";
    }

    function loadStart() {

        text.setText("Loading Drumpf...");

    }

    function loadComplete() {

        text.setText("Load Complete");

    }


};