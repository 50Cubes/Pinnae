var VIEW_NAV = 'VIEW_NAV';

var View = new Class({
	Implements: [Options, Events],
	options: {
		rep: {},
		viewSize: {},
		sounds: {},
		soundTimers: []
	},
	initialize: function (windowSize) {
		this.options.rep = new Element('div.view', {
			styles: {
				width: windowSize.x,
				height: windowSize.y
			}
		});
		this.options.viewSize = windowSize;
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
			this.loopSound(soundFilePath, speed);
		}
	},
	deferSound: function(soundFilePath, speed){
		//random varition on any deffered sound
		var newSpeed = Number.random(speed * 0.5, speed * 2);
		console.log('newSpeed:', newSpeed);
		this.loopSound(soundFilePath, newSpeed);
	},
	loopSound: function(soundFilePath, speed) {
		console.log('speed:', speed);
		this.options.soundTimers.push(
		setTimeout(function()
		{
			this.playSound(soundFilePath, speed, true);
		}.bind(this), speed));
	}
});