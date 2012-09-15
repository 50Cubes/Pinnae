//SOUND GROUPS
//GOOD
var DROP = ['sound/drop_pre_L.mp3', 'sound/drop_pre_F.mp3', 'sound/drop_pre_R.mp3']; //toilet grandpa
var SNARL = ['sound/snarl_pre_L.mp3', 'sound/snarl_pre_F.mp3', 'sound/snarl_pre_R.mp3']; //cookies
var WHEEZE = ['sound/wheeze_pre_L.mp3', 'sound/wheeze_pre_F.mp3', 'sound/wheeze_pre_R.mp3']; //sleeping
var BUBBLE2 = ['sound/bubble2_pre_L.mp3', 'sound/bubble2_pre_F.mp3', 'sound/bubble2_pre_R.mp3'];//witch

//NEUTRAL
var BURST = ['sound/burst_pre_L.mp3', 'sound/burst_pre_F.mp3', 'sound/burst_pre_R.mp3'];
var HISS = ['sound/hiss_pre_L.mp3', 'sound/hiss_pre_F.mp3', 'sound/hiss_pre_R.mp3'];
var WHISTLE = ['sound/whistle_pre_R.mp3', 'sound/whistle_pre_R.mp3', 'sound/whistle_pre_R.mp3'];
var SCRAPE = ['sound/scrape_pre_L.mp3', 'sound/scrape_pre_F.mp3', 'sound/scrape_pre_R.mp3'];
var BUZZ = ['sound/buzz_pre_L.mp3', 'sound/buzz_pre_F.mp3', 'sound/buzz_pre_R.mp3'];

//BAD
var FLAP = ['sound/flap_pre_L.mp3', 'sound/flap_pre_F.mp3', 'sound/flap_pre_R.mp3']; //bat
var NIBBLER = ['sound/nibbler_pre_L.mp3', 'sound/nibbler_pre_F.mp3', 'sound/nibbler_pre_R.mp3']; //hamster
var RUNNING_WATER = ['sound/runningwater_pre_L.mp3', 'sound/runningwater_pre_F.mp3', 'sound/runningwater_pre_R.mp3'];//toilet monster
var BUBBLER = ['sound/bubbler_pre_L.mp3', 'sound/bubbler_pre_F.mp3', 'sound/bubbler_pre_R.mp3'];//witch
var MAKEOUT = ['sound/makeout_pre_L.mp3', 'sound/makeout_pre_F.mp3', 'sound/makeout_pre_R.mp3']; //sister
var LAUGH = ['sound/laugh_pre_L.mp3', 'sound/laugh_pre_F.mp3', 'sound/laugh_pre_R.mp3']; //tiger

//ambient noises
var DOOR_SLAMMING = ['sound/door_slamming_L.mp3', 'sound/door_slamming_F.mp3', 'sound/door_slamming_R.mp3'];
var DOOR_CREAKING = ['sound/door_creaking_L.mp3', 'sound/door_creaking_L.mp3', 'sound/door_creaking_L.mp3'];

//SINGLE SOUNDS
var FOOTSTEPS = 'sound/footsteps.mp3';
var HEARTBEAT = 'sound/heartbeat.mp3';
var REWARD = 'sound/reward.mp3';

//HELP SOUNDS
var HELP_LOW = ['sound/help_low_L.mp3','sound/help_low_F.mp3','sound/help_low_R.mp3'];
var HELP2 = ['sound/help2_L.mp3','sound/help2_F.mp3','sound/help2_R.mp3'];
var HELP3 = ['sound/help3_L.mp3','sound/help3_F.mp3','sound/help3_R.mp3'];
var HELP4 = ['sound/help4_L.mp3','sound/help4_F.mp3','sound/help4_R.mp3'];

