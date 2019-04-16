import Service from '@ember/service';
import { computed } from '@ember/object'; 

export default Service.extend({
  items: null,

  // use init in order to avoid leaking state in components
  init() {
    this._super(...arguments);
    this.set('items', []);
  },

  add(item) {
    this.items.pushObject(item);
  },

  remove(item) {
    this.items.removeObject(item);
  },

  empty() {
    this.items.clear();
  },

  counter: computed.alias('items.length'),
});
