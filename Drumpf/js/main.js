window.onload = function() {

    var game = new Phaser.Game(632, 480, Phaser.AUTO, "game", { preload: preload, create: create, render: render, update: update });

    function preload () {

        // game.load.image('logo', 'assets/images/160716123606-trump-pence-new-logo-large-169.jpg');
        // game.load.image('button', 'assets/images/pressing-start-and-the-games-that-never-stop_f5qb.jpg');
        // game.load.image('background', 'css/images/FLA20121022316_md.jpg');

        game.load.image('trump', 'assets/trumpGif.gif');
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

        game.load.audio('boss_music', 'assets/audio/boss_music.mp3');
        game.load.audio('bg_music', 'assets/audio/bg_music.mp3')
        // game.load.audio('arab', []);
        // game.load.audio('woman', []);

    }

    var bgMusic, bossMusic;
    var levelStr = "mex";
    var rndStr = "rnd";
    var soundParam;
    var opponentSpriteValue;
    var rnd;
    var graphics;
    var arrow;
    var arrow2;
    var arrow3;
    var arrow4;
    var textAttack;
    var textAttack2;
    var textAttack3;
    var textAttack4;
    var transText;
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
    var y = 160;
    var p = document.querySelector("p");

    function create () {
                
        bgMusic = game.add.audio("bg_music")
        bgMusic.volume = 0.05;
        bgMusic.play();
        
        game.stage.backgroundColor = "#fff";
        // victId.style.visibility = "hidden";

        graphics = game.add.graphics(0, 0);

        game.load.onLoadStart.add(loadStart, this);

        setTimeout(function() {
            
            graphics.lineStyle(5, 0x283681, 1);
            graphics.drawRect(10, 380, 610, 90);

            // Trump shadow
            graphics.lineStyle(5, 0x283681, 0.8);
            graphics.beginFill(0x000, 0.1);
            graphics.drawEllipse(110, 305, 80, 25);
            graphics.endFill();            

            // Opponent shadow
            graphics.lineStyle(5, 0x8A171C, 0.8);
            graphics.beginFill(0x000, 0.1);
            graphics.drawEllipse(515, 155, 60, 15);
            graphics.endFill();   

            infoText = game.add.text(10, 10, "DEFEAT YOUR ENEMY!", { fill: '#000', fontSize: '24px' });
            infoTextAttacks = game.add.text(10, 355, "CHOOSE YOUR ATTACK", { fill: '#000', fontSize: '18px' })

            textAttack = game.add.text(120, 395, 'Make them pay', { fill: '#283681', fontSize: '18px' });
            // textAttack.setAttribute('value', textAttack);
            textAttack2 = game.add.text(360, 395, 'Border beatdown', { fill: '#283681', fontSize: '18px' });
            textAttack3 = game.add.text(120, 435, "Build wall", { fill: '#283681', fontSize: '18px' });
            textAttack4 = game.add.text(360, 435, 'Rant', { fill: '#283681', fontSize: '18px' });
            transText = game.add.text(180, 200, "You have defeated " + opponentSpriteValue, { fill: '#283681', fontSize: '18px' });
            transText.visible = false;

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

            textAttack.events.onInputOver.add(showArrow, {param: 1});
            textAttack2.events.onInputOver.add(showArrow, {param: 2});
            textAttack3.events.onInputOver.add(showArrow, {param: 3});
            textAttack4.events.onInputOver.add(showArrow, {param: 4});

            textAttack.events.onInputOut.add(hideArrow, {param: 1});
            textAttack2.events.onInputOut.add(hideArrow, {param: 2});
            textAttack3.events.onInputOut.add(hideArrow, {param: 3});
            textAttack4.events.onInputOut.add(hideArrow, {param: 4});

        }, 2000);

        textTrumpHP = game.add.text(70, 120, "HP: " + trumpHealth + "/10", { fill: '#283681', fontSize: '18px' });
        textTrumpHP.visible = false;
        game.add.tween(textTrumpHP).to({visible: true}, 1500, Phaser.Easing.Default, true, 2000);
        textOpponentHP = game.add.text(480, 185, "HP: " + opponentHealth + "/5", { fill: '#8A171C', fontSize: '18px' });
        textOpponentHP.visible = false;
        game.add.tween(textOpponentHP).to({visible: true}, 1500, Phaser.Easing.Default, true, 2000);

        arrow = game.add.image(95, 393, 'arrow');
        arrow2 = game.add.image(95, 433, 'arrow');
        arrow3 = game.add.image(340, 393, 'arrow');
        arrow4 = game.add.image(340, 433, 'arrow');
        trump = game.add.image(50, y, 'trump');
        opponentSpriteValue = "mexican";
        opponent = game.add.sprite(460, y, opponentSpriteValue);
        var opponentTween = game.add.tween(opponent);
        opponentTween.to({ y: 50 }, 2000, 'Linear', true, 0);

        trump.scale.set(2.75);
        opponent.scale.set(2);
        arrow.scale.set(0.1);
        arrow2.scale.set(0.1);
        arrow3.scale.set(0.1);
        arrow4.scale.set(0.1);
        arrow.visible = false;
        arrow2.visible = false;
        arrow3.visible = false;
        arrow4.visible = false;

    }

    function start() {

        game.load.start();


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
                transText.setText("You have defeated " + opponentSpriteValue);
                textTrumpHP.visible = false;
                textOpponentHP.visible = false;
                textAttack.visible = false;
                textAttack2.visible = false;
                textAttack3.visible = false;
                textAttack4.visible = false;
                setTimeout(function() {
                    game.world.removeAll();
                    victory();
                }, 2000);
            }

            if(opponentSpriteValue == "woman") {
                opponentSpriteValue = "women";
                transText.setText("You have defeated the " + opponentSpriteValue);
                opponentSpriteValue = "hilary";
                levelStr = "hil";
                opponentHealth = 5;
                transText.visible = true;
                trump.visible = false;
                opponent.visible = false;
                textTrumpHP.visible = false;
                textOpponentHP.visible = false;
                textAttack.visible = false;
                textAttack2.visible = false;
                textAttack3.visible = false;
                textAttack4.visible = false;
                setTimeout(function() {
                    transText.visible = false;
                    trump.visible = true;
                    opponent.visible = true;
                    textTrumpHP.visible = true;
                    textOpponentHP.visible = true;
                    textAttack.visible = true;
                    textAttack2.visible = true;
                    textAttack3.visible = true;
                    textAttack4.visible = true;
                    opponent.loadTexture("hilary");
                    bgMusic.stop();
                    bossMusic = game.add.audio("boss_music");
                    bossMusic.volume = 0.05;
                    bossMusic.play();
                    textOpponentHP.setText("HP: " + opponentHealth + "/5");
                    textAttack.setText("Make Her Bleed");
                    textAttack2.setText("Maledict Her");
                    textAttack3.setText("Shut Her Up");
                }, 2000);
            }

            if(opponentSpriteValue == "mexican") {
                transText.setText("You have defeated the " + opponentSpriteValue + "s");
                opponentSpriteValue = "woman";
                levelStr = "wom";
                opponentHealth = 5;
                transText.visible = true;
                trump.visible = false;
                opponent.visible = false;
                textTrumpHP.visible = false;
                textOpponentHP.visible = false;
                textAttack.visible = false;
                textAttack2.visible = false;
                textAttack3.visible = false;
                textAttack4.visible = false;
                setTimeout(function() {
                    transText.visible = false;
                    trump.visible = true;
                    opponent.visible = true;
                    textTrumpHP.visible = true;
                    textOpponentHP.visible = true;
                    textAttack.visible = true;
                    textAttack2.visible = true;
                    textAttack3.visible = true;
                    textAttack4.visible = true;
                    opponent.loadTexture("woman");
                    textOpponentHP.setText("HP: " + opponentHealth + "/5");
                    textAttack.setText("Grab Her Pussay");
                    textAttack2.setText("Respect Her");
                    textAttack3.setText("Nasty Woman");
                }, 2000);
            }
            // game.world.removeAll();
            // victory();
        }

        var trumpTween = game.add.tween(trump).to({ x: 450 }, 150, 'Linear').to({ x: 50 }, 1500, 'Linear').start();

        setTimeout(function() {
            var opponentTween = game.add.tween(opponent).to({ x: 560}, 150, 'Linear').to({ x: 460}, 500, 'Linear').start();
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

    function showArrow() {
        if(this.param == 1) {
            arrow.visible = true;
        }

        if(this.param == 2) {
            arrow3.visible = true;
        }

        if(this.param == 3) {
            arrow2.visible = true;
        }

        if(this.param == 4) {
            arrow4.visible = true;
        }
    }

    function hideArrow() {
        if(this.param == 1) {
            arrow.visible = false;
        }

        if(this.param == 2) {
            arrow3.visible = false;
        }

        if(this.param == 3) {
            arrow2.visible = false;
        }

        if(this.param == 4) {
            arrow4.visible = false;
        }
    }

    function loadStart() {

        text.setText("Loading Drumpf...");

    }

    function loadComplete() {

        text.setText("Load Complete");

    }


};