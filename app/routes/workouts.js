import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        return this.store.find('workouts');
//        var url = 'http://wo.thingit.nl/workouts';
//        return Ember.$.getJSON(url).then(function(workouts) {
//            return workouts;
//        });
    }

});
