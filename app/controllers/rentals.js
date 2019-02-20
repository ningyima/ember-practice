import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    async filterByCity(param) {
      if (param !== '') {
        let results = await this.store.query('rental', { city: param });
        return { query: param, results: results };
      } else {
        let results = await this.store.findAll('rental');
        return { query: param, results: results };
      }
    }
  }
});
