var MenuView = new Class({
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

		var playButton = new Element('div.start', {
			text: 'Play',
			events: {
				touch: this.onPlay
			}
		});
		rep.adopt(playButton);

		//TODO: Intro Screen (use css animaiton to fade in)
	},
	onPlay: function(event) {
		event.target.getParent('.view').fireEvent(VIEW_NAV, GameView);
	}
});