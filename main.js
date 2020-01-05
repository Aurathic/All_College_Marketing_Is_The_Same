example_array = ["CMU_A\n \
\n \
CMU_B\n \
\n \
CMU_C",
"Colby_A\n \
\n \
Colby_B\n \
\n \
Colby_C",
"Cornell_A\n \
\n \
Cornell_B", 
"Pomona_A"];

async function getCollegeFile(college_name) {
     file = await fetch("./colleges/" + college_name + ".txt");
     console.log(file);
     return file;
}

function splitQuotes(quotes) {
	return quotes.split("\n\n");
}

colleges = ["carnegie_mellon", "colby", "colgate", "cornell", "dartmouth", "georgetown", "grinell", "harvard", "haverford", "holy_cross", "macalester", "middlebury", "mit", "mount_holyoke", "pomona", "santa_clara", "university_of_california_davis", "university_of_chicago", "university_of_michigan", "university_of_pennsylvania"]

texts = colleges.map(getCollegeFile)
console.log(texts);




function collegeA() {
    
}