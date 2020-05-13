const navbar = document.createElement('nav');

const ul = document.createElement('ul');
ul.className = 'nav nav-tabs';

function createMenuItem(menuItems) {
  menuItems.forEach((menuItem) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.id = menuItem;
    a.appendChild(document.createTextNode(menuItem));
    a.className = 'nav-link';
    li.appendChild(a);
    li.className = 'nav-item';
    ul.appendChild(li);
  });
}

createMenuItem(['home', 'menu', 'contact', 'about']);

navbar.appendChild(ul);

export default navbar;
