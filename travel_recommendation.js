// travel_recommendation.js


const btnSearch = document.getElementById('btnSearch');
const btnReset = document.getElementById('btnReset');
const cardContainer = document.getElementById('card-container');
function searchCondition() {
const input = document.getElementById('conditionInput').value.toLowerCase();
 restartCondition();
fetch('travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {

        const country = data.countries.find(item => item.name.toLowerCase() === input);
  

        if(country){
        country.cities.forEach(city => {
            const card = document.createElement('div');
            card.className = 'card';

            card.innerHTML = `
                <img src="${city.imageUrl}" alt="${city.name}">
                <div class="card-content">
                    <h3>${city.name}</h3>
                    <p>${city.description}</p>
                </div>
            `;

            cardContainer.appendChild(card);
        });
    }
    if(input === 'temples'){
        data.temples.forEach(temple => {
            const card = document.createElement('div');
            card.className = 'card';

            card.innerHTML = `
                <img src="${temple.imageUrl}" alt="${temple.name}">
                <div class="card-content">
                    <h3>${temple.name}</h3>
                    <p>${temple.description}</p>
                </div>
            `;

            cardContainer.appendChild(card);
        });
    }
    if(input === 'beaches'){
        data.beaches.forEach(beach => {
            const card = document.createElement('div');
            card.className = 'card';

            card.innerHTML = `
                <img src="${beach.imageUrl}" alt="${beach.name}">
                <div class="card-content">
                    <h3>${beach.name}</h3>
                    <p>${beach.description}</p>
                </div>
            `;

            cardContainer.appendChild(card);
        });
    }
    })
    .catch(error => console.error('Error fetching data:', error));
}

function restartCondition() {
cardContainer.innerHTML = '';
}


         btnSearch.addEventListener('click', searchCondition);
            btnReset.addEventListener('click', restartCondition);