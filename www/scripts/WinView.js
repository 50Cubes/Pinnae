var EndView = new Class({
	Extends: View,
	initialize: function(windowSize){
		//super init
		this.parent(windowSize);

		//layout
		var rep = this.options.rep; //easy ref to rep

		var winScreen = new Element('div#winScreen.fullscreenImage', {
			styles: {
				'width': this.options.viewSize.x,
				'height': this.options.viewSize.y
			},
			events: {
				touch: this.onPlay.bind(this)
			}
		});
		rep.adopt(winScreen);
		winScreen.addCssAnimation('fadeIn');

		this.playSound('sound/start_screen.mp3', 32000, true);
	},
	onPlay: function(event) {
		this.stopSound('sound/start_screen.mp3');
		event.target.getParent('.view').fireEvent(VIEW_NAV, GameView);
	}
});