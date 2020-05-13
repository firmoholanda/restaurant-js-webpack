const navbar = document.createElement('nav');
const ul = document.createElement('ul');

const home = document.createElement('li');
const menu = document.createElement('li');
const contact = document.createElement('li');
const about = document.createElement('li');

//li.setAttribute('class', 'nav-item');

home.innerHTML = 'home';
//home.setAttribute('class', 'nav-item');

menu.innerHTML = 'menu';
//menu.setAttribute('class', 'nav-item');

contact.innerHTML = 'contact';
//contact.setAttribute('class', 'nav-item');

about.innerHTML = 'about';
//about.setAttribute('class', 'nav-item');

ul.setAttribute('class', 'nav nav-tabs');
ul.appendChild(home);
ul.appendChild(menu);
ul.appendChild(contact);
ul.appendChild(about);

//navbar.setAttribute('class', 'nav navbar');
navbar.appendChild(ul);

li.setAttribute('class', 'nav-item');
console.log(li)

export default navbar;
