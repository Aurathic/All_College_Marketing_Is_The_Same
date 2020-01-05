//Adapted from https://stackoverflow.com/questions/14446447/how-to-read-a-local-text-file
function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
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

colleges = ["carnegie_mellon", "colby", "colgate", "cornell", "dartmouth", "georgetown", "grinell", "harvard", "haverford", "holy_cross", "macalester", "middlebury", "mit", "mount_holyoke", "pomona", "santa_clara", "university_of_california", "university_of_chicago", "university_of_michigan", "university_of_pennsylvania"]

texts = colleges.map(readTextFile)
console.log(texts);

function collegeA() {
}