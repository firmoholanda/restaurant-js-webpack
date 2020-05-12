/* inport stylesheets */
import './style.css';
//import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function component() {

  const element = document.getElementById('content')
  element.innerHTML = 
    '<ul ul class="nav nav-tabs" >' +
      '<li class="nav-item">' +
        '<a class="nav-link" href="#">home</a>' +
      '</li>' +
      '<li class="nav-item">' +
        '<a class="nav-link" href="#">menu</a>' +
      '</li>' +
      '<li class="nav-item">' +
        '<a class="nav-link" href="#">contact</a>' +
      '</li>' +
      '<li class="nav-item">' +
        '<a class="nav-link" href="#">about</a>' +
      '</li>' +
    '</ul>';

  return element;
}

document.body.appendChild(component());
