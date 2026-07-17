// Restaurants / delivery partners rendered on the food-delivery page.
// `ratingSvg` holds the pre-rendered star graphic (varies per score);
// omit `rating`/`reviews`/`ratingSvg` for entries without a rating,
// and omit `menu` for entries without an online menu link.

// 4.5 stars (used by 4.5 and 4.6 scores) — last star is half-filled.
const stars45 =
  '<svg class="food-delivery__restaurant-rate-stars" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 405 73"><g clip-path="url(#a)"><path d="m34.252 59-20.85 11 3.972-23.5L0 29.5l23.827-4L34.252 4l10.92 21.5L69 29 52.122 46l3.971 24-21.841-11ZM118.252 59l-20.85 11 3.972-23.5L84 29.5l23.827-4L118.252 4l10.921 21.5L153 29l-16.878 17 3.972 24-21.842-11ZM202.252 59l-20.849 11 3.971-23.5L168 29.5l23.827-4L202.252 4l10.921 21.5L237 29l-16.878 17 3.972 24-21.842-11ZM286.252 59l-20.849 11 3.971-23.5L252 29.5l23.827-4L286.252 4l10.921 21.5L321 29l-16.878 17 3.972 24-21.842-11Z" fill="#F7CF46"/><path d="m372.252 59-20.849 11 3.971-23.5L338 29.5l23.827-4L372.252 4l10.921 21.5L407 29l-16.878 17 3.972 24-21.842-11Z" fill="#D9D9D9"/><path d="m372.252 59-20.849 11 3.971-23.5L338 29.5l23.827-4L372.252 4v55Z" fill="#F7CF46"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h405v73H0z"/></clipPath></defs></svg>';

// 5.0 stars — all five filled.
const stars50 =
  '<svg class="food-delivery__restaurant-rate-stars" viewBox="0 0 405 66"><g clip-path="url(#a)" fill="#F7CF46"><path d="m34.252 55-20.85 11 3.972-23.5L0 25.5l23.827-4L34.252 0l10.92 21.5L69 25 52.122 42l3.971 24-21.841-11Z"/><path d="m34.252 55-20.85 11 3.972-23.5L0 25.5l23.827-4L34.252 0l10.92 21.5L69 25 52.122 42l3.971 24-21.841-11ZM118.252 55l-20.85 11 3.972-23.5L84 25.5l23.827-4L118.252 0l10.921 21.5L153 25l-16.878 17 3.972 24-21.842-11ZM202.252 55l-20.849 11 3.971-23.5L168 25.5l23.827-4L202.252 0l10.921 21.5L237 25l-16.878 17 3.972 24-21.842-11ZM286.252 55l-20.849 11 3.971-23.5L252 25.5l23.827-4L286.252 0l10.921 21.5L321 25l-16.878 17 3.972 24-21.842-11ZM370.252 55l-20.849 11 3.971-23.5L336 25.5l23.827-4L370.252 0l10.921 21.5L405 25l-16.878 17 3.972 24-21.842-11Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h405v66H0z"/></clipPath></defs></svg>';

module.exports = [
  {
    slug: 'dva-levy',
    title: 'Ресторан "Два леви"',
    alt: 'Ресторан "Два леви" у Cлавську',
    rating: 'Оцінка 4.5',
    ratingSvg: stars45,
    reviews: '(204) відгуків',
    menu: { label: 'menu.ps.me', href: 'https://menu.ps.me/QIHrvya8ySI' },
    hours: 'Щодня з 8:30 до 22:00',
    phone: '(096) 457-38-48',
    phoneHref: 'tel:0964573848',
  },
  {
    slug: 'laguna',
    title: 'Ресторан "Лагуна"',
    alt: 'Ресторан "Лагуна" у Cлавську',
    rating: 'Оцінка 4.2',
    ratingSvg: stars45,
    reviews: '(804) відгуків',
    menu: { label: 'firemenu.app', href: 'https://firemenu.app/qr/l6kxxzfa' },
    hours: 'Щодня з 9:00 до 22:00',
    phone: '(096) 457-38-48',
    phoneHref: 'tel:0964573848',
  },
  {
    slug: 'fire-pizza',
    title: 'Піца на дровах',
    alt: 'Піца на дровах у Cлавську',
    rating: 'Оцінка 5.0',
    ratingSvg: stars50,
    reviews: '(135) відгуків',
    hours: 'Щодня з 14:00 до 21:30',
    phone: '(096) 457-38-48',
    phoneHref: 'tel:0964573848',
  },
  {
    slug: 'espositos',
    title: "Піцерія Esposito's",
    alt: "Піцерія Esposito's у Cлавську",
    rating: 'Оцінка 4.6',
    ratingSvg: stars45,
    reviews: '(1117) відгуків',
    menu: { label: 'esposito-s.choiceqr.com', href: 'https://esposito-s.choiceqr.com/online-menu' },
    hours: 'Щодня з 10:00 до 22:00',
    phone: '(096) 457-38-48',
    phoneHref: 'tel:0964573848',
  },
  {
    slug: 'products',
    title: 'Продукти з магазинів',
    alt: 'Продукти з магазинів у Cлавську',
    hours: 'Щодня з 09:00 до 22:00',
    phone: '(096) 457-38-48',
    phoneHref: 'tel:0964573848',
  },
];
