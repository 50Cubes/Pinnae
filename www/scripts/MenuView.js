var MenuView = new Class({
	Extends: View,
	initialize: function(windowSize){
		this.parent(windowSize);
		var rep = this.options.rep;
                         
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

	},
	onPlay: function(event) {
		event.target.getParent('.view').fireEvent(VIEW_NAV, GameView);
	}
});