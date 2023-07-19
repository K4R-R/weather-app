const url = 'https://yahoo-weather5.p.rapidapi.com/weather?location=delhi&format=json&u=f';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f92c5ea9acmsh10e0b2c842b6999p1a5f78jsn4f8db86e4743',
		'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
	}
};

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }


fetch(url, options)
	.then(response => response.json())
	.then(response => {

		console.log(response);
		console.log(response.location.lat);
	})
	.catch(err => console.log(err));