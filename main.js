//Adapted from https://stackoverflow.com/questions/14446447/how-to-read-a-local-text-file
function readTextFile(file)
{
    var xhr = new XMLHttpRequest();
	xhr.responseType = 'text';

	xhr.onload = function () {
  	  if (xhr.readyState === xhr.DONE) {
    	    if (xhr.status === 200) {
     	       console.log(xhr.response);
     	       return xhr.responseText;
   	     }
 	   }
	};
	xhr.open("GET", file);
	xhr.send(null);
}

function getCollegeFile(college_name) {
    return readTextFile("./colleges/" + college_name + ".txt")
}

colleges = ["carnegie_mellon", "colby", "colgate", "cornell", "dartmouth", "georgetown", "grinell", "harvard", "haverford", "holy_cross", "macalester", "middlebury", "mit", "mount_holyoke", "pomona", "santa_clara", "university_of_california_davis", "university_of_chicago", "university_of_michigan", "university_of_pennsylvania"]

function collegeA() {
    texts = colleges.map(getCollegeFile)
    console.log(texts);
}