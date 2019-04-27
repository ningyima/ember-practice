import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeArrayResponse (store, primaryModelClass, payload, id, requestType) {
    let funds = payload.data;
    let cart = window.localStorage.getItem('cart');
    let items;
    let cartObj;

    if (cart !== undefined) {
      cartObj = JSON.parse(cart);
      items = cartObj.items;
    }

    let fundsData = funds.map(fund => {
      let amount = 0;
      let selected = false;

      if (items !== undefined && Array.isArray(items)) {
        for(let i = 0; i < items.length; i++) {
          let item = items[i];
          if (item.pk === fund.id) {
            amount = item.amount;
            selected = true;
          }
        }
      }
      let attributes = { 
        title: fund.attributes.title,
        amount: amount, 
        selected: selected, 
        pk: fund.id 
      };
  
      return {
        type: fund.type,
        id: fund.id,
        attributes: attributes,
      }
    });

    return {
      data: fundsData,
    }
  }
});
