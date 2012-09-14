var RESULT_LEFT = 'L';
var RESULT_CENTER = 'C';
var RESULT_RIGHT = 'R';

var Result = new Class({
  Implements: Options,
	options:{
		preSound: '',
		postSound: '',
		soundDelay: '',
		sprite: '',
		anxietyChange: 0,
		location: RESULT_LEFT
	}
});