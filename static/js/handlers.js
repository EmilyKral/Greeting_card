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

	const imgtag = document.querySelector("#cardimg");
	const imgurl = `./static/images/${celebration}.jpg`;
	imgtag.setAttribute("src", imgurl);
	imgtag.setAttribute("alt", celebration);

	document.querySelector(".card").style.display = "block";
	document.querySelector("#my-form").style.display = "none";
	document.querySelector("#back").style.display = "block";
	document.querySelector("h1").style.display = "none";
}

module.exports = { handleFormSubmit };
