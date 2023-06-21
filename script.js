//your JS code here. If required.
let prom = new Promise((resolve) => {
	setTimeout(resolve, 1000);
});

prom.then( () => {console.log("Hello, world!")});