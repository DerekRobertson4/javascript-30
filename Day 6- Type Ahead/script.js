const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];


//Fetch list of cities hosted on endpoint const URL (pulls as JSON)
fetch(endpoint)
    //Convert data from JSON to js
    .then(data => data.json())
    //spread and push the data to cities const
    .then(data => cities.push(...data));

//function to match words typed into search bar, pulls from cities array.
function findMatches(wordToMatch, cities) {
    //filter cities array results for matches
    return cities.filter(place => {
    //create regex variable for filter cities array
    const regex = new RegExp(wordToMatch, 'gi');
    //return the city OR state that matches typed input
    return place.city.match(regex) || place.state.match(regex);
    })
};

function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

//Event listener hears a change in input and runs displayMatches, which initializes
// findMatches with the value fed into displayMatches (value of searchInput when eventlistener activates)
function displayMatches() {
    //matchArray = the found input value matched in the cities array
    const matchArray = findMatches(this.value, cities);
    //html = the found values mapped into html format for injection
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`)
        return `
            <li>
                <span class="name">${cityName}, ${stateName}</span>
                <span class="population">${numberWithCommas(place.population)}</span>
            </li>
        `;
    //values are returned as an array so we use .join to concatenate them into string
    }).join('');
    //changes inner html of suggestions to const html values
    suggestions.innerHTML = html;
}

//returns search and suggestions classes then assigns them to respective consts
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

//add an event listener for changes to search input and run function displayMatches
searchInput.addEventListener('change', displayMatches)
searchInput.addEventListener('keyup', displayMatches)