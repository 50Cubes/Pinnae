var GameView = new Class(
{
	Extends: View,
	options: {
		player: {},
		results: [],
		sounds: [],
		roomResults: []
	},
	initialize: function(windowSize)
	{
		//setup
		this.options.player = new Player();
		//TODO: generate random options (new Result)
		var results = this.options.results;
		Array.each(RESULTS_CONFIG, function(item, index, object){
			results.push(new Result(item));
		});

		//super init
		this.parent(windowSize);

		//layout
		var rep = this.options.rep;
		var title = new Element('h1#title', {
			html: 'Game View'
		});
		rep.adopt(title);
		
		//TODO: Anxiety Meter
		var anxietyFrame = new Element('div#meterFrame.hidden');
		var anxietyMeter = new Element('div#meter');
		anxietyMeter.setStyle('height', this.options.player.options.anxiety + '%');
		rep.adopt(anxietyFrame);
		anxietyFrame.adopt(anxietyMeter);
		//TODO: Inventory UI
		var bottomUi = new Element('div#bottomUi.hidden');
		var invContainer = new Element('div#invContainer');
		var inv0 = new Element('div#inv0.inv');
		var inv1 = new Element('div#inv1.inv');
		var inv2 = new Element('div#inv2.inv');
		rep.adopt(bottomUi);
		bottomUi.adopt(invContainer);
		invContainer.adopt(inv0);
		invContainer.adopt(inv1);
		invContainer.adopt(inv2);

		//TODO: Result Selection UI (hide by default with class 'hide', revealed in enterRoom)
		var goLeft = new Element('div#goLeft.go.hidden');
		var goCenter = new Element('div#goCenter.go.hidden');
		var goRight = new Element('div#goRight.go.hidden');
		goLeft.addEvent("click", this.onGo.bind(this));
		goCenter.addEvent("click", this.onGo.bind(this));
		goRight.addEvent("click", this.onGo.bind(this));
		
		rep.adopt(goLeft);
		rep.adopt(goCenter);
		rep.adopt(goRight);


		//start game
		setTimeout(function() {
			this.onHeartbeat();
			this.enterRoom();
		}.bind(this), 500);
	},
	enterRoom: function()
	{
		console.log("enter room");
		this.options.roomResults = [];
		// pick 3 random Results
		//TODO: get random results (var rand = Number.random(minNum, maxNum);)
		//TODO: set inventoryItem to true for 1 item (should only happen every 2 rooms...or reduce the chance so its around every 2 rooms) 
		//		We will tweak this later to change the length of the game if its too long/short

		var cloned_results = this.options.results.slice(0);
		for (var i=0; i < 3; i++) {
			var rand_result_index = Math.floor(Math.random()*1000) % cloned_results.length;
			var rand_result = cloned_results[rand_result_index];
			this.options.roomResults.push(rand_result);
			cloned_results.splice(rand_result_index,1);
			console.log("clone result length:" + cloned_results.length);
			
			var pre_sound = rand_result.options.preSound[i];
			var sound_delay = rand_result.options.soundDelay;
			
			console.log("rand result index: " + rand_result_index + "; presound: " + pre_sound + "; sound_delay: "+sound_delay);
			this.playSound(pre_sound, sound_delay, true);
		}

		//TODO: Unhide selection UI
		$('meterFrame').removeClass('hidden');
		$('bottomUi').removeClass('hidden');
		$$('.go').removeClass('hidden');

		//TODO: Increase anxiety the longer you're in the room without making deciscion,
	},
	onHeartbeat: function() {
		this.playSound('sound/heartbeat.mp3');
		var calmPercentage = 100 - this.options.player.options.anxiety;
		var nextBeat = calmPercentage * 5000;
		setTimeout(this.onHeartbeat.bind(this), nextBeat);
	},
	onGo: function(event) {
		var id = event.target.id;
		var target = '';
		switch(id)
		{
			case 'goLeft' :
				target = RESULT_LEFT;
				break;
			case 'goCenter' :
				target = RESULT_CENTER;
				break;
			case 'goRight' :
				target = RESULT_RIGHT;
				break;
		}
		this.chooseResult(target);
	},
	chooseResult: function(direction) {
		//hide ui
		$('meterFrame').addClass('hidden');
		$('bottomUi').addClass('hidden');
		$$('.go').addClass('hidden');

		//clear the previous room's presounds
		for(var i = 0; i < this.options.roomResults.length; i++)
		{
			var roomResult = this.options.roomResults[i];
			
			this.stopSound(this.options.sounds[roomResult.options.preSound]);
		}

		var result = this.options.roomResults[direction];
		this.playSound(result.options.postSound[direction]);

		// display result (result.sprite)
		//TODO: fade in effect
		var rep = this.options.rep;
		var sprite = new Element('img', {
			src: result.options.sprite
		});
		rep.adopt(sprite);

		var player = this.options.player;
		//update player anxiety
		player.options.anxiety += result.options.anxietyChange;
		//update meter
		$('meter').setStyle('height', player.options.anxiety + '%');

		if(player.options.anxiety >= 100)
			this.onGameOver();

		//transition  
		//TODO: fade out effect
		setTimeout(this.enterRoom.bind(this),10000);
	},
	stopSound: function(sound) {
		if (!sound) return;
		
		if(typeof sound.stop === 'function') //cordova
			sound.stop();
		else {
			sound.pause();
			if(sound.currentTime !== 0)
				sound.currentTime = 0;
		}
	},
	playSound: function(soundFilePath, speed, loop)
	{
		//TODO: Separate starting the loop from playing the sound so that all three sounds dont play at once the first time
	    var sounds = this.options.sounds;
		if(sounds[soundFilePath])
		{
			this.stopSound(sounds[soundFilePath]);
		}
		else
		{
		  if($(document.body).hasClass('device'))
		  {
			var media = new Media(soundFilePath, mediaSuccess, mediaError);
		  }
		  else
		  {
		  	var media = document.createElement('audio');
		    media.setAttribute('src', soundFilePath);
		  }
		  sounds[soundFilePath] = media;
		}
		sounds[soundFilePath].play();
		
		function mediaSuccess()
		{
			console.log('sucess');
		}

		function mediaError()
		{
			alert('mediaError');
		}

		if(loop)
		{
			//TODO: add a random variation(+/- 500ms) to the speed so that its not always the same repeat pattern
			variation = Math.floor((Math.random()*1000)+1) - 500; //random between -500 to +500 msec
			
			var newSpeed = speed + variation;
			
			setTimeout(function()
			{
				this.playSound(soundFilePath, speed, loop);
			}.bind(this), newSpeed);
		}
	},
	onGameOver: function() {
		this.options.rep.fireEvent(VIEW_NAV, EndView);
	}
});