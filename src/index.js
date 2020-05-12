/* stylesheets */
import './style.css';

function component() {

  // create div to display content
  //const element = document.createElement('div');

  const element = document.getElementById('main-display')
  element.innerHTML = _.join("hello test", ' ');

  return element;
}

document.body.appendChild(component());
