import Service from '@ember/service';
import { computed } from '@ember/object'; 

export default Service.extend({
  items: null,
  total: null,

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
  }
});
