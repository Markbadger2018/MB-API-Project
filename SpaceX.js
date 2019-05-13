const baseURL = 'https://api.spacexdata.com/v2/rockets';

const searchForm = document.querySelector('form');
const spaceShips = document.querySelector('.modal-body');

searchForm.addEventListener('.btn btn-primary', fetchSpace);

function fetchSpace(e){
    e.preventDefault();

    fetch(baseURL)
      .then(result => result.json())
      .then(json => {
          console.log(json);
          displayRockets(json);
      })
      .catch(err => console.log(json))
}
/*********************************************************************************
function displayRockets(rockets){
    rockets.forEach(r => {
        let rocket = document.createElement('li');
        rocket.innerText = r.active;
        spaceShips.appendChild(rocket);
    })
}*/
function displayRockets(rocketName){
    rocketName.forEach(r => {
        let rocket = document.createElement('li');
        rocket.innerText = r.name;
        spaceShips.appendChild(rocket);
    })
}