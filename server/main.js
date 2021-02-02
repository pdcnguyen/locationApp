import { Meteor } from "meteor/meteor";
import { Locations } from "../imports/api/locations";

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
  "location.insert"(location) {
    Locations.insert({
      address: location.address,
      zipCode: location.zipCode,
      country: location.country,
      createdAt: new Date(),
    });
  },
  "location.delete"(id) {
    Locations.remove(id);
  },
});
