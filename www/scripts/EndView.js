var EndView = new Class({
	Extends: View,
	initialize: function(windowSize){
		//super init
		this.parent(windowSize);

		//layout
		var rep = this.options.rep; //easy ref to rep

		var title = new Element('h1#title', {
			html: 'Mommy....'
		});
		rep.adopt(title);

		var playButton = new Element('div.start', {
			text: 'Play Again',
			events: {
				touch: this.onPlay
			}
		});
		rep.adopt(playButton);

	},
	onPlay: function(event) {
		event.target.getParent('.view').fireEvent(VIEW_NAV, GameView);
	}
});