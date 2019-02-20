import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    async filterByTitle(param) {
      if (param !== '') {
        let results = await this.store.query('fund', { title: param });
        return { query: param, results: results };
      } else {
        let results = await this.store.findAll('fund');
        return { query: param, results: results };
      }
    }
  }
});
