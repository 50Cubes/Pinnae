var MenuView = new Class( {
	Extends: View,
	initialize: function(windowSize){
		//super init
		this.parent(windowSize);

		//layout
		var rep = this.options.rep; //easy ref to rep

		var startScreen = new Element('div#startScreen.fullscreenImage', {
			styles: {
				'width': this.options.viewSize.x,
				'height': this.options.viewSize.y
			},
			events: {
				touch: this.onPlay.bind(this)
			}
		});
		rep.adopt(startScreen);
		startScreen.addCssAnimation('fadeIn');

		this.playSound('sound/start_screen.mp3', 160000, true);

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
		event.target.getParent('.view').fireEvent(VIEW_NAV, CutsceneView);
	}
});