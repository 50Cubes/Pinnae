var GameView = new Class({
	Extends: View,
	initialize: function(windowSize){
		this.parent(windowSize);
		var rep = this.options.rep;
		var title = new Element('h1#title', {
			html: 'Game View'
		});
		rep.adopt(title);

	}
});