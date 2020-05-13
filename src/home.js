
const home = document.createElement('div');
home.className = "jumbotron m-3 p-3";

const h1 = document.createElement('h1');
h1.className = "display-4";
h1.innerHTML = 'restaurant-js-webpack';

const p = document.createElement('p');
p.className = "lead";
p.innerHTML = 'this is a simple js library app';


home.appendChild(h1);
home.appendChild(p);


export default home;