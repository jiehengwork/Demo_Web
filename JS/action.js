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