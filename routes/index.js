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
        return f;
    };
    var n = req.param('n');
    if (!n) n = 1000;
    res.send({n: fn(n)});
});

module.exports = router;
