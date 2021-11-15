(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function handleFormSubmit(e) {
	e.preventDefault();
	const greeting = document.querySelector("#greeting").value;
	const msg = document.querySelector("#msg").value;
	const celebration = document.querySelector("#celebration").value;

	makeCard(greeting, celebration, msg);
}

function makeCard(greeting, celebration, msg) {
	document.querySelector("#celeb").textContent = `It's your ${celebration}!!`;
	document.querySelector("#card_title").textContent = greeting;
	document.querySelector("#card_msg").textContent = msg;

	document.querySelector(".card").style.display = "block";
	document.querySelector("#my-form").style.display = "none";
	document.querySelector("#back").style.display = "block";
}

module.exports = { handleFormSubmit };

},{}],2:[function(require,module,exports){
const handlers = require("./handlers");

function init() {
	let form = document.querySelector("#my-form");
	form.addEventListener("submit", handlers.handleFormSubmit);

	let button = document.querySelector("#back");
	button.addEventListener("click", e => {
		location.reload();
	});
}

init();

},{"./handlers":1}]},{},[2]);
