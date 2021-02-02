import { Meteor } from "meteor/meteor";
import { Template } from "meteor/templating";
import { Locations } from "../api/locations";

import "./inputArea.html";

//get value from the form and add into the database
Template.inputArea.events({
  "submit .input-form": function (event) {
    event.preventDefault();

    const input = event.target;
    const location = {
      address: input.address.value,
      zipCode: input.zipCode.value,
      country: input.country.value,
    };

    input.address.value = "";
    input.zipCode.value = "";
    input.country.value = "";

    Meteor.call("location.insert", location);

    return false;
  },
});
