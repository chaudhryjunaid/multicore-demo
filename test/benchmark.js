var siege = require('siege');

// run cpu bound service benchmark
siege()
    .on(3000)
    .for(1000).times
    .concurrent(100)
    .get('/')
    .attack();

// run io bound service benchmark
//siege()
//    .on(3000)
//    .for(1000).times
//    .get('/io')
//    .concurrent(50)
//    .attack();
