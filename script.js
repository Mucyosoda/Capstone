const menuBtn = document.querySelector('.menu');
const navWrap = document.querySelector('.nav-bar');
const closeIcon = document.getElementById('close-icon');
const seeProjectBtn = document.querySelectorAll('.see-btn');
const displayMsg = document.querySelector('.pop-msg-1');
const overlayBackground = document.querySelector('.overlay');
const closepop = document.querySelector('.closeX');
const closeFunction = function () {
  displayMsg.classList.add('d-none');
  overlayBackground.classList.add('d-none');
};

menuBtn.addEventListener('click', () => {
  menuBtn.classList.add('d-none');
  closeIcon.classList.toggle('d-none');
  navWrap.classList.add('d-block');
  navWrap.classList.add('open');
});

closeIcon.addEventListener('click', () => {
  navWrap.classList.remove('d-block');
  menuBtn.classList.remove('d-none');
  closeIcon.classList.toggle('d-none');
});


const featured = [
    {
        title: 'Rwanda',
        subtitle: 'His president',
        text: 'If you’re looking to get out of the big city and back into nature, the annual Kwita Izina gorilla-naming ceremony is a special time to visit Volcanoes National Park.',
        image: {
            src:'images/kagame.jpg',
            alt:'president'
        },
    },
    {
        title: 'CommoWealth',
        subtitle: 'chairman',
        text: 'If you’re looking to get out of the big city and back into nature, the annual Kwita Izina gorilla-naming ceremony is a special time to visit Volcanoes National Park.',
        image: {
            src:'images/cs1.jpg',
            alt:'president'
        },
    },
    {
        title: 'United State',
        subtitle: 'His president',
        text: 'If you’re looking to get out of the big city and back into nature, the annual Kwita Izina gorilla-naming ceremony is a special time to visit Volcanoes National Park.',
        image: {
            src:'images/cs2.jpg',
            alt:'president'
        },
    },
    {
        title: 'United State',
        subtitle: 'His president',
        text: 'If you’re looking to get out of the big city and back into nature, the annual Kwita Izina gorilla-naming ceremony is a special time to visit Volcanoes National Park.',
        image: {
            src:'images/b2.jpg',
            alt:'president'
        },
    },
    {
        title: 'Rwanda',
        subtitle: 'His president',
        text: 'If you’re looking to get out of the big city and back into nature, the annual Kwita Izina gorilla-naming ceremony is a special time to visit Volcanoes National Park.',
        image: {
            src:'images/b3.jpg',
            alt:'president'
        },
    },
    {
        title: 'Rwanda',
        subtitle: 'His president',
        text: 'If you’re looking to get out of the big city and back into nature, the annual Kwita Izina gorilla-naming ceremony is a special time to visit Volcanoes National Park.',
        image: {
            src:'images/b6.jpg',
            alt:'president'
        },
    },
    {
        title: 'Rwanda',
        subtitle: 'His president',
        text: 'He served as chair of AU from 2018',
        image: {
            src:'images/b7.jpg',
            alt:'president'
        },
   }
]


//creating card one
const displayCard = document.querySelector('.content_container');
const card = document.createElement('div');
card.className = 'content_item';
const images = document.createElement('div');
images.className = 'image_content';
const img = document.createElement('img');
img.setAttribute('alt',featured[1].image.alt);
img.setAttribute('src',featured[1].image.src);
images.appendChild(img);
card.appendChild(images);

const text = document.createElement('div');
text.className = 'text_content';
const textTitleH2 = document.createElement('h2');
const textTitleH4 = document.createElement('h4');
const textTitleH5 = document.createElement('h5');
textTitleH2.textContent = featured[1].title;
textTitleH4.textContent = featured[1].subtitle;
textTitleH5.textContent = featured[1].text;

text.appendChild(textTitleH2);
text.appendChild(textTitleH4);
text.appendChild(textTitleH5);
card.appendChild(text);

displayCard.appendChild(card);

//creating card two
const displayCard2 = document.querySelector('.content_container');
const card2 = document.createElement('div');
card2.className = 'content_item itemCard';
const images2 = document.createElement('div');
images2.className = 'image_content';
const img2 = document.createElement('img');
img2.setAttribute('alt',featured[2].image.alt);
img2.setAttribute('src',featured[2].image.src);
images2.appendChild(img2);
card2.appendChild(images2);

