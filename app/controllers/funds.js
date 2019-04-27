import Controller from '@ember/controller';

export default Controller.extend({
  init() {
    this._super();
    this.funds = this.get('store').peekAll('fund');
  },

  actions: {
    async filterByTitle(param) {
      if (param !== '') {
        let filteredFunds = this.get('funds').filter(function(fund) {
          return fund.title.toLocaleLowerCase().indexOf(param.toLocaleLowerCase()) !== -1;
        });
        return { query: param, results: filteredFunds };
      } else {
        let results = await this.store.peekAll('fund');
        return { query: param, results: results };
      }
    }
  }
});
