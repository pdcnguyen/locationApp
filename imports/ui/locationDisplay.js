import { Meteor } from "meteor/meteor";
import { Template } from "meteor/templating";
import { Locations } from "../api/locations";
import { ReactiveVar } from "meteor/reactive-var";

import "./locationDisplay.html";

import "./location.js";

//Set locations array to be a reactive component => rerender whenever changed
Template.locationDisplay.onCreated(function () {
  this.locationArray = new ReactiveVar(Locations.find({}));

});



function sortLocations(base) {
  switch (base) {
    case "address":
      return Locations.find({}, { sort: { address: 1 } });

    case "zipCode":
      return Locations.find({}, { sort: { zipCode: 1 } });

    case "country":
      return Locations.find({}, { sort: { country: 1 } });

    default:
      return Locations.find({});
  }
}

//find all matching substrings in all fields case-insensitive
function filterLocations(text) {
  return Locations.find({
    $or: [
      { address: { $regex: text, $options: "i" } },
      { zipCode: { $regex: text, $options: "i" } },
      { country: { $regex: text, $options: "i" } },
    ],
  });
}

Template.locationDisplay.helpers({
  locations() {
    return Template.instance().locationArray.get();
  },
  ready(){
      return Template.instance().ready.get();
  }
});

Template.locationDisplay.events({
  "click #sort-address"() {
    Template.instance().locationArray.set(sortLocations("address"));
  },
  "click #sort-zipCode"() {
    Template.instance().locationArray.set(sortLocations("zipCode"));
  },
  "click #sort-country"() {
    Template.instance().locationArray.set(sortLocations("country"));
  },
  "input #search-text"(event) {
    Template.instance().locationArray.set(filterLocations(event.target.value));
  },
});

