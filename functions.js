function randint (max) {
    return Math.floor(Math.random() * (max + 1));
}

function fadenew(elem, callback) {
	elems.game.append(html[elem]);
	elems[elem] = $('#'+elem);
	elems[elem].hide(0, function() {
		elems[elem].fadeIn();
		if(callback && typeof(callback) === "function") {
			callback();
		}
	});
}

function fadeempty(elem, callback) {
	elems[elem].fadeOut(500, function() {
		elems.game.empty();
		if(callback && typeof(callback) === "function") {
			callback();
		}
	});
}

// Array Remove - By John Resig (MIT Licensed)
Array.remove = function(array, from, to) {
  var rest = array.slice((to || from) + 1 || array.length);
  array.length = from < 0 ? array.length + from : from;
  return array.push.apply(array, rest);
};

function hash(str){
    var hash = 0, i, char;
    if (str.length == 0) return hash;
    for (i = 0; i < str.length; i++) {
        char = str.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}