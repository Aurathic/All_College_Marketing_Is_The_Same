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
	resp = await fetch("./colleges/" + college_name + ".txt");
	file = await resp.text()
	college_quotes.push(file);
}

function splitQuotes(quotes) {
	return quotes.split("\n\n");
}

colleges = ["carnegie_mellon", "colby", "colgate", "cornell", "dartmouth", "georgetown", "grinell", "harvard", "haverford", "holy_cross", "macalester", "middlebury", "mit", "mount_holyoke", "pomona", "santa_clara", "university_of_california_davis", "university_of_chicago", "university_of_michigan", "university_of_pennsylvania"]

function collegeA() {
	college_quotes = [];
    colleges.forEach(getCollegeFile);
    console.log(college_quotes);
    
}
