var players = [], elems = [], html = [], q, cplayer = 0, initover = false, qnum, qtype;

$(document).ready(function() {
	elems.game = $('#game');
	html.startgame = '<input type="submit" id="startgame" onclick="init();" value="Start Game" />';
	fadenew('startgame');
});

function init() {
	var i=1;
	html.playerinit = "<div id='playerinit'><ul><li><label>Player 1:</label><input id='p1' name='one' type='text' /></li><li><label>Player 2:</label><input id='p2' name='two' type='text' disabled/></li><li><label>Player 3:</label><input id='p3' name='three' type='text' disabled/></li><li><label>Player 4:</label><input id='p4' name='four' type='text' disabled/></li></ul><input type='submit' onclick='getplayers();' value='Submit Players' id='submit' disabled/></div>";
	fadeempty('startgame', function() {
		fadenew('playerinit');
	});

	$(document).keyup(function() {
		if(!initover) {
			if($('#p1').val().length > 0 && $('#submit').attr('disabled')) {
				$('#submit').removeAttr('disabled');
			}else if ($('#p1').val().length == 0 && !$('#submit').attr('disabled')) {
				$('#submit').attr('disabled','disabled');
			}

			if($('#p'+i).val().length > 0 && i < 4) {
				i++;
				$('#p'+i).removeAttr('disabled');
			}else if($('#p'+(i-1)).val().length == 0 && i > 1) {
				$('#p'+i).attr('disabled','disabled');
				i--;
			}
		}
	});
}

function getplayers() {
	initover = true;
	var i=0, eplayer = false;
	while (!eplayer && i<4){
		for(i;i<4;i++) {
			if($('#p'+(i+1)).val()) {
				players[i] = [];
				players[i].number = i+1;
				players[i].name = $('#p'+(i+1)).val();
				players[i].points = 0;
				if(players[i]['name'].charAt((players[i]['name']).length-1) == 's') {
					players[i]['pname'] = players[i]['name']+"’";
				} else {
					players[i]['pname'] = players[i]['name']+"’s";
				}
			}else {
				eplayer = true;
			}
		}
	}
	fadeempty('playerinit', function() {
		loadquestionpane();
	});
}

function loadquestionpane() {
	if(questions.word.length > 0 || questions.math.length > 0) {

		var i = 0;
		html.playerrank = '<div id="playerrank"><ul>';
		for (i;i<players.length;i++) {
			html.playerrank += '<li>'+players[i].name+' has '+players[i].points+' points</li>';
		}
		html.playerrank += '</ul></div>';

		html.qbuttons = "<div id='qbuttons'><h2>It is <span id='cplayer'>"+players[cplayer].pname+"</span> turn. Now, choose question a type</h2><button "+(questions.math.length > 0 ? "onclick='findq(\"math\");'": 'disabled')+">Math and Chemical Equations — "+questions.math.length+" "+(questions.math.length != 1 ? 'Questions Remain' : 'Question Remains')+"</button><button "+(questions.word.length > 0 ? "onclick='findq(\"word\");'": 'disabled')+">Word — "+questions.word.length+" "+(questions.word.length != 1 ? 'Questions Remain' : 'Question Remains')+"</button></div>";
		fadenew('qbuttons');
		fadenew('playerrank');
	}else {
		gameover();
	}
}

function findq(type) {
	if(type == 'word' || 'math') {
		qnum = randint((questions[type].length - 1));
		qtype = type;
		fadeempty('qbuttons', function(){
			fadeempty('playerrank');
			q = questions[type][qnum];
			displayq();
		});
	}else{
		alert('error');
	}
}

function displayq() {
	var inputs = '', t = false, mnum = randint(3), fnum = 0, hstr, answ;

	for(var i=1;i <= 4;i++) {
		if ((randint(3) == mnum && !t) || (i == 4 && !t)) {
			answ = q.a.c;
			hstr = hash(q.a.c);
			t = true;
		}else {
			answ = q.a.f[fnum];
			hstr = hash(q.a.f[fnum]);
			fnum++;
		}

		inputs += "<input type='radio' name='a' val='"+hstr+" '/><label for='"+hstr+"'>"+answ+"</label><br />";
		hstr = null, answ = null;
	}
	html.question = "<div id='question'><h3>"+q.q+"</h3>"+inputs+"<input type='submit' onclick='answer();' value='Submit Answer' /></div>";
	fadenew('question');
	elems.formq = $('#formq');
}

function answer() {
	if ($('input[type~="radio"]:checked').attr("val") == hash(q.a.c)) {
		players[cplayer].points += q.p;
	}
	fadeempty('question', function() {
		playernext();
		q = null;
		questions[qtype].splice([qnum], 1);
		loadquestionpane();
	});
}

function playernext() {
	cplayer = ((cplayer+1) % players.length);
}

function gameover() {
	var i = 0;
	var tp = [];
	tp.points = -1;
	for (i;i<players.length;i++) {
		if (tp.points < players[i].points) {
			tp.points = players[i].points;
			tp.pnum = i;
		}else if(tp.points == players[i].points) {
			tp.pnum = -1;
		}
	}
	if (tp.pnum > -1) {
		alert("The winning player is… "+players[tp.pnum].name);
	}else{
		alert("It's a tie");
	}
}