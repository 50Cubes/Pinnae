var CutsceneView = new Class( {
	Extends: View,
	initialize: function(windowSize){
		//super init
		this.parent(windowSize);

		//layout
		var rep = this.options.rep; //easy ref to rep

		var cutscene = new Element('div#cutscene.fullscreenImage', {
			styles: {
				'width': this.options.viewSize.x,
				'height': this.options.viewSize.y
			},
			events: {
				touch: this.onPlay.bind(this)
			}
		});
		rep.adopt(cutscene);
		this.playSound('sound/cutscene.mp3', 0, false);
		cutscene.setStyle('background-image', 'url(img/Door_entrance.gif)');
	
		setTimeout(function() {
			this.stopSound('sound/start_screen.mp3');
			event.target.getParent('.view').fireEvent(VIEW_NAV, GameView);
		}.bind(this), 30000);
	},
	onPlay: function(event) {
	}
});