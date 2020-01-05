//Adapted from https://stackoverflow.com/questions/14446447/how-to-read-a-local-text-file
function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                return rawFile.responseText;;
            }
        }
    }
    rawFile.send(null);
}

function getCollegeFile(college_name) {
    return readTextFile("./colleges/" + college_name + ".txt")
}

colleges = ["carnegie_mellon", "colby", "colgate", "cornell", "dartmouth", "georgetown", "grinell", "harvard", "haverford", "holy_cross", "macalester", "middlebury", "mit", "mount_holyoke", "pomona", "santa_clara", "university_of_california", "university_of_chicago", "university_of_michigan", "university_of_pennsylvania"]

function collegeA() {
    texts = colleges.map(getCollegeFile)
    console.log(texts);
}