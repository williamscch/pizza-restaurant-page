// creation of the object for popular pizzas section

const popularPizzasObj = [{
  image: './assets/img/pepperoni.jpg',
  title: 'Pepperoni',
  subtitle: 'Hot-N-Ready',
  description:
      'Ever wished your pepperoni pizza had more pepperoni? Of course you did. This oven-hot pizza has 50% more pepperoni than our average pizza pie.',
},
{
  image: './assets/img/cheese-pizza.jpg',
  title: 'Cheese Pizza',
  subtitle: 'Hot-N-Ready',
  description:
        'Your favorite cheese pizza, with your choice of crust covered in classic marinara sauce and topped with gooey mozzarella cheese. It`s anything but "plain.',
},
{
  image: './assets/img/american-pizza.jpg',
  title: 'American Pizza',
  subtitle: 'Hot-N-Ready',
  description:
        'Packed with pepperoni, Italian sausage, ham, bacon, seasoned pork and beef, this pizza is NOT messing around.',
},
{
  image: './assets/img/old-town-pizza.jpg',
  title: 'Old Town Pizza',
  subtitle: 'Hot-N-Ready',
  description:
        'We took your favorite food and put it on a pizza. With tangy buffalo sauce, tender chicken, onions and banana peppers, this beautiful masterpiece tastes like a football game feels.',
},
{
  image: './assets/img/bbq-pizza.jpg',
  title: 'BBQ Pizza',
  subtitle: 'Hot-N-Ready',
  description:
        'This BBQ pizza comes topped with grilled chicken, bacon and onion. Who`s the grillmaster now?',
},
{
  image: './assets/img/hawaian-pizza.jpg',
  title: 'Hawaiian Pizza',
  subtitle: 'Hot-N-Ready',
  description:
        'Give your taste buds a tropical vacation with this Hawaiian pizza. It`s got tasty chicken, ham, pineapple AND green peppers.',
},
];

// function to display the popular pizzas section dynamiclly

const popularPizzas = document.querySelector('.popular-pizzas');
const popularPizzasSectionTitle = document.createElement('h2');
popularPizzasSectionTitle.innerHTML = 'Popular Pizzas';
const popularPizzasSectionHr = document.createElement('hr');
popularPizzas.append(popularPizzasSectionTitle, popularPizzasSectionHr);

for (let i = 0; i < popularPizzasObj.length; i += 1) {
  const popularPizzasCard = document.createElement('article');
  popularPizzasCard.classList.add('popular-card');

  const popularPizzasImageDiv = document.createElement('div');
  popularPizzasImageDiv.classList.add('popular-img-div');

  const popularPizzasImageBg = document.createElement('img');
  popularPizzasImageBg.src = './assets/img/ajedrez.jpg';
  popularPizzasImageBg.classList.add('popular-image-bg');

  const popularPizzasImage = document.createElement('img');
  popularPizzasImage.src = popularPizzasObj[i].image;
  popularPizzasImage.classList.add('popular-image');

  const popularPizzasInfo = document.createElement('div');
  popularPizzasInfo.className = 'popular-info-container';

  const popularPizzasTitleDiv = document.createElement('div');
  popularPizzasTitleDiv.classList.add('popular-title-div');

  const popularPizzasTitle = document.createElement('h3');
  popularPizzasTitle.innerHTML = popularPizzasObj[i].title;

  const popularPizzasSubtitle = document.createElement('h4');
  popularPizzasSubtitle.innerHTML = popularPizzasObj[i].subtitle;

  const popularPizzasDescription = document.createElement('p');
  popularPizzasDescription.innerHTML = popularPizzasObj[i].description;

  popularPizzas.appendChild(popularPizzasCard);
  popularPizzasCard.append(popularPizzasImageDiv, popularPizzasInfo);
  popularPizzasImageDiv.append(popularPizzasImage, popularPizzasImageBg);
  popularPizzasInfo.append(popularPizzasTitleDiv, popularPizzasDescription);
  popularPizzasTitleDiv.append(popularPizzasTitle, popularPizzasSubtitle);
}

// mobile menu

const button = document.querySelector('.hamburger-button');
const menu = document.querySelector('.navbar-items');
const body = document.querySelector('body');

// const closer = document.querySelector('.x');
// const closePortfolio = document.querySelector('.link');
// const closeAbout = document.querySelector('.link2');
// const closeContact = document.querySelector('.link3');

button.addEventListener('click', () => {
  menu.classList.toggle('active');
  body.classList.toggle('active');
});

// closer.addEventListener('click', () => {
//   menu.classList.toggle('active');
// });

// closePortfolio.addEventListener('click', () => {
//   menu.classList.toggle('active');
// });

// closeAbout.addEventListener('click', () => {
//   menu.classList.toggle('active');
// });

// closeContact.addEventListener('click', () => {
//   menu.classList.toggle('active');
// });