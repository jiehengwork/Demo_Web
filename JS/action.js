/*=============== ALL ===============*/

/*=============== hide header when  scrolling up ===============*/
let nav_container = document.querySelector('.nav_container');
let navbar_classList = nav_container.classList;
let lastScrollY = hideHereY = displayHereY = 0;
let hideOrNot = false;

window.addEventListener('scroll',function() {
  let nowScrollY = this.scrollY;
// scroll down
  if (nowScrollY > lastScrollY) {
    if (hideHereY === 0) {
      hideHereY = nowScrollY + 100;
    }
    // already hide
    if (hideOrNot === true && nowScrollY > hideHereY) {
      displayHereY = nowScrollY - 100;
    }
    // hide
    else if (hideOrNot === false && nowScrollY > hideHereY) {
      navbar_classList.add('hideHeader');
      hideOrNot = true;
    }
  }
// scroll up
  else if(nowScrollY < lastScrollY) {
    // display
    if (nowScrollY < displayHereY && hideOrNot === true) {
      navbar_classList.remove('hideHeader');
      hideOrNot = false;
    }
    // already dsiplay
    else if (nowScrollY < displayHereY && hideOrNot === false) {
      hideHereY = nowScrollY + 100;
    }
  }
  lastScrollY = nowScrollY
});

/*=============== turn navbar language to Chinese ===============*/
// Array for Chinese textcontent
let ch_nav_items = ['關於', '購物車', '幫助', '花卉', '樹木', '松柏', '蘭花', '多肉植物']

// Array for English textcontent
let eng_nav_items = ['about', 'cart', 'help', 'flowers', 'plants', 'pine & cypress', 'orchid', 'succulents']


let nav_items = Array.from(document.getElementsByClassName('nav_item'));
let nav_items_a = Array.from(document.getElementsByClassName('nav_item_a'));

nav_items.forEach(item => item.addEventListener('mouseenter', function (e) {
  let index = nav_items.findIndex(item => item === e.target);

  nav_items_a[index].textContent = ch_nav_items[index];
}))

nav_items.forEach(item => item.addEventListener('mouseleave', function (e) {
  let index = nav_items.findIndex(item => item === e.target);

  nav_items_a[index].textContent = eng_nav_items[index];
}))

/*=============== OPEN & CLOSE NAVBAR MENU (ON PHONE) ===============*/
let nav_bar = document.querySelector('.nav_bar');
let body_classList = document.body.classList;

nav_bar.addEventListener('click',function () {
  nav_bar.classList.toggle('bar_active');
  body_classList.toggle('hideMenu');
})

/*=============== CLOSE REMIND ===============*/
let close_remind_icon = document.querySelector('.close_remind_icon');
let remind_container = document.querySelector('.remind_container');
let remind_classList = remind_container.classList;

close_remind_icon.addEventListener('click',function () {
  remind_classList.add('close');
})

/*=============== AUTOMATIC SLIDER ===============*/
let radios = Array.from(document.querySelectorAll('.slider_radio'));
let sliderCounter = 0;
let manual_buttons = Array.from(document.querySelectorAll('.manual_button'));

// auto start
radios[0].checked = true;

setInterval(function () {
  // find slider which is checked
  sliderCounter = radios.findIndex(item => item.checked === true);
  // auto
  sliderCounter++;
  if (sliderCounter > 4) {
    sliderCounter = 0;
  }
  radios[sliderCounter].checked = true;
  // now showing
  manual_buttons.forEach(item => item.style.opacity = 0.5);
  manual_buttons[sliderCounter].style.opacity = 1;
}, 6000);

// manual selet now showing slide
let nowShowing = 0;

radios.forEach(item => item.addEventListener('change', function () {
  nowShowing = radios.findIndex(item => item.checked === true);
  manual_buttons.forEach(item => item.style.opacity = 0.5);
  manual_buttons[nowShowing].style.opacity = 1;
}));

/*=============== BUILD SORT DIV ===============*/
sort_containers = Array.from(document.querySelectorAll('.sort_container'));
let all_sort = ['flowers', 'plants', 'pine&cypress', 'orchid', 'succulents']

window.addEventListener('load', function () {
sort_containers.forEach(now_sort => {
  let sortIndex = sort_containers.findIndex(item => item === now_sort)

  for (let i = 0; i < 8; i++) {
    if (i === 7) {
      // want to add in sort_container
      let sort_div = document.createElement("div");
      let p = document.createElement('p');
      p.textContent = 'More...'
      sort_div.appendChild(p);
      // add
      sort_containers[sortIndex].appendChild(sort_div);
    }
    else {
      // want to add in sort_container
      let sort_div = document.createElement("div");
      let img = document.createElement('img');
      img.src = './img/sort-' + all_sort[sortIndex] +'/' + i + '.jpg';
      sort_div.appendChild(img);
      // add
      sort_containers[sortIndex].appendChild(sort_div);
    }
  }
})
});