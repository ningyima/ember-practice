import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),

  actions: {
    async remove(item) {
      let self = this;
      let id = item.pk;
      await this.get('store')
        .findRecord('fund', id)
        .then(fund => {
          fund.set('selected', false);
          fund.set('amount', 0);
          self.cart.remove(item);
      });
    },

    updateCartTotal(item) {
      let self = this;
      let id = item.pk;
      let amount = parseInt(item.amount);
      this.get('store')
        .findRecord('fund', id)
        .then(fund => {
          fund.set('amount', amount);
          self.cart.updateCartTotal();
      });
    }
  }
});