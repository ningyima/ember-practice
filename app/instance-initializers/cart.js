// import { A } from '@ember/array'

export function initialize(app) {
  let payload;
  const { container = app } = app;
  const cart = container.lookup('service:cart');

  if (window.localStorage.getItem('cart')) {
    // console.log('initializer', window.localStorage);
    // window.localStorage.removeItem('cart');
    let cartString = window.localStorage.getItem('cart');
    payload = JSON.parse(cartString);
  }

  if (payload !== undefined && cart.localStorage) {
    cart.pushPayload(payload);
  }

  container.register('cart:main', cart, { instantiate: false });
  container.inject('controller', 'cart', 'cart:main');
  container.inject('component', 'cart', 'cart:main');
}

export default {
  initialize,
  name: 'cart',
};
