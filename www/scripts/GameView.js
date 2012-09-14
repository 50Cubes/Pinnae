var GameView = new Class({
	Extends: View,
	initialize: function(windowSize){	  
	  this.options.player = new Player();
		this.parent(windowSize);
		var rep = this.options.rep;
		var title = new Element('h1#title', {
			html: 'Game View'
		});
		rep.adopt(title);
		this.enterRoom();
	},
	enterRoom: function(){
	  this.playSound('sound/creek.mp3', 1000);
	  this.playSound('sound/keys.mp3', 1500);
	  this.playSound('sound/snarl.mp3', 2000);
	},
	playSound: function(soundFilePath, speed){
	  var media = new Media(soundFilePath, mediaSuccess, mediaError);
    media.play();
    setTimeout(function(){
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
	options:{
	  player : {} 
	}
});