var div = documentElement.getElementById("mi_div"); // getElementByTagName("div"); tambien querySelector("mi_div");
//
div.classList.add("mi_clase");
console.log(div);

function $(selector){
	return document.querySelector(selector);
}