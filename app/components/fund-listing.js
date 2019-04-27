import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),

  actions: {
    async add(item) {
      let self = this;
      let id = item.id;
      await this.get('store').findRecord('fund', id).then(function(fund) {
        fund.set('selected', true);
        self.cart.add(item);
      });
    }
  }
});
