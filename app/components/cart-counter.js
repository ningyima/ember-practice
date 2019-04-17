import Component from '@ember/component';
// import computed from '@ember/object';
import layout from '../templates/components/cart-counter';

export default Component.extend({
  layout,
  tagName: 'span',
  classNames: ['cart-counter'],
  classNameBindings: ['isEmpty::cart-empty'],

  // isEmpty: computed.bool('cart.counter'),
});
