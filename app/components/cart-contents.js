import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),

  actions: {
    async remove(item) {
      let self = this;
      await this.get('store').query('fund', { pk: item.pk, selected: false }).then(function() {
        self.cart.remove(item);
      });
    },

    updateCartTotal() {
      this.cart.updateCartTotal();
    }
  }
});