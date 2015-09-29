var fs = require('fs');
var markdown = require('markdown').markdown;

var parseMDS = require('./lib/parser');

var MDScript = {

  toMD: function(text, options, cb) {
    console.log('Raw Input:');
    console.log(text);

    return parseMDS(text, options, function(err, data) {
      console.log('\n\nMarkDown Output:');
      console.log(data);

      cb(err, data);
    });
  },

  fileToMD: function(file, options, cb) {
    fs.readFile(file, 'utf8', function(err, data) {
      if (err) {
        return cb(err);
      } else {
        return MDScript.toMD(data, options, cb);
      }
    });
  },

  toHTML: function(text, options, cb) {
    MDScript.toMD(text, options, function(err, output) {
      return cb(err, err ? output : markdown.toHTML(output));
    });
  },

  fromFileToHTML: function(file, options, cb) {
    MDScript.fileToMD(text, options, function(err, output) {
      return cb(err, err ? output : markdown.toHTML(output));
    });
  }

};

module.exports = MDScript;
