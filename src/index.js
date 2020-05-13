/* inport stylesheets */
import './style.css';
//import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import navbar from './navbar';

const view = (() => {
  const main = document.querySelector('#content');

  const updateView = () => {
    main.appendChild(navbar);
    //main.appendChild(home);
    //home.appendChild(aboutContent);
    //home.appendChild(menuContent);
    //home.appendChild(contactContent);

    document.body.appendChild(main);
  };

  return { updateView };
})();

view.updateView();