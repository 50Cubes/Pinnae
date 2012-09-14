var RESULT_LEFT = 'L';
var RESULT_CENTER = 'C';
var RESULT_RIGHT = 'R';

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
	initialize: function(options)
	{
		this.options.preSound = options.preSound;
		this.options.soundDelay = options.soundDelay;
		this.options.postSound = options.postSound;
		this.options.sprite = options.sprite;
		this.options.anxietyChange = options.anxietyChange;
    // this.options.location = options.location;
	}
});