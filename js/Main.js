function publish() {

	var article = document.getElementsByTagName("textarea")[0].value;
	document.body.innerHTML += "<p>" + article.split("\n").join("</p><hr><p>") + "</p>";

}

var now = new Date();


//hh:mm:ss

var hh = formatTime(now.getHours());
var mm = formatTime(now.getMinutes());
var ss = formatTime(now.getSeconds());

// if (ss <10) {
// 	ss = "0" + ss;
// }

function formatTime(timeDenom) {
	if (timeDenom < 10){
		return "0" + timeDenom;
	} else {
		return timeDenom;
	}
}

console.log( hh + ":" + mm + ":" + ss);

var hpcharacters = [
	{name: "Harry Potter",
	score: 1
	},
	{name: "Snape",
	score: 3
	}, 
	{name: "Ron",
	score: 14
	}];

var characterDiv = document.getElementById("characters")

function chooseChar() {
	var randomNum = Math.floor(Math.random() * (hpcharacters.length -1 +1));
	characterDiv.innerHTML = "<h1>" + hpcharacters[randomNum].name + "</h1>"
}
