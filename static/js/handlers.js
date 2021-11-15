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
