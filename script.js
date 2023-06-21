//your JS code here. If required.
const container = document.getElementById("output");

let prom = new Promise((resolve) => {
	setTimeout(resolve, 1000);
});

prom.then( () => {
	container.innerHTML = "Hello, world!";
});