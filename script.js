const api = "https://jsonplaceholder.typicode.com/posts";

const promise1 = new Promise((resolve, reject) => {
	console.log("promise1 called");
	setTimeout(() => {
		resolve(api);
	}, 10000);
});

const promise2 = new Promise((resolve, reject) => {
	console.log("promise2 called");
	setTimeout(() => {
		resolve("Promise2 is resolved");
	}, 5000);
});

const getData = async () => {
	console.log("Calling the promise");
	const data = await promise1;
	console.log(data);

	const data2 = await fetch(data);
	console.log(data2);

	console.log("Finished");
};

getData();
console.log("Promise called");
// function z() {
//   function x() {
//     let a = 10;
//     function y() {
//       console.log(a);
//     }
//     return y;
//   }
//   let b = x();
//   console.log(b);
// }
// z();
// function z() {
//   function x() {
//     return function y() {
//       console.log("fn");
//     };
//   }

//   let b = x();

//   console.log(b());
// }
// z();

function clickCount(id) {
	let count = 0;

	document.getElementById(id).addEventListener("click", function () {
		console.log(`Button clicked ${id} ${++count}`);
	});
}

clickCount("clickMe");
clickCount("clickMe2");
