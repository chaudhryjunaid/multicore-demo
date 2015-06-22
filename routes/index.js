var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var fn = function(n) {
        var a = 0, b = 1, f = 1;
        for(var i = 2; i <= n; i++) {
            f = a + b;
            a = b;
            b = f;
        }
        return f ;
    };
    var n = getRandomInt(35, 50);
    var f = fn(n);
    for (var k=0; k<50000000; k++){

    }
    res.send({n: f, pid: process.pid});
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = router;
