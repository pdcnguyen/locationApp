import { Accounts } from "meteor/accounts-base";
import "../imports/ui/body.js";

Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY",
});
