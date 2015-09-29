var srcDir = './samples/src/';
var outDir = './samples/build/';

var argv     = require('minimist')(process.argv.slice(2));
var mdScript = require('./index');
var markdown = require('markdown').markdown;

if (!argv._[0]) {
  console.error('No input file provided.');
  process.exit(1);
}

var srcFile = srcDir + argv._[0];
var outFile = argv._[1] ? (argv._[1][0] == '.' || argv._[1][0] == '/' ? argv._[1] : outDir + argv._[1]) : null;

var options = {

};

mdScript.fileToMD(srcFile, options, function(err, output) {
  if (err) {
    console.log('Parsing errors:');
    console.error(err);
  } else {
    if (outFile) {
      require('fs').writeFile(outFile, output, function(err) {
        if (err) {
          console.log('Error saving output to file:');
          console.error(err);
        } else {
          console.log('Output saved to', outFile);
        }
      });
    } else {
      console.log('Mardown output:');
      console.log(output);

      console.log('\n');
      console.log('HTML output:');
      console.log(markdown.toHTML(output));
    }
  }
});
