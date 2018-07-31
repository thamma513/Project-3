const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
    let errors = {};

    dataFields = ["name", "email", "username", "password", "password2"];
    dataFields.forEach(field => {
      data[field] = !isEmpty(data[field]) ? data[field] : "";
      if (Validator.isEmpty(data[field])) {
        errors[field] = `${field} field is required`;
    }
    });
  };