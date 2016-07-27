var mod1 = require('./module1.js');
var module1 = new mod1();
var mod2 = require('./module2.js');
var module2 = new mod2();

this.id = 10;
module1.increament();
module1.print();
module2.print();
