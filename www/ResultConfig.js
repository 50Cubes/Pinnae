var RESULTS_CONFIG = {
	good: [
		{
			name: 'bubbler',
			preSound: ['sound/bubbler_pre_L.mp3', 'sound/bubbler_pre_F.mp3', 'sound/bubbler_pre_R.mp3'],
			soundDelay: 3000,
			postSound: 'sound/bubbler_post_good.mp3',
			postDelay: 5000,
			sprite: ['img/Grandpa_rock.jpg'],
			anxietyChange: -10,
			inventoryItem: false
		},
		{
			name: 'drop',
			preSound: ['sound/drop_pre_L.mp3', 'sound/drop_pre_F.mp3', 'sound/drop_pre_R.mp3'],
			soundDelay: 1000,
			postSound: 'sound/drop_post_good.mp3',
			postDelay: 5000,
			sprite: ['img/Grandpa_toilet.jpg'],
			anxietyChange: -10,
			inventoryItem: true
		},
		{
			name: 'flap',
			preSound: ['sound/flap_pre_L.mp3', 'sound/flap_pre_F.mp3', 'sound/flap_pre_R.mp3'],
			soundDelay: 4000,
			postSound: 'sound/flap_post_good.mp3',
			postDelay: 5000,
			sprite: ['img/Grandpa_rock.jpg'],
			anxietyChange: -10,
			inventoryItem: false
		},
		{
			name: 'nibbler',
			preSound: ['sound/nibbler_pre_L.mp3', 'sound/nibbler_pre_F.mp3', 'sound/nibbler_pre_R.mp3'],
			soundDelay: 4000,
			postSound: 'sound/nibbler_post_good.mp3',
			postDelay: 5000,
			sprite: ['img/Grandpa_rock.jpg'],
			anxietyChange: -10,
			inventoryItem: false	
		},
		{
			name: 'snarl',
			preSound: ['sound/snarl_pre_L.mp3', 'sound/snarl_pre_F.mp3', 'sound/snarl_pre_R.mp3'],
			soundDelay: 4000,
			postSound: 'sound/snarl_post_good.mp3',
			postDelay: 5000,
			sprite: ['img/Grandpa_rock.jpg'],
			anxietyChange: -10,
			inventoryItem: true	
		},
		{
			name: 'bubbler',
			preSound: ['sound/bubbler_pre_L.mp3', 'sound/bubbler_pre_F.mp3', 'sound/bubbler_pre_R.mp3'],
			soundDelay: 3000,
			postSound: 'sound/neutral.mp3',
			postDelay: 5000,
			sprite: ['img/Neutral_1.jpg'],
			anxietyChange: 0,
			inventoryItem: false
		},
		{
			name: 'drop',
			preSound: ['sound/drop_pre_L.mp3', 'sound/drop_pre_F.mp3', 'sound/drop_pre_R.mp3'],
			soundDelay: 1000,
			postSound: 'sound/neutral.mp3',
			postDelay: 5000,
			sprite: ['img/Neutral_1.jpg'],
			anxietyChange: 0,
			inventoryItem: true
		},
		{
			name: 'flap',
			preSound: ['sound/flap_pre_L.mp3', 'sound/flap_pre_F.mp3', 'sound/flap_pre_R.mp3'],
			soundDelay: 4000,
			postSound: 'sound/flap_post_good.mp3',
			postDelay: 5000,
			sprite: ['img/Neutral_1.jpg'],
			anxietyChange: 0,
			inventoryItem: false
		},
		{
			name: 'nibbler',
			preSound: ['sound/nibbler_pre_L.mp3', 'sound/nibbler_pre_F.mp3', 'sound/nibbler_pre_R.mp3'],
			soundDelay: 4000,
			postSound: 'sound/neutral.mp3',
			postDelay: 5000,
			sprite: ['img/Neutral_1.jpg'],
			anxietyChange: -10,
			inventoryItem: false	
		},
		{
			name: 'snarl',
			preSound: ['sound/snarl_pre_L.mp3', 'sound/snarl_pre_F.mp3', 'sound/snarl_pre_R.mp3'],
			soundDelay: 4000,
			postSound: 'sound/neutral.mp3',
			postDelay: 5000,
			sprite: ['img/Neutral_1.jpg'],
			anxietyChange: 0,
			inventoryItem: true	
		}
	],

	bad: [
		{
			name: 'bubbler',
			preSound: ['sound/bubbler_pre_L.mp3', 'sound/bubbler_pre_F.mp3', 'sound/bubbler_pre_R.mp3'],
			soundDelay: 3000,
			postSound: 'sound/bubbler_post_bad.mp3',
			postDelay: 5000,
			sprite: ['img/Monster_Witch1.jpg','img/Monster_Witch2.jpg'],
			anxietyChange: 10,
			inventoryItem: false
		},
		{
			name: 'drop',
			preSound: ['sound/drop_pre_L.mp3', 'sound/drop_pre_F.mp3', 'sound/drop_pre_R.mp3'],
			soundDelay: 1000,
			postSound: 'sound/drop_post_bad.mp3',
			postDelay: 5000,
			sprite: ['img/Monster_Toilet1.jpg','img/Monster_Toilet2.jpg'],
			anxietyChange: 20,
			inventoryItem: false
		},
		{
			name: 'flap',
			preSound: ['sound/flap_pre_L.mp3', 'sound/flap_pre_F.mp3', 'sound/flap_pre_R.mp3'],
			soundDelay: 4000,
			postSound: 'sound/flap_post_bad.mp3',
			postDelay: 5000,
			sprite: ['img/Monster_Bat1.jpg','img/Monster_Bat2.jpg'],
			anxietyChange: 40,
			inventoryItem: false
		},
		{
			name: 'nibbler',
			preSound: ['sound/nibbler_pre_L.mp3', 'sound/nibbler_pre_F.mp3', 'sound/nibbler_pre_R.mp3'],
			soundDelay: 4000,
			postSound: 'sound/nibbler_post_bad.mp3',
			postDelay: 5000,
			sprite: ['img/Monster_hamster1.jpg','img/Monster_hamster2.jpg '],
			anxietyChange: 10,
			inventoryItem: false	
		},
		{
			name: 'snarl',
			preSound: ['sound/snarl_pre_L.mp3', 'sound/snarl_pre_F.mp3', 'sound/snarl_pre_R.mp3'],
			soundDelay: 4000,
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
		soundDelay: 4000,
		postSound: 'sound/flap_post_bad.mp3',
		postDelay: 5000,
		sprite: ['img/Monster_Sister1.jpg','img/Monster_Sister1.jpg'],
		anxietyChange: 0,
		inventoryItem: false
	},
};
