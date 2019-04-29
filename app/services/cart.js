import Service from '@ember/service';
import { computed, observer } from '@ember/object'; 
import { inject as service } from '@ember/service';
import { getOwner } from '@ember/application';

export default Service.extend({
  items: null,
  total: null,
  localStorage: true,
  store: service(),

  // use init in order to avoid leaking state in components
  init() {
    this._super(...arguments);
    this.set('items', []);
    this.set('total', 0);
  },

  add(item) {
    let cartContent = this.get('store').createRecord('cart-content', item);
    this.items.pushObject(item);
  },

  remove(item) {
    this.items.removeObject(item);
    this.updateCartTotal();
  },

  empty() {
    this.items.clear();
  },

  counter: computed.alias('items.length'),

  updateCartTotal() {
    let total = this.items.reduce((accumulator, item) => {
      let amount = parseInt(item.amount);
      if (isNaN(amount)) {
        return accumulator;
      } else {
        return accumulator + amount;
      }
    }, 0);
    this.set('total', total);
  },

  payLoad() {
    return {
      items: this.get('items'),
      total: this.get('total'),
    }
  },

  pushPayload(payLoad) {
    this.set('items', payLoad['items']);
    this.set('total', payLoad['total']);
  },

  submitBasket() {
    let items = this.get('items');
    let total = this.get('total');
    alert("Submit basket successfully!");
  },

  _dumpToLocalStorage: observer('items', 'total', function() {
    if (this.localStorage) {
      window.localStorage.setItem('cart', JSON.stringify(this.payLoad()));
    }
  }),
});
