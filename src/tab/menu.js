import menuImg01 from '../img/menu-img01.jpg';

const menu = document.createElement('div');
menu.className = "container p-1";

const cardGroup = document.createElement('div');
cardGroup.className = "card-group mt-4";

const card = document.createElement('div');
card.className = "card";

const img = new Image();
img.className = "card-img-top";
img.src = menuImg01;

const cardBody = document.createElement('div');
cardBody.className = "card-body";

const h5 = document.createElement('h5');
h5.className = "card-title";
h5.innerHTML = "card01";

const p = document.createElement('p');
p.className = "card-title";
p.innerHTML = "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.";

const small = document.createElement('small');
small.className = "card-text text-muted";
small.innerHTML = "USD$ 10";


menu.appendChild(cardGroup);
cardGroup.appendChild(card);
card.appendChild(img);
card.appendChild(cardBody);
cardBody.appendChild(h5);
cardBody.appendChild(p);
cardBody.appendChild(small);


/* 

<div class="container p-1">
  <div class="card-group mt-4">
    <div class="card">
      <img src="../img/menu-img01.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>

  <div class="card-group mt-4">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>

`
*/

export default menu;
