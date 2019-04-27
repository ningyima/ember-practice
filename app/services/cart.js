import Service from '@ember/service';
import { computed, observer } from '@ember/object'; 
import { inject as service } from '@ember/service';

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

  async pushPayload(payLoad) {
    let cartitems = JSON.stringify(payLoad);
    let self = this;
    await this.get('store').query('fund', { cartitems: cartitems }).then(function() {
      self.set('items', payLoad['items']);
      self.set('total', payLoad['total']);
    });
  },

  _dumpToLocalStorage: observer('items', 'total', function() {
    if (this.localStorage) {
      window.localStorage.setItem('cart', JSON.stringify(this.payLoad()));
    }
  }),
});
