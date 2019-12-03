$(document).ready(function() {

	var partOne = [
		"Anus",
		"Arse",
		"Ass",
		"Bastard",
		"Bint",
		"Bitch",
		"Bollock",
		"Boner",
		"Bukkake",
		"Bum",
		"Clit",
		"Cock",
		"Crap",
		"Crotch",
		"Cum",
		"Cunt",
		"Dick",
		"Dildo",
		"Dong",
		"Douche",
		"Fart",
		"Felch",
		"Fuck",
		"Jizz",
		"Knob",
		"Nipple",
		"Penis",
		"Piss",
		"Pussy",
		"Poop",
		"Puke",
		"Pussy",
		"Semen",
		"Shaft",
		"Shit",
		"Shite",
		"Spooge",
		"Spunk",
		"Stink",
		"Taint",
		"Testicle",
		"Tit",
		"Titty",
		"Tramp",
		"Twat",
		"Turd",
		"Vagina",
		"Vomit",
		"Wang",
		"Wank"
	];

	var partTwo = [
		"Badger",
		"Bag",
		"Balls",
		"Barrel",
		"Basket",
		"Bastard",
		"Baton",
		"Beard",
		"Bird",
		"Biscuit",
		"Biter",
		"Boat",
		"Boob",
		"Boot",
		"Box",
		"Bubble",
		"Bucket",
		"Buggy",
		"Burger",
		"Cake",
		"Candle",
		"Canoe",
		"Captain",
		"Cheese",
		"Communist",
		"Dictator",
		"Face",
		"Fish",
		"Flaps",
		"Fruit",
		"Fondler",
		"Fudge",
		"Gerbil",
		"Guzzler",
		"Hawk",
		"Hole",
		"Holster",
		"Jacker",
		"King",
		"Kitten",
		"Lord",
		"Minister",
		"Mong",
		"Mongler",
		"Monkey",
		"Nose",
		"Nugget",
		"Paste",
		"Penguin",
		"Pigeon",
		"Pipe",
		"Pirate",
		"Pit",
		"Planet",
		"Puppet",
		"Rag",
		"Roach",
		"Rot",
		"Rug",
		"Sack",
		"Sandwich",
		"Shark",
		"Shoes",
		"Slapper",
		"Sock",
		"Soul",
		"Sphincter",
		"Sponge",
		"Stain",
		"Stick",
		"Sucker",
		"Swallower",
		"Tank",
		"Tard",
		"Thistle",
		"Tooth",
		"Turkey",
		"Waffle",
		"Weasel",
		"Whale",
		"Wheel",
		"Whistle",
		"Wipe",
		"Worm",
		"Zombie"
	];

	newInsult();
	
	$('button').on('click', function() {
		newInsult();
	});

	function newInsult() {
		var item1 = partOne[Math.floor(Math.random()*partOne.length)];
		var item2 = partTwo[Math.floor(Math.random()*partTwo.length)];
		var h1 = isVowel( item1.charAt(0) ) ? 'You Are An' : 'You Are A';

		$('h1').html(h1);
		$('.curse_1').addClass('animate');
		setTimeout( function() {
			$('.curse_2').addClass('animate');
		}, 100 );
		setTimeout( function() {
			$('.curse_1').html(item1);
		}, 200 );
		setTimeout( function() {
			$('.curse_2').html(item2);
		}, 300 );
		setTimeout( function() {
			$('.curse_1').removeClass('animate');
		}, 400 );
		setTimeout( function() {
			$('.curse_2').removeClass('animate');
		}, 500 )
	}

	function isVowel(x) {
	    var result;
	    result = x == "A" || x == "E" || x == "I" || x == "O" || x == "U";
	    return result;
	}

});