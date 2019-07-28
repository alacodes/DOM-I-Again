const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let navtags = document.querySelectorAll('header nav a');

navtags[0].textContent = siteContent.nav['nav-item-1'];
navtags[1].textContent = siteContent.nav['nav-item-2'];
navtags[2].textContent = siteContent.nav['nav-item-3'];
navtags[3].textContent = siteContent.nav['nav-item-4'];
navtags[4].textContent = siteContent.nav['nav-item-5'];
navtags[5].textContent = siteContent.nav['nav-item-6'];

//.appendChild() .prepend() practice
const first = document.createElement('a');
first.textContent = 'First Thing';
const last = document.createElement('a');
last.textContent = 'Last Thing';

const nav = document.querySelector('header nav');
nav.prepend(first);
nav.appendChild(last);

//adding DOM is Awesome, IMG & button
const ctaH1 = document.querySelector('.cta h1');
// ctaH1.textContent = siteContent.cta['h1'];

//DOM is Awesome on separate lines
siteContent.cta.h1.split(" ")
  .map(word => {
    const span = document.createElement('span');
    span.textContent = word;
    return span;
  })
  .forEach(element => ctaH1.appendChild(element));

document.querySelectorAll('.cta h1 span')
  .forEach(span => span.style.display = 'block');

const roundImg = document.querySelector('.cta img');
roundImg.setAttribute('src', siteContent.cta['img-src']);

const ctaButton = document.querySelector('.cta button');
ctaButton.textContent = siteContent.cta['button'];
