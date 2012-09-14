var RESULT_LEFT = 0;
var RESULT_CENTER = 1;
var RESULT_RIGHT = 2;

var Result = new Class({
	Implements: Options,
	options:{
		preSound: '',
		soundDelay: '',
		postSound: '',
		sprite: '',
		anxietyChange: 0,
		location: RESULT_LEFT,
		inventoryItem: false
	},
	initialize: function(data)
	{
		this.options.preSound = data.preSound;
		this.options.soundDelay = data.soundDelay;
		this.options.postSound = data.postSound;
		this.options.sprite = data.sprite;
		this.options.anxietyChange = data.anxietyChange;
	}
});