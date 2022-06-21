const popularPizzasObj = [{
  image: './assets/img/face-project.jpg',
  title: 'Pepperoni',
  subtitle: 'habia una vez un a;o nono rojo tur no de res te',
  description:
      'Ever wished your pepperoni pizza had more pepperoni? Of course you did. This oven-hot pizza has 50% more pepperoni than our average pizza pie.',
},
{
  image: './assets/img/face-project.jpg',
  title: 'Cheese Pizza',
  subtitle: 'habia una vez un a;o nono rojo tur no de res te',
  description:
        'Your favorite cheese pizza, with your choice of crust covered in classic marinara sauce and topped with gooey mozzarella cheese. It`s anything but "plain.',
},
{
  image: './assets/img/face-project.jpg',
  title: 'American Pizza',
  subtitle: 'This loaded pizza is the perfect choice for family dinner or a lunch with your crew. Includes pepperoni, seasoned pork, beef, mushrooms, green bell peppers and onions.',
  description:
        'Packed with pepperoni, Italian sausage, ham, bacon, seasoned pork and beef, this pizza is NOT messing around.',
},
{
  image: './assets/img/face-project.jpg',
  title: 'Old Town Pizza',
  subtitle: 'habia una vez un a;o nono rojo tur no de res te',
  description:
        'We took your favorite food and put it on a pizza. With tangy buffalo sauce, tender chicken, onions and banana peppers, this beautiful masterpiece tastes like a football game feels.',
},
{
  image: './assets/img/face-project.jpg',
  title: 'BBQ Pizza',
  subtitle: 'habia una vez un a;o nono rojo tur no de res te',
  description:
        'This BBQ pizza comes topped with grilled chicken, bacon and onion. Who`s the grillmaster now?',
},
{
  image: './assets/img/face-project.jpg',
  title: 'Hawaiian Pizza',
  subtitle: 'habia una vez un a;o nono rojo tur no de res te',
  description:
        'Give your taste buds a tropical vacation with this amped up Hawaiian pizza. It`s got tasty chicken, ham, pineapple AND green peppers.',
},
];

const popularPizzas = document.querySelector('.popular-pizzas');
for (let i = 0; i < popularPizzasObj.length; i += 1) {
  const popularPizzasCard = document.createElement('article');
  popularPizzasCard.className = `card card${i}`;

  const popularPizzasImage = document.createElement('img');
  popularPizzasImage.src = popularPizzasObj[i].image;
  popularPizzasImage.classList.add('popular-image');

  const popularPizzasInfo = document.createElement('div');
  popularPizzasInfo.className = 'popular-info-container';

  const popularPizzasTitle = document.createElement('h3');
  popularPizzasTitle.innerHTML = popularPizzasObj[i].title;

  const popularPizzasSubtitle = document.createElement('h4');
  popularPizzasSubtitle.innerHTML = popularPizzasObj[i].subtitle;
  popularPizzasSubtitle.className = 'popular-subtitle';

  const popularPizzasDescription = document.createElement('p');
  popularPizzasDescription.innerHTML = popularPizzasObj[i].description;
  popularPizzasDescription.className = 'popular-description';

  popularPizzas.appendChild(popularPizzasCard);
  popularPizzasCard.append(popularPizzasImage, popularPizzasInfo);
  popularPizzasInfo.append(popularPizzasTitle, popularPizzasSubtitle, popularPizzasDescription);
}