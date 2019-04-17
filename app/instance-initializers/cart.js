// import { A } from '@ember/array'

export function initialize(app) {
  // const { container = app } = app;
  const cart = app.lookup('service:cart');

  // let payload;

  // if (window.localStorage.getItem('cart')) {
  //   payload = window.localStorage.getItem('cart');
  //   payload = JSON.parse(payload);
  // }

  // let cart = CartService.init();

  // if (payload && cart.localStorage) {
  //   cart.pushPayload(payload);
  // }

  app.register('cart:main', cart, { instantiate: false });
  app.inject('controller', 'cart', 'cart:main');
  app.inject('component', 'cart', 'cart:main');
}

export default {
  initialize,
  name: 'cart',
};
