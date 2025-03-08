// travel_recommendation.js


function searchCondition() {
const input = document.getElementById('conditionInput').value.toLowerCase();
const cardContainer = document.getElementById('card-container');
cardContainer.innerHTML = '';
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
    })
    .catch(error => console.error('Error fetching data:', error));
}

         btnSearch.addEventListener('click', searchCondition);