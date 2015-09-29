var fs = require('fs');

var regex = {
  variable: new RegExp('\\s*@([a-z]\\w+)\\s*:(.*)', 'i'),
  comment: new RegExp('//.*'),
  whiteLine: new RegExp('^@\\s*$')
};


module.exports =  function(text, options, cb) {
  var output = '';
  var data = {};

  var lines = text.split('\n').map(function(line, index) {
    if (regex.variable.test(line)) {
      var varData = regex.variable.exec(line);
      data[varData[1]] = varData[2].trim();

      return null;
    } else if (regex.comment.test(line)) {
      var newLine = line.replace(regex.comment, '');
      if (regex.whiteLine.test(newLine)) {
        return null;
      } else {
        return newLine;
      }
    }

    return line;
  });


  lines = lines.filter(function(line) { return line !== null; });
  output = lines.join('\n');

  Object.keys(data).forEach(function(variable) {
    output = output.replace(new RegExp('@{' + variable + '}', 'g'), data[variable]);
  });

  cb(null, output);
};
