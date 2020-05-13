// import stylesheets
import './style.css';
// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// import modules
import navbar from './navbar';
import home from './home';

const view = (() => {
  const main = document.querySelector('#content');

  const updateView = () => {
    main.appendChild(home);
    main.appendChild(navbar);
    //home.appendChild(aboutContent);
    //home.appendChild(menuContent);
    //home.appendChild(contactContent);

    document.body.appendChild(main);
  };

  return { updateView };
})();

view.updateView();