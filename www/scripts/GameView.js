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



		//play sounds for this room
		//TODO: use random results instead of hardcoded ones (result.preSound, result.soundDelay)
		this.playSound('sound/creek.mp3', 1000);
		this.playSound('sound/keys.mp3', 1500);
		this.playSound('sound/snarl.mp3', 2000);

		//TODO: Unhide selection UI

	},
	playSound: function(soundFilePath, speed)
	{
		var media = new Media(soundFilePath, mediaSuccess, mediaError);
		media.play();
		setTimeout(function()
		{
			this.playSound(soundFilePath, speed);
		}, speed);

		function mediaSuccess()
		{
			console.log('sucess');
		}

		function mediaError()
		{
			alert('mediaError');
		}
	}
});