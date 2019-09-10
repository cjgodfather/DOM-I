const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

let aElNav = document.querySelectorAll("nav a");
aElNav[0].textContent = siteContent["nav"]["nav-item-1"];
aElNav[1].textContent = siteContent["nav"]["nav-item-2"];
aElNav[2].textContent = siteContent["nav"]["nav-item-3"];
aElNav[3].textContent = siteContent["nav"]["nav-item-4"];
aElNav[4].textContent = siteContent["nav"]["nav-item-5"];
aElNav[5].textContent = siteContent["nav"]["nav-item-6"];

let h1El = document.querySelector(".cta-text h1");
h1El.textContent = siteContent["cta"]["h1"];

let btnEl = document.querySelector(".cta-text button");
btnEl.textContent = siteContent["cta"]["button"];

let cta_image = document.querySelector(".cta #cta-img");
cta_image.src = siteContent["cta"]["img-src"];

let h4El = document.querySelectorAll("h4");
h4El[0].textContent = siteContent["main-content"]["features-h4"];
h4El[1].textContent = siteContent["main-content"]["about-h4"];
h4El[2].textContent = siteContent["main-content"]["services-h4"];
h4El[3].textContent = siteContent["main-content"]["product-h4"];
h4El[4].textContent = siteContent["main-content"]["vision-h4"];
h4El[5].textContent = siteContent["contact"]["contact-h4"];

let pEl = document.querySelectorAll(".main-content p");
pEl[0].textContent = siteContent["main-content"]["features-content"];
pEl[1].textContent = siteContent["main-content"]["about-content"];
pEl[2].textContent = siteContent["main-content"]["services-content"];
pEl[3].textContent = siteContent["main-content"]["product-content"];
pEl[4].textContent = siteContent["main-content"]["vision-content"];

let mid_image = document.getElementById("middle-img");
mid_image.src = siteContent["main-content"]["middle-img-src"];

let pContact = document.querySelectorAll(".contact p");
pContact[0].textContent = siteContent["contact"]["address"];
pContact[1].textContent = siteContent["contact"]["phone"];
pContact[2].textContent = siteContent["contact"]["email"];

let pFooter = document.querySelector("footer p");
pFooter.textContent = siteContent["footer"]["copyright"];

aElNav.forEach(el => {
  el.style.color = "red";
});

let node1 = document.createElement("a");
let nodeText1 = document.createTextNode("Blog");
node1.appendChild(nodeText1);
node1.style.color = "red";
document.querySelector(".container nav").appendChild(node1);

let node2 = document.createElement("a");
let nodeText2 = document.createTextNode("Company");
node2.appendChild(nodeText2);
node2.style.color = "red";
document.querySelector(".container nav").prepend(node2);
