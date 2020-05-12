/* stylesheets */
import './style.css';

function component() {

  // create div to display content
  const element = document.createElement('div');

  element.innerHTML = _.join(['hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
