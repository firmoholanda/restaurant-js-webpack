const home = document.createElement('div');
home.className = "jumbotron m-3 p-3";

const h1 = document.createElement('h1');
h1.className = "display-4";
h1.innerHTML = 'restaurant-js-webpack';

const p = document.createElement('p');
p.className = "lead";
p.innerHTML = 'this is a simple js library app';

const img = document.createElement('img');
//img.className = "lead";
img.setAttribute('src', '/home.jpg');
img.setAttribute('alt', 'na');
img.setAttribute('height', '1px');
img.setAttribute('width', '1px');


home.appendChild(h1);
home.appendChild(p);
home.appendChild(img);


export default home;
