const cityForm = document.querySelector(`#cityForm`);

cityForm.addEventListener(`submit`, onCityFormSubmit);

function onCityFormSubmit(event) {
	event.preventDefault();

	const cityInput = cityForm.querySelector(`#city`);
	const cityName = cityInput.value.trim();

	if (!cityName) {
		alert(`Introduceti numele unui oras`);
		return;
	}
	console.log(cityName);
}
