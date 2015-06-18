var siege = require('siege');

// run cpu bound service benchmark
siege()
    .on(3000)
    .for(10000).times
    .concurrent(1000)
    .get('/')
    .attack();

// run io bound service benchmark
//siege()
//    .on(3000)
//    .for(1000).times
//    .get('/io')
//    .concurrent(50)
//    .attack();
