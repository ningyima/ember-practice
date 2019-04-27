import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),

  actions: {
    async add(item) {
      // let pk = item.pk;
      // let fund = this.get('store').findBy('id', pk);
      // console.log('fund', fund);
      // fund.set('selected', true);
      // this.cart.add(item);
      let self = this;
      let id = item.id;
      await this.get('store').findRecord('fund', id).then(function(fund) {
        fund.set('selected', true);
        self.cart.add(item);
      });
      // await this.get('store').query('fund', { pk: item.pk, selected: true }).then(function() {
      //   self.cart.add(item);
      // })
    }
  }
});
