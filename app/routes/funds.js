import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel() {

  },
  
  model() {
    let funds = this.store.peekAll('fund');
    if (funds.length < 1) {
      funds = this.store.findAll('fund');
    }
    return funds;
  }
});
