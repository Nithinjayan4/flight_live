const PORT =8000

const axios = require("axios");

const options = {
    method: 'GET',
    url: 'https://toronto-pearson-airport.p.rapidapi.com/departures',
    headers: {
        'X-RapidAPI-Key': 'a92b61cd37mshb12828258623a2fp1d1c47jsnaab6cd32fae6',
        'X-RapidAPI-Host': 'toronto-pearson-airport.p.rapidapi.com'
    }
};

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});