window.onload = function() {

    var game = new Phaser.Game(632, 620, Phaser.AUTO, "game", { preload: preload, create: create });

    function preload () {

        allSounds = [];

        game.load.image('arrow', 'assets/images/arrow.gif');

            
        game.load.audio('Mexico will pay', 'assets/audio/AndMexicoWillPayForTheWall.mp3')
        allSounds.push("Mexico will pay");
        game.load.audio('Blood', 'assets/audio/BloodCommingOutOfHerEyes.mp3');
        allSounds.push("Blood");
        game.load.audio("You're not a nice person", 'assets/audio/ButMrTrumpYouAreNotANicePerson.mp3');
        allSounds.push("You're not a nice person");
        game.load.audio('Stupid people', 'assets/audio/FreeTradeCanBeWonderFullIfYouHaveSmartPeopleButWeHavePeopleWhoAreStupid.mp3');
        allSounds.push("Stupid people");
        game.load.audio('Pussy', 'assets/audio/GrabThemByThePussy.mp3');
        allSounds.push("Pussy");
        game.load.audio('Warhero', 'assets/audio/HeIsAWarHeroCauseHeGotCaptured.mp3');
        allSounds.push("Warhero");
        game.load.audio('Nice person', 'assets/audio/IAmANicePerson.mp3');
        allSounds.push("Nice person");
        game.load.audio('Running', 'assets/audio/IAmOfficiallyRunning.mp3');
        allSounds.push("Running");
        game.load.audio('Beat China', 'assets/audio/IBeatChinaAllTheTime.mp3');
        allSounds.push("Beat China");
        game.load.audio('Money', 'assets/audio/IDontNeedAnybodiesMoneyImReallyRitch.mp3');
        allSounds.push("Money");
        game.load.audio('Date my daughter', 'assets/audio/IfIvakaWerntMyDoughterPerhapsIdBeDatingHer.mp3');
        allSounds.push("Date my daughter");
        game.load.audio('Tremendous success', 'assets/audio/IHaveHadTremendousSuccess.mp3');
        allSounds.push("Tremendous success");
        game.load.audio('I Like China', 'assets/audio/ILikeChina.mp3');
        allSounds.push("I Like China");
        game.load.audio('Terrible president', 'assets/audio/IThinkHillaryWouldBeATerriblePresident.mp3');
        allSounds.push("Terrible president");
        game.load.audio("Don't have a clue", 'assets/audio/OurPeopleDontHaveAClue.mp3');
        allSounds.push("Don't have a clue");
        game.load.audio('Anything to say', 'assets/audio/ProbablyMabeySheWasentAllowedToHaveAnythingToSay.mp3');
        allSounds.push("Anything to say");
        game.load.audio('Nasty woman', 'assets/audio/SuchANastyWoman.mp3');
        allSounds.push("Nasty woman");
        game.load.audio('ObamaCare', 'assets/audio/TheBigLieObamaCare.mp3');
        allSounds.push("ObamaCare");
        game.load.audio('Rapists', 'assets/audio/TheyBringInDrugsTheyBringInCrimeTheyAreRapists.mp3');
        allSounds.push("Rapists");
        game.load.audio('Stupid', 'assets/audio/WeHavePeopleThatAreStupid.mp3');
        allSounds.push("Stupid");
        game.load.audio('Refugees', 'assets/audio/WeHaveToCreateListsForTheSyrianRefugees.mp3');
        allSounds.push("Refugees");
        game.load.audio('Jobs', 'assets/audio/WeNeedSomebodyThatCanTakeYourJobsBack.mp3');
        allSounds.push("Jobs");
        game.load.audio('What I say', 'assets/audio/WhatISayIsWhatISay.mp3');
        allSounds.push("What I say");
        game.load.audio('Beat Mexico', 'assets/audio/WhenDoWeBeatMexicoAtTheBorder.mp3');
        allSounds.push("Beat Mexico");
        game.load.audio("We'll pay", 'assets/audio/WhyNotWeAreStupidComeInWeWillPay.mp3');
        allSounds.push("We'll pay");
        game.load.audio('Do a good job', 'assets/audio/YouAreGoingToMakeTheSameIfYouDoAsGoodAJob.mp3');
        allSounds.push("Do a good job");
    }

    function create () {

        game.stage.backgroundColor = "#fff";

        evenOrOdd = 1;
        verticalCounter = 1;

        allSounds.forEach(function(s)
        {
            number = s;
            
            s = game.add.text(evenOrOdd*120, 0 + verticalCounter*45, s, { fill: '#283681', fontSize: '18px' });
            s.inputEnabled = true;
            s.input.useHandCursor = true;

            s.data.arrow = game.add.image(evenOrOdd*120 - 20, verticalCounter*45, 'arrow');
            s.data.arrow.scale.set(0.1);
            s.data.arrow.visible = false;

            s.events.onInputDown.add(playSound, {param: number});
            s.events.onInputOver.add(showArrow);
            s.events.onInputOut.add(hideArrow);

            if (evenOrOdd == 1)
            {
                evenOrOdd = 3;
            }
            else
            {
                evenOrOdd = 1;
                verticalCounter++;
            }
        });


        

    }

    function start() {

        game.load.start();

    }

    function playSound(e)
    {
        game.sound.stopAll();
        sound = this.param;
        console.log(sound);
        game.add.audio(sound).play();
    }

    function showArrow(e)
    {
        e.data.arrow.visible = true;
    }

    function hideArrow(e)
    {
        e.data.arrow.visible = false;
    }
};