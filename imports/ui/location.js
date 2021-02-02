import { Meteor } from "meteor/meteor";
import { Template } from "meteor/templating";
import {Locations} from '../api/locations'
import "./location.html";

Template.location.events({
  "click .delete-btn": function (event) {
      Meteor.call('location.delete', this._id);
      Locations.remove(id);
  },
});
