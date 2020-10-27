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
        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
        "contact-h4": "Contact",
        "address": "123 Way 456 Street Somewhere, USA",
        "phone": "1 (888) 888-8888",
        "email": "sales@greatidea.io",
    },
    "footer": {
        "copyright": "Copyright Great Idea! 2018"
    },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navLink = document.createElement('a')
navLink.textContent = 'Services'
navLink.href = '#'
document.querySelector('nav').appendChild(navLink)

navLink = document.createElement('a')
navLink.textContent = 'Product'
navLink.href = '#'
document.querySelector('nav').appendChild(navLink)

navLink = document.createElement('a')
navLink.textContent = 'Vision'
navLink.href = '#'
document.querySelector('nav').appendChild(navLink)

navLink = document.createElement('a')
navLink.textContent = 'Features'
navLink.href = '#'
document.querySelector('nav').appendChild(navLink)

navLink = document.createElement('a')
navLink.textContent = 'About'
navLink.href = '#'
document.querySelector('nav').appendChild(navLink)

navLink = document.createElement('a')
navLink.textContent = 'Contact'
navLink.href = '#'
document.querySelector('nav').appendChild(navLink)

const h1 = document.querySelector('h1')
h1.textContent = 'DOM is Awesome'

const button = document.querySelector('button')
button.textContent = ' Get Started'

const headerImg = document.querySelector('#cta-img')
headerImg.setAttribute('src', siteContent['cta']['img-src'])


let topTitle = document.querySelector('.top-content .text-content h4')
topTitle.textContent = 'Features'
document.querySelector('.top-content').appendChild(topTitle);

let topText = document.querySelector('.top-content .text-content p')
topText.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
document.querySelector('.main-content .top-content').appendChild(topText);


let topTitle2 = document.querySelector('h4')
topTitle2.textContent = 'About'
document.querySelector('.top-content').appendChild(topTitle2);

let topText2 = document.querySelector('p')
topText2.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
document.querySelector('.top-content').appendChild(topText2);

let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

let botTitle = document.querySelector('.text-content h4')
botTitle.textContent = 'Services'
document.querySelector('.bottom-content').appendChild(botTitle)

let botText = document.querySelector('.bottom-content p')
botText.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
document.querySelector('.bottom-content').appendChild(botText)

botTitle = document.querySelector('.text-content h4')
botTitle.textContent = 'Products'
document.querySelector('.bottom-content').appendChild(botTitle)

botText = document.querySelector('.bottom-content .text-content p')
botText.textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
document.querySelector('.bottom-content').appendChild(botText)

botTitle = document.querySelector('.text-content h4')
botTitle.textContent = 'Vision'
document.querySelector('.bottom-content').appendChild(botTitle)

botText = document.querySelector('.text-content p')
botText.textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
document.querySelector('.bottom-content').appendChild(botText)

let contactTitle = document.querySelector('.contact h4')
contactTitle.textContent = 'Contact'
document.querySelector('.contact').appendChild(contactTitle)

let contactAddress = document.querySelector('.contact p')
contactAddress.textContent=`123 Way 456 Street\n
Somewhere, USA`
document.querySelector('.contact').appendChild(contactAddress)

let phoneNumber = document.querySelector('.contact p')
phoneNumber.textContent = `1(888) 888-8888`
document.querySelector('.contact').appendChild(phoneNumber)

let eMail = document.querySelector('.contact p')
eMail.textContent = `sales@greatidea.io`
document.querySelector('.contact').appendChild(eMail)

document.querySelector('footer p').textContent = 'Copyright Great Idea! 2018'
