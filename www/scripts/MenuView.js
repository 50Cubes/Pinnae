var MenuView = new Class( {
	Extends: View,
	initialize: function(windowSize){
		//super init
		this.parent(windowSize);

		//layout
		var rep = this.options.rep; //easy ref to rep

		var title = new Element('h1#title', {
			html: 'Herbert Pinnae'
		});
		rep.adopt(title);
		title.addCssAnimation('fadeIn');

		var playButton = new Element('div.start', {
			text: 'Play',
			events: {
				touch: this.onPlay.bind(this)
			}
		});
		rep.adopt(playButton);
		playButton.addCssAnimation('fadeIn');
	
		this.playSound('sound/start_screen.mp3', 32000, true);

		var headphonesIntro = new Element('div#headphones.fullscreenImage', {
			styles: {
				'width': this.options.viewSize.x,
				'height': this.options.viewSize.y
			}
		});
		rep.adopt(headphonesIntro);
		headphonesIntro.addCssAnimation('fadeOut');
	
		setTimeout(function() {
			headphonesIntro.dispose();
		}, 5000);
	},
	onPlay: function(event) {
		this.stopSound('sound/start_screen.mp3');
		event.target.getParent('.view').fireEvent(VIEW_NAV, GameView);
	}
});