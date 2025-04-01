let button = document.getElementById("superDuperButton");
button.addEventListener("click", function() {
	// Your code here
let elemento = document.createElement("div");
elemento.style.backgroundColor = "yellow";
elemento.innerHTML = "Hello World";
document.body.appendChild(elemento);
});
