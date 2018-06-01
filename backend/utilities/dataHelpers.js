"use strict";

module.exports = function makeDataHelpers(knex) {
  return {
    getAllUsers: function() {
      return knex
      .select("*")
      .from("users")
    }
  }
}