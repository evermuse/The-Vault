'use strict';

module.exports = function() {

  var secret = {};

  return {

    setValue : function( key, value ) {

      secret[key] = value;

    },

    getValue : function( key ) {

      if (secret.hasOwnProperty(key)) {

        return secret[key];

      } else {

        return null;

      }

    }

  };

};


