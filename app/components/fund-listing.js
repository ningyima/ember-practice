import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),

  actions: {
    async add(item) {
      let self = this;
      await this.get('store').query('fund', { pk: item.pk, selected: true }).then(function() {
        self.cart.add(item);
      })
    }
  }
});
