//SOUND GROUPS
var BUBBLER = ['sound/bubbler_pre_L.mp3', 'sound/bubbler_pre_F.mp3', 'sound/bubbler_pre_R.mp3'];
var DROP = ['sound/drop_pre_L.mp3', 'sound/drop_pre_F.mp3', 'sound/drop_pre_R.mp3'];
var FLAP = ['sound/flap_pre_L.mp3', 'sound/flap_pre_F.mp3', 'sound/flap_pre_R.mp3'];
var NIBBLER = ['sound/nibbler_pre_L.mp3', 'sound/nibbler_pre_F.mp3', 'sound/nibbler_pre_R.mp3'];
var SNARL = ['sound/snarl_pre_L.mp3', 'sound/snarl_pre_F.mp3', 'sound/snarl_pre_R.mp3'];
var DOOR_SLAMMING = ['sound/door_slamming_L.mp3', 'sound/door_slamming_F.mp3', 'sound/door_slamming_R.mp3'];
var DOOR_CREAKING = ['sound/door_creaking_L.mp3', 'sound/door_creaking_L.mp3', 'sound/door_creaking_L.mp3'];

//SINGLE SOUNDS
var FOOTSTEPS = 'sound/footsteps.mp3';
var HEARTBEAT = 'sound/heartbeat.mp3';

var RESULTS_CONFIG = {
	good: [
		{
			name: 'bubbler',
			preSound: BUBBLER,
			soundDelay: 6000,
			postSound: 'sound/bubbler_post_good.mp3',
			postDelay: 5000,
			sprite: ['img/Grandpa_rock.jpg'],
			anxietyChange: -10,
			inventoryItem: false
		},
		{
			name: 'drop',
			preSound: DROP,
			soundDelay: 6000,
			postSound: 'sound/drop_post_good.mp3',
			postDelay: 5000,
			sprite: ['img/Grandpa_toilet.jpg'],
			anxietyChange: -10,
			inventoryItem: true
		},
		{
			name: 'drop',
			preSound: DROP,
			soundDelay: 6000,
			postSound: 'sound/drop_post_good.mp3',
			postDelay: 5000,
			sprite: ['img/Grandpa_toilet.jpg'],
			anxietyChange: -10,
			inventoryItem: true
		},

		//Nuetral
		{
			name: 'flap',
			preSound: FLAP,
			soundDelay: 8000,
			postSound: 'sound/flap_post_good.mp3',
			postDelay: 5000,
			sprite: ['img/Neutral_1.jpg'],
			anxietyChange: 0,
			inventoryItem: false
		},
		{
			name: 'flap',
			preSound: FLAP,
			soundDelay: 8000,
			postSound: 'sound/flap_post_good.mp3',
			postDelay: 5000,
			sprite: ['img/Neutral_1.jpg'],
			anxietyChange: 0,
			inventoryItem: false
		},
		{
			name: 'flap',
			preSound: FLAP,
			soundDelay: 8000,
			postSound: 'sound/flap_post_good.mp3',
			postDelay: 5000,
			sprite: ['img/Neutral_1.jpg'],
			anxietyChange: 0,
			inventoryItem: false
		}
	],

	bad: [

		{
			name: 'nibbler',
			preSound: NIBBLER,
			soundDelay: 8000,
			postSound: 'sound/nibbler_post_bad.mp3',
			postDelay: 5000,
			sprite: ['img/Monster_hamster1.jpg','img/Monster_hamster2.jpg '],
			anxietyChange: 10,
			inventoryItem: false	
		},
		{
			name: 'snarl',
			preSound: SNARL,
			soundDelay: 8000,
			postSound: 'sound/snarl_post_bad.mp3',
			postDelay: 5000,
			sprite: ['img/Monster_tiger1.jpg','img/Monster_tiger2.jpg'],
			anxietyChange: 10,
			inventoryItem: false	
		},
		{
			name: 'snarl',
			preSound: SNARL,
			soundDelay: 8000,
			postSound: 'sound/snarl_post_bad.mp3',
			postDelay: 5000,
			sprite: ['img/Monster_tiger1.jpg','img/Monster_tiger2.jpg'],
			anxietyChange: 10,
			inventoryItem: false	
		}
	],

	sister: {
		name: 'sister',
		preSound: 'sound/flap_pre_F.mp3',
		soundDelay: 8000,
		postSound: 'sound/flap_post_bad.mp3',
		postDelay: 5000,
		sprite: ['img/Monster_Sister1.jpg','img/Monster_Sister1.jpg'],
		anxietyChange: 0,
		inventoryItem: false
	}
};
