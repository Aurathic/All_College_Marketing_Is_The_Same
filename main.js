var collegeQuotes = [];

async function getCollegeFile(college) {
	collegeFileName = college["file_name"];
	console.log(collegeFileName);
	console.log(example_json[collegeFileName])
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
	return array[Math.floor(Math.random()*array.length)];
}

function numRandElements(array, numRand) {
	retArr = [];
	for(let i = 0; i < numRand; i++) {
		retArr.push(randElement(array));
	}
	return retArr;
}

function splitQuotes(quotes) {
	return quotes.split("\n\n");
}

colleges = [
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



function collegeA() {
	collegeQuotes = [];
	colleges.forEach(getCollegeFile);
	console.log(collegeQuotes);
}

function collegeB() {
	for(let i = 0; i < 20; i++) {
		console.log(randElement(collegeQuotes));
	}
}

function collegeC() {
	fourRandomColleges = numRandElements(collegeQuotes,4);
	correctCollege = randElement(fourRandomColleges);
	collegeQuote = randElement(correctCollege["quotes"]);
	document.getElementById("quote").innerHTML = collegeQuote;
	for(let i = 0; i < 4; i++) {
		document.getElementById("college" + i).innerHTML = fourRandomColleges[i]["name"];
	}
}