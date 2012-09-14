var GameView = new Class(
{
	Extends: View,
	options: {
		player: {},
		results: []
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
		var anxietyFrame = new Element('div.meterFrame');
		var anxietyMeter = new Element('div.meter');
		rep.adopt(anxietyFrame);
		anxietyFrame.adopt(anxietyMeter);
		//TODO: Inventory UI
		//TODO: Result Selection UI (hide by default with class 'hide', revealed in enterRoom)

		//start game
		this.enterRoom();
	},
	enterRoom: function()
	{
		console.log("enter room");
		
		// pick 3 random Results
		//TODO: get random results (var rand = Number.random(minNum, maxNum);)
		//TODO: set inventoryItem to true for 1 item (should only happen every 3 rooms...or reduce the chance so its around every 3 rooms) 
		//		We will tweak this later to change the length of the game if its too long/short

		var cloned_results = Array.clone(this.options.results);
		
		for (var i=0; i < 3; i++) {
			var rand_result_index = Math.floor(Math.random()*1000) % cloned_results.length;
			var rand_result = this.options.results[rand_result_index];
			
			cloned_results.splice(rand_result_index,1);
			console.log("clone result length:" + cloned_results.length);
			
			var pre_sound = rand_result.options.preSound;
			var sound_delay = rand_result.options.soundDelay;
			
			console.log("rand result index: " + rand_result_index + "; presound: " + pre_sound + "; sound_delay: "+sound_delay);
			this.playSound(pre_sound, sound_delay);
		}

		//play sounds for this room
		//TODO: use random results instead of hardcoded ones (result.preSound, result.soundDelay)
		/*
		this.playSound('sound/creeek.mp3', 2000);
		this.playSound('sound/keys.mp3', 2500);
		this.playSound('sound/snarl.mp3', 3000);
		*/

		//TODO: Unhide selection UI

		// setTimeout(this.onGameOver.bind(this), 5000);//REMOVE THIS: Forces the game to be over in 5 seconds

	},
	chooseResult: function(result) {
		// display result (result.sprite)

		//TODO: Update anxiety (result.anxiety)
		var player = this.options.player;
		//update player property
		player.options.anxiety -= result.anxiety;
		//update meter
		$('.meter').attr('height', player.options.anxiety);
	},
	playSound: function(soundFilePath, speed)
	{
		//TODO: Separate starting the loop from playing the sound so that all three sounds dont play at once the first time
	
		if($(document.body).hasClass('device'))
		{
			var media = new Media(soundFilePath, mediaSuccess, mediaError);
			media.play();
		} else {
			var media = document.createElement('audio');
			media.setAttribute('src', soundFilePath);
			media.play();
		}
		
		//TODO: add a random variation(+/- 500ms) to the speed so that its not always the same repeat pattern
		variation = Math.floor((Math.random()*1000)+1) - 500; //random between -500 to +500 msec
		
		speed += variation;
		
		setTimeout(function()
		{
			this.playSound(soundFilePath, speed);
		}.bind(this), speed);

		function mediaSuccess()
		{
			console.log('sucess');
		}

		function mediaError()
		{
			alert('mediaError');
		}
	},
	onGameOver: function() {
		this.options.rep.fireEvent(VIEW_NAV, EndView);
	}
});