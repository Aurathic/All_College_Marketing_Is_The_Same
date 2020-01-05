example_array = ["CMU_A\n\
\n\
CMU_B\n\
\n\
CMU_C",
"Colby_A\n\
\n \
Colby_B\n\
\n\
Colby_C",
"Cornell_A\n\
\n\
Cornell_B", 
"Pomona_A"];

college_quotes = [];

async function getCollegeFile(college_name) {
	fetch("./colleges/" + college_name + ".txt")
	.then((response) => {
		return response.text();
	}).then((text) => {
		college_quotes.push(text.split("\n\n"));
	}).catch(() => {
		college_quotes.push(randElement(example_array).split("\n\n"));
	});
}

colleges = ["carnegie_mellon", "colby", "colgate", "cornell", "dartmouth", "georgetown", "grinell", "harvard", "haverford", "holy_cross", "macalester", "middlebury", "mit", "mount_holyoke", "pomona", "santa_clara", "university_of_california_davis", "university_of_chicago", "university_of_michigan", "university_of_pennsylvania"]

function collegeA() {
	college_quotes = [];
	colleges.forEach(getCollegeFile);
	console.log(college_quotes);
}

function randElement(array) {
	return array[Math.floor(Math.random()*array.length)];
}

function collegeB() {
	for(let i = 0; i < 20; i++) {
		console.log(randElement(college_quotes));
	}
}