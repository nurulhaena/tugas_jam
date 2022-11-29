var panggiluntukinput = require('readline-sync')
var jam =panggiluntukinput.questionInt("input jam: ");
console.log(jam*3600 + "detik")
var menit = panggiluntukinput.questionInt("input menit");
console.log(menit*60 + "detik");
