import '../modals.css';

// Selectors
const $body = $('body');
const $html = $('html');
const $segmentationModal = $('.modal--shop'); // containing element
const $segmentationForm = $('.modal__form--shop');
const $chooseStore = $('#shop-segmentation-select');

// Buttons
const $navShop = $('.main-nav__link--shop'); // nav 'shop' link
const $shopNow = $('#shop-now-btn'); // hero 'shop now'
const $dailySpecialsShop = $('#daily-specials-btn'); // daily specials/staff picks
const $shopFlower = $('#shop-flower-btn'); // shop flower
const $shopEdibles = $('#shop-edibles-btn'); // shop edibles
const $shopAccessories = $('#shop-accessories-btn'); // shop accessories

// Classes
const activeSegmentation = 'modal--active';
const disableScroll = 'active-modal';

// URLs
const dutchieTopLevel = 'https://dutchie.com/embedded-menu'; // top-level
// Stores
const danforth = 'canvas'; // danforth main
const liberty = 'canvas-liberty'; // liberty main
const mountDennis = 'canvas-weston'; // mount dennis main

// Paths
const specials = 'specials'; // sale category
const flower = 'flower'; // flower category
const edibles = 'edibles'; // flower category
const accessories = 'accessories'; // flower category

// Add 'Shop Now' mobile nav button to this mix
// Add click away from modal to close functionality
// Add esc to close functionality
// Disable the placeholder value and change it's color to 30% black
// How to launch without repainting/scrolling to the top of the page
// Collapse open menu if the modal is triggered

let destination;
let path;
let store;
let products = false;
let main = false;

// Functions
const pathConstructor = (store, path, products, main) => {
  // how to make some of these args optional? Only really need to know the store and if main is true
  if (main) {
    // convert to switch-case?
    destination += `/${store}`;
  } else if (!products) {
    destination = `${dutchieTopLevel}/${store}/products/${path}`;
  } else if (products) {
    destination = `${dutchieTopLevel}/${store}/${path}`;
  }
  console.log(destination);
};

// const segmentationHandler = (store, path, products, main) => {
//   const shopPath = pathConstructor(store, path, products, main);
//   // add classes to modal, html and body elements
//   // call the pathConstructor function and hold the value in a new variable
//   // on submit prevent default
//   // navigate to that URL in a new tab
//   // clear the form? // if yes, should this logic be included in the age gate?
//   // remove the active classes from the modal, html and body elements
// }

const shopSegmentation = () => {
  $shopNow.on('click', function () {
    // launch the modal
    $segmentationModal.addClass(activeSegmentation);
    $html.addClass(disableScroll);
    $body.addClass(disableScroll);
    // capture value of data attr
    const dataVal = $(this).data('menu');
    // construct part of the url
    if (dataVal === 'main') {
      destination = dutchieTopLevel;
      main = true;
    } else if (dataVal === 'sale') {
      path = specials;
    } else if (dataVal === 'flower') {
      path = flower;
    } else if (dataVal === 'edibles') {
      path = edibles;
    } else if (dataVal === 'accessories') {
      path = accessories;
    }
    !destination ? console.log(path) : console.log(destination);
  });
  $navShop.on('click', function () {
    // launch the modal
    $segmentationModal.addClass(activeSegmentation);
    $html.addClass(disableScroll);
    $body.addClass(disableScroll);
    // capture value of data attr
    const dataVal = $(this).data('menu');
    // construct part of the url
    if (dataVal === 'main') {
      destination = dutchieTopLevel;
      main = true;
    } else if (dataVal === 'sale') {
      path = specials;
    } else if (dataVal === 'flower') {
      path = flower;
    } else if (dataVal === 'edibles') {
      path = edibles;
    } else if (dataVal === 'accessories') {
      path = accessories;
    }
    !destination ? console.log(path) : console.log(destination);
  });
  $dailySpecialsShop.on('click', function () {
    // launch the modal
    $segmentationModal.addClass(activeSegmentation);
    $html.addClass(disableScroll);
    $body.addClass(disableScroll);
    // capture value of data attr
    const dataVal = $(this).data('menu');
    // construct part of the url
    if (dataVal === 'main') {
      destination = dutchieTopLevel;
    } else if (dataVal === 'sale') {
      path = specials;
    } else if (dataVal === 'flower') {
      path = flower;
    } else if (dataVal === 'edibles') {
      path = edibles;
    } else if (dataVal === 'accessories') {
      path = accessories;
    }
    !destination ? console.log(path) : console.log(destination);
  });
  $shopFlower.on('click', function () {
    // launch the modal
    $segmentationModal.addClass(activeSegmentation);
    $html.addClass(disableScroll);
    $body.addClass(disableScroll);
    // capture value of data attr
    const dataVal = $(this).data('menu');
    // construct part of the url
    if (dataVal === 'main') {
      destination = dutchieTopLevel;
    } else if (dataVal === 'sale') {
      path = specials;
    } else if (dataVal === 'flower') {
      path = flower;
      products = true;
    } else if (dataVal === 'edibles') {
      path = edibles;
      products = true;
    } else if (dataVal === 'accessories') {
      path = accessories;
      products = true;
    }
    !destination ? console.log(path) : console.log(destination);
  });
  $shopEdibles.on('click', function () {
    // launch the modal
    $segmentationModal.addClass(activeSegmentation);
    $html.addClass(disableScroll);
    $body.addClass(disableScroll);
    // capture value of data attr
    const dataVal = $(this).data('menu');
    // construct part of the url
    if (dataVal === 'main') {
      destination = dutchieTopLevel;
    } else if (dataVal === 'sale') {
      path = specials;
    } else if (dataVal === 'flower') {
      path = flower;
      products = true;
    } else if (dataVal === 'edibles') {
      path = edibles;
      products = true;
    } else if (dataVal === 'accessories') {
      path = accessories;
      products = true;
    }
    !destination ? console.log(path) : console.log(destination);
  });
  $shopAccessories.on('click', function () {
    // launch the modal
    $segmentationModal.addClass(activeSegmentation);
    $html.addClass(disableScroll);
    $body.addClass(disableScroll);
    // capture value of data attr
    const dataVal = $(this).data('menu');
    // construct part of the url
    if (dataVal === 'main') {
      destination = dutchieTopLevel;
    } else if (dataVal === 'sale') {
      path = specials;
    } else if (dataVal === 'flower') {
      path = flower;
      products = true;
    } else if (dataVal === 'edibles') {
      path = edibles;
      products = true;
    } else if (dataVal === 'accessories') {
      path = accessories;
      products = true;
    }
    !destination ? console.log(path) : console.log(destination);
  });
  $segmentationForm.on('submit', function (e) {
    e.preventDefault();
    // construct the path
    const storeSelect = $chooseStore.val();
    if (storeSelect === 'danforth') {
      store = danforth;
      pathConstructor(store, path, products, main);
    }
    // redirect to the URL
  });
};

export default shopSegmentation;
