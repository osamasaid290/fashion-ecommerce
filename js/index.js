new WOW().init();

/* make map */
let map;
let marker;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}
/* toggle the class setting box when you click on bag */
document.querySelector('.fa-shopping-bag').onclick = function(){

  document.querySelector('.setting-box-bag').classList.add('open');
}

document.querySelector('.offcanvas-close').onclick = function(){

  document.querySelector('.setting-box-bag').classList.remove('open');
}

/* toggle the class setting box when you click on heart */
document.querySelector('.fa-heart').onclick = function(){

  document.querySelector('.setting-box-heart').classList.add('open');
}

document.querySelector('.offcanvas-closee').onclick = function(){

  document.querySelector('.setting-box-heart').classList.remove('open');
}

/* add search class */
document.querySelector('.fa-search').onclick = function(){

  document.querySelector('.search').classList.add('search-open');
}