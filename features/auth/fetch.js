//fetch from api
'use strict'
const imageBaseUrl = 'https://image.tmdb.org/t/p'


const fetchDataFromApi = function(url, callback, optionalParams ){

	fetch(url)
		.then(response =>response.json())
		.then(data => callback (data, optionalParams));
}


export{fetchDataFromApi, imageBaseUrl};
