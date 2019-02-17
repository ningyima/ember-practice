import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [ { "model": "fund", "pk": "FB0120000", "fields": { "title": "Lawrence Hall of Science Fund" } },
    {"model": "fund","pk": "FB0194000","fields": {"title": "Children's Scholarship Fund"}},
    {"model": "fund","pk": "FB0220000","fields": {"title": "The Fund for I-House"}},
    {"model": "fund","pk": "FB0231000","fields": {"title": "SETI@home"}},
    {"model": "fund","pk": "FB0320000","fields": {"title": "The Botanical Garden Annual Fund"}},
    {"model": "fund","pk": "FB0430000","fields": {"title": "The Phi Beta Kappa Graduate Fellowship"}},
    {"model": "fund","pk": "FB0510000","fields": {"title": "Oral History Center"}},
    {"model": "fund","pk": "FB0515000","fields": {"title": "The Women Leaders at Berkeley Fund"}},
    {"model": "fund","pk": "FB0519000","fields": {"title": "The University Library Digitization Fund"}},
    {"model": "fund","pk": "FB0528000","fields": {"title": "Fund for the Chemistry Library"}},
    {"model": "fund","pk": "FB0539000","fields": {"title": "Moffitt Library Collection Fund"}}];
  }
});
