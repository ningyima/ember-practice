import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeArrayResponse (store, primaryModelClass, payload, id, requestType) {
    let funds = payload.data;
    let fundsData = funds.map(fund => {
      let attributes = { 
        title: fund.attributes.title,
        amount: 0, 
        selected: false, 
        pk: fund.id 
      };
  
      return {
        type: fund.type,
        id: fund.id,
        attributes: attributes,
      }
    });

    return {
      data: fundsData
    }
  }
});
