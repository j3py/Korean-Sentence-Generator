// here is the formula for conversion:
// [{(initial) × 588} + {(medial) × 28} + (final)] + 44032

// here are the tables (arrays) necessary
//var initialJaeum = ['ㄱ','ㄲ','ㄴ','ㄷ','ㄸ','ㄹ','ㅁ','ㅂ','ㅃ','ㅅ','ㅆ','ㅇ','ㅈ','ㅉ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'];
//var medialMoeum = ['ㅏ','ㅐ','ㅑ','ㅒ','ㅓ','ㅔ','ㅕ','ㅖ','ㅗ','ㅘ','ㅙ','ㅚ','ㅛ','ㅜ','ㅝ','ㅞ','ㅟ','ㅠ','ㅡ','ㅢ','ㅣ'];
//var finalJaeum = ['','ㄱ','ㄲ','ㄳ','ㄴ','ㄵ','ㄶ','ㄷ','ㄹ','ㄺ','ㄻ','ㄼ','ㄽ','ㄾ','ㄿ','ㅀ','ㅁ','ㅂ','ㅄ','ㅅ','ㅆ','ㅇ','ㅈ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'];

// in future add arrays of common particles for subjects,
// objects, prepositions and verb endings
//var sub = [];
//var obj = [];
//var end = [];

//var wmin = 44032;  // unicode hangul syllables
//var wmax = 55204;

var getRandomInt = function(n, o) {
	var min = Math.ceil(n);
  var max = Math.floor(o);
  return Math.floor(Math.random() * (max - min)) + min;
};

var getRandomKWord = function() {
	var word = '';
  var num = getRandomInt(1, 3);

  for (var i = 0; i < num; i++) {
  	var randInit = getRandomInt(0, 19) * 588;
    var randMed = getRandomInt(0, 21) * 28;
    var randFin = getRandomInt(0, 28);
    var hangulFormula = randInit + randMed + randFin + 44032;

  	word = word + String.fromCodePoint(hangulFormula);
  }
  return { word: word, final: randFin };
};

var title = document.getElementById('title');

var subject = getRandomKWord();
var object = getRandomKWord();  // don't use 'object' as a variable name
var verb = getRandomKWord();

var subParticle = subject.final ? '는' : '은';
var objParticle = object.final ? '를' : '을';

var text = subject.word +
	subParticle +
  object.word +
  objParticle +
  verb.word +
  '습니다.';

title.innerText = text;