var RESULTS_CONFIG = {
	good: [
		{
			name: 'bubble2',
			preSound: BUBBLE2,
			soundDelay: 20000,
			postSound: 'sound/grandpa_smoking_pot.mp3',
			postDelay: 5000,
			sprite: ['img/Grandpa_rock.jpg'],
			anxietyChange: -10,
			inventoryItem: false
		},
		{
			name: 'drop',
			preSound: DROP,
			soundDelay: 14000,
			postSound: 'sound/grandpa_on_toilet.mp3',
			postDelay: 5000,
			sprite: ['img/Grandpa_toilet.jpg'],
			anxietyChange: -10,
			inventoryItem: true
		},
		{
			name: 'snarl',
			preSound: SNARL,
			soundDelay: 23000,
			postSound: 'sound/grandpa_eating_cookies.mp3',
			postDelay: 5000,
			sprite: ['img/Grandpa_cookies.jpg'],
			anxietyChange: -10,
			inventoryItem: true
		},
    {
			name: 'wheeze',
			preSound: WHEEZE,
			soundDelay: 16000,
			postSound: 'sound/grandpa_snoring.mp3',
			postDelay: 5000,
			sprite: ['img/Grandpa_snore.jpg'],
			anxietyChange: -10,
			inventoryItem: true
		},
		
		//Nuetral
		{
			name: 'burst',
			preSound: BURST,
			soundDelay: 17000,
			postSound: 'sound/flap_post_good.mp3',
			postDelay: 5000,
			sprite: ['img/Neutral_1.jpg'],
			anxietyChange: 0,
			inventoryItem: false
		},
		{
			name: 'hiss',
			preSound: HISS,
			soundDelay: 11000,
			postSound: 'sound/flap_post_good.mp3',
			postDelay: 5000,
			sprite: ['img/Neutral_1.jpg'],
			anxietyChange: 0,
			inventoryItem: false
		},
		{
			name: 'whistle',
			preSound: WHISTLE,
			soundDelay: 12000,
			postSound: 'sound/flap_post_good.mp3',
			postDelay: 5000,
			sprite: ['img/Neutral_1.jpg'],
			anxietyChange: 0,
			inventoryItem: false
		},
		{
			name: 'scrape',
			preSound: SCRAPE,
			soundDelay: 10000,
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
			soundDelay: 19000,
			postSound: 'sound/hamster_eats_you.mp3',
			postDelay: 5000,
			sprite: ['img/Monster_hamster1.jpg','img/Monster_hamster2.jpg '],
			anxietyChange: 10,
			inventoryItem: false	
		},
		{
			name: 'flap',
			preSound: FLAP,
			soundDelay: 14000,
			postSound: 'sound/bat_eats_you.mp3',
			postDelay: 5000,
			sprite: ['img/Monster_Bat1.jpg', 'img/Monster_Bat2.jpg'],
			anxietyChange: 0,
			inventoryItem: false
		},
		{
			name: 'laugh',
			preSound: LAUGH,
			soundDelay: 16000,
			postSound: 'sound/tiger_monster',
			postDelay: 5000,
			sprite: ['img/Monster_tiger1.jpg','img/Monster_tiger2.jpg'],
			anxietyChange: 0,
			inventoryItem: false
		},
		{
			name: 'runningwater',
			preSound: RUNNING_WATER,
			soundDelay: 20000,
			postSound: 'sound/toilet_monster.mp3',
			postDelay: 5000,
			sprite: ['img/Monster_Toilet1.jpg', 'img/Monster_Toilet2.jpg'],
			anxietyChange: 0,
			inventoryItem: false
		},
		{
			name: 'makeout',
			preSound: MAKEOUT,
			soundDelay: 10000,
			postSound: 'sound/sister_making_out.mp3',
			postDelay: 5000,
			sprite: ['img/Monster_Sister1.jpg', 'img/Monster_Sister2.jpg'],
			anxietyChange: 0,
			inventoryItem: false
		},
		{
			name: 'witch',
			preSound: BUBBLER,
			soundDelay: 16000,
			postSound: 'sound/witch_stirring_pot.mp3',
			postDelay: 5000,
			sprite: ['img/Monster_Witch1.jpg', 'img/Monster_Witch2.jpg'],
			anxietyChange: 0,
			inventoryItem: false
		}
	]
};
