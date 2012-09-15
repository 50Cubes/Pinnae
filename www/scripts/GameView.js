var GameView = new Class(
{
	Extends: View,
	options: {
		player: {},
		badResults: [],
		goodResults: [],
		sounds: [],
		roomResults: [],
		roomResultsSoundTimers: [],
		isHitByMonster: false,
		lastDirection: -1,
		heartbeatInterval: null
	},
	initialize: function(windowSize)
	{
		//setup
		this.options.player = new Player();
		//TODO: generate random options (new Result)
		var badResults = this.options.badResults;
		var goodResults = this.options.goodResults;
		Array.each(RESULTS_CONFIG.good, function(item, index, object){
				goodResults.push(new Result(item));
		});

		Array.each(RESULTS_CONFIG.bad, function(item, index, object){
			  badResults.push(new Result(item));
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


		//start game timeout (for some reason need to wait to initiate game)
		setTimeout(function()
		{
			this.changeAnxiety(0);
			this.enterRoom();
		}.bind(this), 100);
	},
	enterRoom: function()
	{
		if ($('reveal_img'))
		{
			$('reveal_img').dispose();
		}

		console.log("######## enter room ##########");
		if (!this.options.isHitByMonster)
		{ //if not hit bad monster last time, reset everything.
			console.log("========== NOT HIT BY Monster~~~ ========");
			this.options.roomResults = [];
			// pick 3 random Results
			//TODO: get random results (var rand = Number.random(minNum, maxNum);)
			//TODO: set inventoryItem to true for 1 item (should only happen every 2 rooms...or reduce the chance so its around every 2 rooms) 
			//		We will tweak this later to change the length of the game if its too long/short
			
			if (-1 != this.options.lastDirection)
			{
			  //footsteps sound
			  this.playSound(FOOTSTEPS, 0, false);
		  }
		  
			var rand_result_index = Math.floor(Math.random() * 10) % this.options.goodResults.length;
			this.options.roomResults.push(this.options.goodResults[rand_result_index]);			
			var cloned_results = this.options.badResults.slice(0);
			for (var i = 0; i < cloned_results.length; i++)
			{
				var rand_result_index = Math.floor(Math.random() * 1000) % cloned_results.length;
				var rand_result = cloned_results[rand_result_index];				
				if(rand_result.options.name != this.options.roomResults[0].options.name)
				{
				  this.options.roomResults.push(rand_result);
				  if(this.options.roomResults.length >= 3)
				  {
					break;
				  }
				}
				cloned_results.splice(rand_result_index, 1);
			}
			shuffle(this.options.roomResults);
			for(var i = 0; i < this.options.roomResults.length; i++)
			{				
			  this.deferSound(this.options.roomResults[i].options.preSound[i], this.options.roomResults[i].options.soundDelay, true);	
			}
		}
		else
		{
			console.log("========== HIT BY Monster replay same room!!!! ========");
			
			if (-1 != this.options.lastDirection)
			{
			  //slamdoor sound
			  this.playSound(DOOR_SLAMMING[this.options.lastDirection], 0, false);
			}
			
			if (this.options.player.options.anxiety >= 100)
			{
				this.onGameOver();
				return;
			}

			for(var i = 0; i < this.options.roomResults.length; i++)
			{
			  this.deferSound(this.options.roomResults[i].options.preSound[i], this.options.roomResults[i].options.soundDelay, true);	
			}
		}
		this.options.isHitByMonster = false;


		//TODO: Unhide selection UI
		$('meterFrame').removeClass('hidden');
		$('bottomUi').removeClass('hidden');
		$$('.go').removeClass('hidden');

		//TODO: Increase anxiety the longer you're in the room without making deciscion,
	},
	changeAnxiety: function(change) {
		//set value
		if(change > 0)
			this.options.player.options.anxiety += change;

		//update heartbeat interval
		var calmPercentage = (100 - this.options.player.options.anxiety) / 100;
		console.log('calmPercentage:', calmPercentage);
		var nextBeat = calmPercentage * 3000;
		console.log('nextBeat:', nextBeat);
		this.playSound('sound/heartbeat.mp3', nextBeat, true);
	},
	onGo: function(event)
	{
		var id = event.target.id;
		var target = '';
		switch (id)
		{
		case 'goLeft':
			target = RESULT_LEFT;
			break;
		case 'goCenter':
			target = RESULT_CENTER;
			break;
		case 'goRight':
			target = RESULT_RIGHT;
			break;
		}
		this.options.lastDirection = target;
		this.chooseResult(target);
	},
	chooseResult: function(direction)
	{
		//hide ui
		$('meterFrame').addClass('hidden');
		$('bottomUi').addClass('hidden');
		$$('.go').addClass('hidden');

		//clear the previous room's presounds
		for (var i = 0; i < this.options.roomResultsSoundTimers.length; i++)
		{
			clearTimeout(this.options.roomResultsSoundTimers[i]);
		}
		this.options.roomResultsSoundTimers = [];

		//stop the roomResult's sounds
		for (var i = 0; i < this.options.roomResults.length; i++)
		{
			var roomResult = this.options.roomResults[i];

			this.stopSound(this.options.sounds[roomResult.options.preSound[i]], roomResult.options.preSound[i]);
		}
    
    if (-1 != this.options.lastDirection)
		{
      //open door sound
		  this.playSound(DOOR_CREAKING[this.options.lastDirection], 0, false);
    }
    
		var result = this.options.roomResults[direction];

		// display result (result.sprite)
		var rep = this.options.rep;
		var sprite = new Element('div#reveal_img.fullscreenImage', {
			styles: {
				'width': this.options.viewSize.x,
				'height': this.options.viewSize.y
			}
		});
		rep.adopt(sprite);
		sprite.addCssAnimation('fadeIn');
		this.playRevealImage(result.options.sprite[0]);
		if (result.options.sprite.length > 1)
		{
			//play another sprite image
			setTimeout(function()
			{
				this.playRevealImage(result.options.sprite[1]);
				sprite.addCssAnimation('tada');

				this.options.isHitByMonster = false;			
				//after reveal the image, go to the next room
				if (result.options.anxietyChange > 0)
				{
					//replay the last room since you get hit by a monster.
					this.options.isHitByMonster = true;
				}

				//goes to next room

			}.bind(this), 2000);
		}

		this.playSound(result.options.postSound, 0, false);
		
		var player = this.options.player;	
		if(result.options.inventoryItem)
		{	
			$('inv' + player.options.items).addClass('reveal');
			player.options.items++;
			if(player.options.items >= 3)
			{
				this.bossBattle();
				return;
			}
		}

		//update player anxiety
		this.changeAnxiety(result.options.anxietyChange);
		
		if (player.options.anxiety < 0) {
			player.options.anxiety = 0;	
		}
		
		//update meter
		$('meter').setStyle('height', player.options.anxiety + '%');

		setTimeout(this.enterRoom.bind(this), result.options.postDelay);
	},
	playRevealImage: function(image_url)
	{
		console.log("playRevealImage");
		if (!$('reveal_img'))
		{
			var rep = this.options.rep;
			var sprite = new Element('div#reveal_img', {
				styles: {
					'width': this.options.viewSize.x,
					'height': this.options.viewSize.y
				}
			});
			rep.adopt(sprite);
		}

		var image = $('reveal_img');
		image.setStyle('background-image', 'url(' + image_url + ')');
	},
	stopSound: function(sound, sound_path)
	{
		//console.log("calling stop sounds");
		if (!sound) return;

		if (typeof sound.stop === 'function')
		{ //cordova
			console.log("stop sounds 1: sound_path: " + sound_path);
			sound.stop();
		}
		else
		{
			console.log("stop sounds 2: sound_path: " + sound_path);
			sound.pause();
			if (sound.currentTime !== 0) sound.currentTime = 0;
		}
	},
	playSound: function(soundFilePath, speed, loop)
	{
		console.log("playSound: " + soundFilePath);
		//TODO: Separate starting the loop from playing the sound so that all three sounds dont play at once the first time
		var sounds = this.options.sounds;

		if (sounds[soundFilePath])
		{
			this.stopSound(sounds[soundFilePath], soundFilePath);
		}
		else
		{
			if ($(document.body).hasClass('device'))
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

		if (loop)
		{
			this.deferSound(soundFilePath, speed);
		}
	},
	deferSound: function(soundFilePath, speed){
		//random varition on any deffered sound
		variation = Number.random(-2000, 2000);
		console.log('variation:', variation);
		var newSpeed = speed + variation;

		this.options.roomResultsSoundTimers.push(
		setTimeout(function()
		{
			this.playSound(soundFilePath, speed, true);
		}.bind(this), newSpeed));
	},
	onGameOver: function()
	{
		this.options.rep.fireEvent(VIEW_NAV, EndView);
	},
	bossBattle: function()
	{
		//fight the boss
	}
});