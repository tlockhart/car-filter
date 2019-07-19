import DS from 'ember-data';
const { Model, attr } = DS;

export default class CarModel extends Model {
  //Define the structure of a car model object
  // https://emberigniter.com/getting-started-ember-octane-tutorial/
  // @attr() id;
  @attr() make;
  @attr() model;
  @attr() year;
  // @attr() year;

  // make = DS.attr();
  // mode = DS.attr();
  // year = DS.attr();
  // make: DS.attr(),
  // model: DS.attr(),
  // year: DS.attr(),
}
