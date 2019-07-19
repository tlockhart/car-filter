import Route from '@ember/routing/route';

export default class CarsRoute extends Route {

  model(){
    // // model(){
    // this.store.findAll('car') // => GET /blog-posts
    // .then(function(cars) {
    //   // Do something with `blogPosts`
    //   return cars.filteryBy('make', params.make);
    // });

    //return all
    return this.store.findAll('car');
  }
}
