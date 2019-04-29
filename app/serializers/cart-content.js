import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalize () {
    let cart = window.localStorage.getItem('cart');
    let items;
    let cartObj;

    if (cart !== undefined) {
      cartObj = JSON.parse(cart);
      items = cartObj.items;
    }

    let cartContents = [];
    if (items !== undefined && Array.isArray(items)) {
      for(let i = 0; i < items.length; i++) {
        let item = items[i];
        let attributes = { 
          title: item.title,
          amount: item.amount, 
          pk: item.pk 
        };
    
        cartContents.push({
          type: 'cart-content',
          id: item.pk,
          attributes: attributes,
        });
      }
    }

    return {
      data: cartContents,
    }
  }
});
