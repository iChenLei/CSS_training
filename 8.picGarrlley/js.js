function showPic(whichpic){
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src",source);

	var text = whichpic.getAttribute("title");
	var desc = document.getElementById("desc");
	desc.firstChild.nodeValue = text;
}