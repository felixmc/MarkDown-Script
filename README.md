# MarkDown-Script
MarkDownScript, MDScript for short, is a lightweight scripting layer that intends to make the task of writing and maintaining MarkDown documents easier on the author. It does so by providing features such as comments and variables.

MDScript is **not** a view engine.

MDScript is under development, so syntax and interface are subject to change.


## Usage

You can use MDScript to convert MDScript files (`.mds`) to either MarkDown or directly to HTML.


Say we have the follow MDScript file (found in `samples/src/sample1.mds`):
```
@version: 2.3
@author: Jane Doe

# AppSoft v@{var}
__by @{author}__

@// finish this paragraph
Lorem impsum dolores sit amet..
```


Here is how to convert it from MDScript to Markdown:
```js
var mdscript = require('md-script');
var options = {};

mdscript.fileToMD('samples/src/sample1.mds', options, function(err, output) {
  console.log('MD output:', output);
});
```

Here is how to convert it from MDScript directly to HTML:
```js
var mdscript = require('md-script');
var options = {};

mdscript.fileToHTML('samples/src/sample1.mds', options, function(err, output) {
  console.log('MD output:', output);
});
```


### Examples

Run `node test sample1.mds` for an example.


### Command Line

Coming soon



### Options

Coming soon



## Features



### Variables
Variables can be defined anywhere within a document, on a new line as follows:

```
@author: Jane Doe
@version: 1.2


### AppSoft v@{version}
```

#### Data Types
MDScript currently interprets all variables as strings.



### Comments
MDScript supports end-of-line-style comments with the following syntax:

```
@// needs more research
### Some heading
```
