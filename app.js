var fs = require('fs');
var express_all_allow = require('express-all-allow');
var browserify = require('browserify');
var findImports = require('find-imports');
var express = require('express');
var app = express();
app.use(express_all_allow());

app.get('/module/:module', function(req, res){
    if (!fs.existsSync('node_modules')){
    fs.mkdirSync('node_modules');
  }
  var { exec } = require('child_process');
exec(`npm list | grep ${req.params.module}`, function(err, stdout, stderr){
if (stdout == ""){
exec('npm install ' + req.params.module, function(err, out, stderr){
  console.log(err, out, stderr);
   var b = browserify();
  
b.require(req.params.module);
b.bundle().pipe(res);
})
} else {
 var b = browserify();
  
b.require(req.params.module);
b.bundle().pipe(res);
}
});
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
