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
		//TODO: Inventory UI
		//TODO: Result Selection UI (hide by default with class 'hide', revealed in enterRoom)

		//start game
		this.enterRoom();
	},
	enterRoom: function()
	{
		// pick 3 random Results
		//TODO: get random results (var rand = Number.random(minNum, maxNum);)
		//TODO: set inventoryItem to true for 1 item (should only happen every 3 rooms...or reduce the chance so its around every 3 rooms) 
		//		We will tweak this later to change the length of the game if its too long/short


		//play sounds for this room
		//TODO: use random results instead of hardcoded ones (result.preSound, result.soundDelay)
		this.playSound('sound/creeek.mp3', 2000);
		this.playSound('sound/keys.mp3', 2500);
		this.playSound('sound/snarl.mp3', 3000);

		//TODO: Unhide selection UI

		// setTimeout(this.onGameOver.bind(this), 5000);//REMOVE THIS: Forces the game to be over in 5 seconds

	},
	chooseResult: function(result) {
		// display result (result.sprite)

		//
	},
	playSound: function(soundFilePath, speed, variation)
	{
		console.log("variation: " + variation);
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
		
		setTimeout(function()
		{
			this.playSound(soundFilePath, speed, variation);
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