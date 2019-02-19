import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    filterByTitle(param) {
      if (param !== '') {
        return this.store.query('fund', { title: param }).then((results) => {
          return { query: param, results: results };
        });
      } else {
        return this.store.findAll('fund').then((results) => {
          return { query: param, results: results };
        });
      }
    }
  }
});
