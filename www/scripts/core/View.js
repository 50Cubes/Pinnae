var VIEW_NAV = 'VIEW_NAV';
var SOUND_PLAYED = 'SOUND_PLAYED';

var View = new Class({
	Implements: [Options, Events],
	options: {
		rep: {},
		viewSize: {},
		sounds: {},
		soundTimers: {},
		deffered: {}
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
	stopAllSounds: function() {
		Object.each(this.options.sounds, function(item, key, object){
			this.stopSound(key);
			delete this.options.sounds[key];
		}.bind(this));
	},
	stopSound: function(soundFilePath)
	{
		// console.log("stopSound:", soundFilePath);
		var sound = this.options.sounds[soundFilePath];

		if (!sound) return;

		if (typeof sound.stop === 'function')
		{ //cordova
			// console.log("stop sounds 1: soundFilePath: " + soundFilePath);
			sound.stop();
		}
		else
		{
			// console.log("stop sounds 2: soundFilePath: " + soundFilePath);
			sound.pause();
			if (sound.currentTime !== 0) sound.currentTime = 0;
		}
		this.removeSoundTimer(soundFilePath);
	},
	playSound: function(soundFilePath, speed, loop)
	{
		// console.log("playSound: " + soundFilePath);
		var media = this.options.sounds[soundFilePath];
		if (media)
		{
			this.stopSound(soundFilePath);
		}
		else
		{
			if ($(document.body).hasClass('device'))
			{
				media = new Media(soundFilePath, mediaSuccess, mediaError);
			}
			else
			{
				media = document.createElement('audio');
				media.setAttribute('src', soundFilePath);
			}
			this.options.sounds[soundFilePath] = media;
		}
		media.play();

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
			if(this.options.deffered[soundFilePath])
				speed = this.randSpeed(this.options.deffered[soundFilePath]);
			this.loopSound(soundFilePath, speed);
		}
	},
	deferSound: function(soundFilePath, speed){
		//random varition on any deffered sound
		var newSpeed = this.randSpeed(speed);
		// console.log('newSpeed:', newSpeed);
		this.options.deffered[soundFilePath] = speed;
		this.loopSound(soundFilePath, newSpeed);
	},
	randSpeed: function(speed) {
		return Number.random(speed * 0.5, speed * 2);
	},
	loopSound: function(soundFilePath, speed) {
		// console.log('speed:', speed);
		var timer = setTimeout(function()
		{
			this.playSound(soundFilePath, speed, true);
			// console.log('loopSound:', soundFilePath);
			this.fireEvent(SOUND_PLAYED, soundFilePath);
		}.bind(this), speed);
		this.removeSoundTimer(soundFilePath);
		this.options.soundTimers[soundFilePath] = timer;
	},
	removeSoundTimer: function(soundFilePath){
		if(this.options.soundTimers[soundFilePath])
		{
			clearTimeout(this.options.soundTimers[soundFilePath]);
			delete this.options.soundTimers[soundFilePath];
		}
	}
});