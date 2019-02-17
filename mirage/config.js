export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.4.x/shorthands/
  */
    this.namespace = '/api';

    let rentals = [{
      type: 'rentals',
      id: 'downtown-charm',
      attributes: {
        title: 'Downtown Charm',
        owner: 'Violet Beauregarde',
        city: 'Portland',
        category: 'Apartment',
        bedrooms: 3,
        image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
        description: "Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet."
      }
    },
      {
      type: 'rentals',
      id: 'grand-old-mansion',
      attributes: {
        title: 'Grand Old Mansion',
        owner: 'Veruca Salt',
        city: 'San Francisco',
        category: 'Estate',
        bedrooms: 15,
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
        description: "This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests."
      }
    }, {
      type: 'rentals',
      id: 'urban-living',
      attributes: {
        title: 'Urban Living',
        owner: 'Mike Teavee',
        city: 'Seattle',
        category: 'Condo',
        bedrooms: 1,
        image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg',
        description: "A commuters dream. This rental is within walking distance of 2 bus stops and the Metro."
      }
    }];

    // let funds = [ { "model": "fund", "pk": "FB0120000", "fields": { "title": "Lawrence Hall of Science Fund" } },
    // {"model": "fund","pk": "FB0194000","fields": {"title": "Children's Scholarship Fund"}},
    // {"model": "fund","pk": "FB0220000","fields": {"title": "The Fund for I-House"}},
    // {"model": "fund","pk": "FB0231000","fields": {"title": "SETI@home"}},
    // {"model": "fund","pk": "FB0320000","fields": {"title": "The Botanical Garden Annual Fund"}},
    // {"model": "fund","pk": "FB0430000","fields": {"title": "The Phi Beta Kappa Graduate Fellowship"}},
    // {"model": "fund","pk": "FB0510000","fields": {"title": "Oral History Center"}},
    // {"model": "fund","pk": "FB0515000","fields": {"title": "The Women Leaders at Berkeley Fund"}},
    // {"model": "fund","pk": "FB0519000","fields": {"title": "The University Library Digitization Fund"}},
    // {"model": "fund","pk": "FB0528000","fields": {"title": "Fund for the Chemistry Library"}},
    // {"model": "fund","pk": "FB0539000","fields": {"title": "Moffitt Library Collection Fund"}}];

  this.get('/rentals', function (db, request) {
    if(request.queryParams.city !== undefined) {
      let filteredRentals = rentals.filter(function (i) {
        return i.attributes.city.toLocaleLowerCase().indexOf(request.queryParams.city.toLocaleLowerCase()) !== -1;
      });
      return {data: filteredRentals};
    } else {
      return {data: rentals};
    }
  });

  this.get('/funds', function () {
    return {
      data: [ { "model": "fund", "pk": "FB0120000", "fields": { "title": "Lawrence Hall of Science Fund" } },
      {"model": "fund","pk": "FB0194000","fields": {"title": "Children's Scholarship Fund"}},
      {"model": "fund","pk": "FB0220000","fields": {"title": "The Fund for I-House"}},
      {"model": "fund","pk": "FB0231000","fields": {"title": "SETI@home"}},
      {"model": "fund","pk": "FB0320000","fields": {"title": "The Botanical Garden Annual Fund"}},
      {"model": "fund","pk": "FB0430000","fields": {"title": "The Phi Beta Kappa Graduate Fellowship"}},
      {"model": "fund","pk": "FB0510000","fields": {"title": "Oral History Center"}},
      {"model": "fund","pk": "FB0515000","fields": {"title": "The Women Leaders at Berkeley Fund"}},
      {"model": "fund","pk": "FB0519000","fields": {"title": "The University Library Digitization Fund"}},
      {"model": "fund","pk": "FB0528000","fields": {"title": "Fund for the Chemistry Library"}},
      {"model": "fund","pk": "FB0539000","fields": {"title": "Moffitt Library Collection Fund"}}]
    }
  })
}