const text2 = document.createElement('div');
text2.className = 'text_content';
const textTitleH22 = document.createElement('h2');
const textTitleH42 = document.createElement('h4');
const textTitleH52 = document.createElement('h5');
textTitleH22.textContent = featured[2].title;
textTitleH42.textContent = featured[2].subtitle;
textTitleH52.textContent = featured[2].text;

text2.appendChild(textTitleH22);
text2.appendChild(textTitleH42);
text2.appendChild(textTitleH52);
card2.appendChild(text2);

displayCard2.appendChild(card2);

//creating card three
const displayCard3 = document.querySelector('.content_container');
const card3 = document.createElement('div');
card3.className = 'content_item itemCard';
card3.id = 'itemCard';
const images3 = document.createElement('div');
images3.className = 'image_content';
const img3 = document.createElement('img');
img3.setAttribute('alt',featured[3].image.alt);
img3.setAttribute('src',featured[3].image.src);
images3.appendChild(img3);
card3.appendChild(images3);

const text3 = document.createElement('div');
text3.className = 'text_content';
const textTitleH23 = document.createElement('h2');
const textTitleH43 = document.createElement('h4');
const textTitleH53 = document.createElement('h5');
textTitleH23.textContent = featured[3].title;
textTitleH43.textContent = featured[3].subtitle;
textTitleH53.textContent = featured[3].text;

text3.appendChild(textTitleH23);
text3.appendChild(textTitleH43);
text3.appendChild(textTitleH53);
card3.appendChild(text3);

displayCard3.appendChild(card3);

//creating card four
const displayCard4 = document.querySelector('.content_container');
const card4 = document.createElement('div');
card4.className = 'content_item itemCard';
card4.id = 'itemCard';
const images4 = document.createElement('div');
images4.className = 'image_content';
const img4 = document.createElement('img');
img4.setAttribute('alt',featured[4].image.alt);
img4.setAttribute('src',featured[4].image.src);
images4.appendChild(img4);
card4.appendChild(images4);

const text4 = document.createElement('div');
text4.className = 'text_content';
const textTitleH24 = document.createElement('h2');
const textTitleH44 = document.createElement('h4');
const textTitleH54 = document.createElement('h5');
textTitleH24.textContent = featured[4].title;
textTitleH44.textContent = featured[4].subtitle;
textTitleH54.textContent = featured[4].text;

text4.appendChild(textTitleH24);
text4.appendChild(textTitleH44);
text4.appendChild(textTitleH54);
card4.appendChild(text4);

displayCard4.appendChild(card4);

//creating card five
const displayCard5 = document.querySelector('.content_container');
const card5 = document.createElement('div');
card5.className = 'content_item itemCard';
const images5 = document.createElement('div');
images5.className = 'image_content';
const img5 = document.createElement('img');
img5.setAttribute('alt',featured[5].image.alt);
img5.setAttribute('src',featured[5].image.src);
images5.appendChild(img5);
card5.appendChild(images5);

const text5 = document.createElement('div');
text5.className = 'text_content';
const textTitleH25 = document.createElement('h2');
const textTitleH45 = document.createElement('h4');
const textTitleH55 = document.createElement('h5');
textTitleH25.textContent = featured[5].title;
textTitleH45.textContent = featured[5].subtitle;
textTitleH55.textContent = featured[5].text;

text5.appendChild(textTitleH25);
text5.appendChild(textTitleH45);
text5.appendChild(textTitleH55);
card5.appendChild(text5);

displayCard5.appendChild(card5);


//More button
const less = document.querySelector('.less_btn')
const more = document.querySelector('.more_btn');
const contentItem = document.querySelectorAll('.itemCard');
more.addEventListener('click', () => {
    contentItem[0].classList.remove('itemCard');
    contentItem[1].classList.remove('itemCard');
    contentItem[2].classList.remove('itemCard');
    less.classList.remove('itemCard');
    more.classList.add('itemCard');
 
})

less.addEventListener('click', () => {
  contentItem[0].classList.add('itemCard');
    contentItem[1].classList.add('itemCard');
    contentItem[2].classList.add('itemCard');
    less.classList.add('itemCard');
    more.classList.remove('itemCard');
})

