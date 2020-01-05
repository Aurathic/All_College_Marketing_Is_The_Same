function collegeA() {
var req = new XMLHttpRequest();
req.onload = function() {
  console.log(this.responseXML);
}
req.open('GET', './colleges/harvard.txt');
req.send();
}