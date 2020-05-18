// import stylesheets
import './style.css';
// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// import modules
import navbar from './navbar';
import home from './home';
import footer from './footer';


const main = document.querySelector('#content');

main.insertAdjacentHTML("beforeEnd", navbar.outerHTML);
main.insertAdjacentHTML("beforeEnd", `<div class="activeInfo"></div>`)
main.insertAdjacentHTML("beforeEnd", footer.outerHTML);


const activeInfo = document.querySelector(".activeInfo")
activeInfo.innerHTML = home.outerHTML;

let nav = document.querySelector(".navbar")

nav.addEventListener('click', e => {
  if (e.target && e.target.classList.contains("nav-link")) {    
    let selectedMenu = e.target.outerText;

    switch (selectedMenu) {
      case "menu":
        activeInfo.innerHTML = menu.outerHTML;
        break;
      case "contact":
        activeInfo.innerHTML = contact.outerHTML;
        break;
      case "about":
        activeInfo.innerHTML = about.outerHTML;
        break;
      default:
        activeInfo.innerHTML = home.outerHTML;
    }
  }
})
