AOS.init();

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom" // defines which position of the element regarding to window should trigger the animation
});

var options = {
  classname: "my-class",
  id: "my-id",
  target: document.getElementById("myDivId")
};

var nanobar = new Nanobar(options);

// move bar
nanobar.go(30); // size bar 30%
nanobar.go(76); // size bar 76%

// size bar 100% and and finish
nanobar.go(100);

console.log("Hello, world!");

$(function () {
  $(document).scroll(function () {
    var $nav = $("nav");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

function up () {
  document.querySelector(".up").scrollIntoView();
}
function aj () {
  document.querySelector(".abt").scrollIntoView();
}
function pj () {
  document.querySelector(".pro").scrollIntoView();
}
function cj () {
  document.querySelector(".contact").scrollIntoView();
}
function sfs () {
  window.open('https://sfs-website.glitch.me', '_blank');
}
function cca () {
  window.open('https://zhai90.github.io/climate_change/', '_blank');
}
function cw () {
  window.open('https://complementary.netlify.app/', '_blank');
}