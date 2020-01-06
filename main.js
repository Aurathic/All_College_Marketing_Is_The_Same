let collegeQuotes = [];
let correctCollege = "";
let fourRandomColleges = [];
let colleges = [
	{
		"name": "Carnegie Mellon University",
		"file_name": "carnegie_mellon"
	},
	{	
		"name": "Colby College",
		"file_name": "colby"
	},
	{
		"name": "Colgate University",
		"file_name": "colgate"
	},
	{
		"name": "Cornell University",
		"file_name": "cornell"
	},
	{
		"name": "Dartmouth University",
		"file_name": "dartmouth"
	},
	{
		"name": "Georgetown University",
		"file_name": "georgetown"
	},
	{
		"name": "Grinell College",
		"file_name": "grinell"
	},	
	{
		"name": "Harvard University",
		"file_name": "harvard"
	},
	{
		"name": "Haverford College",
		"file_name": "haverford"
	},
	{
		"name": "College of the Holy Cross",
		"file_name": "holy_cross"
	},
	{
		"name": "Macalester College",
		"file_name": "macalester"
	},
	{
		"name": "Mount Holyoke College",
		"file_name": "mount_holyoke"
	},
	{
		"name": "Middlebury College",
		"file_name": "middlebury"
	},
	{
		"name": "Pomona College",
		"file_name": "pomona"
	},
	{
		"name": "Santa Clara University",
		"file_name": "santa_clara"
	},
	{
		"name": "University of California Davis",
		"file_name": "university_of_california_davis"
	},
	{
		"name": "University of Chicago",
		"file_name": "university_of_chicago"
	},
	{
		"name": "University of Michigan",
		"file_name": "university_of_michigan"
	},
	{
		"name": "University of Pennsylvania",
		"file_name": "university_of_pennsylvania"
	}
];

async function getCollegeFile(college) {
	collegeFileName = college["file_name"];
	fetch("./colleges/" + collegeFileName + ".txt")
	.then((response) => {
		return response.text();
	}).then((text) => {
		collegeQuotes.push(
		{
			"name": college["name"],
			"quotes": splitQuotes(text)
		});
	}).catch((error) => {
		collegeQuotes.push(
		{
			"name": college["name"],
			"quotes": [college["name"]]
		});
	});
}

function randElement(array) {
	return array[randElementIndex(array)];
}

function randElementIndex(array) {
	return Math.floor(Math.random()*array.length);
}

function numUniqueRandElements(array, numRand) {
	retArr = [];
	while(retArr.length < numRand) {
		randElem = randElement(array);
        if(!retArr.some(elem => (elem["name"] === randElem["name"]))) {
            retArr.push(randElem);
        }
	}
	return retArr;
}

function splitQuotes(quotes) {
	return quotes.split("\n\n");
}

//add trigger on animation end that removes correct/incorrect labels
//and displays another quote. 
for (let button of document.getElementsByTagName("button")) {
	button.onanimationend = function(e) {
		console.log("animation end!");
		button.classList.remove("correct");
		button.classList.remove("incorrect");
		displayCollegeQuote();
	};
}

function collegeChoice(collegeName) {
	if(correctCollege == "") {
		colleges.forEach(getCollegeFile); //initialize college quotes list
		displayCollegeQuote();
	} else {
		console.log(collegeName + ": :" + correctCollege["name"]);
		collegeButton = document.querySelector("button[value=\"" + collegeName + "\"]");
		correctCollegeButton = document.querySelectorAll("input[value=\"" + correctCollege["name"] + "\"]");
		if(collegeName == correctCollege["name"]) {
			collegeButton.classList.add("correct");
		} else {
			collegeButton.classList.add("incorrect");
			correctCollegeButton.classList.add("correct");
		}
	}
	
}

function displayCollegeQuote() {
	//reset background color of buttons
	buttons = document.getElementsByTagName("button");
	fourRandomColleges = numUniqueRandElements(collegeQuotes,4);
	correctCollege = randElement(fourRandomColleges);
	let collegeQuote = randElement(correctCollege["quotes"]);
	console.log(collegeQuote);
	document.getElementById("quote").innerHTML = collegeQuote;
	//Display college names on buttons
    buttons = document.getElementsByTagName("button");
	for(let i = 0; i < buttons.length; i++) {
		buttons[i].innerHTML = fourRandomColleges[i]["name"];
		buttons[i].value = fourRandomColleges[i]["name"];
	}
}
