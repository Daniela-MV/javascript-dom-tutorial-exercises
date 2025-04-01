let button = document.getElementById("superDuperButton");
button.addEventListener("click", function() {
	// Your code here
	let newElement = document.createElement("li");
	newElement.innerHTML = "forth element";
	let lista = document.getElementById("myList");
	lista.appendChild(newElement);
	
});
