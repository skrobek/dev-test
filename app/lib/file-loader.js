var fs = require("fs");
var Converter = require("csvtojson").Converter;
var source = __dirname + '/../assets/';
var converter = new Converter();


module.exports = function(filename, cb) {
  var fileStream = fs.createReadStream(source + filename);

  converter.on("end_parsed", function (jsonObj) {
    cb(jsonObj);
  });

  fileStream.pipe(converter);
}
