# multicore-demo
A demo for profiling the effect of using multicore node.js on express service throughputs

Note: The default express app included has been generated with express generator and
customized to include a fibonacci sequence generator service at the root path(/).


Run default Express app:
node ./bin/www

Run multicore Express app:
node ./bin/multicore.js

Run jmeter to test throughput performances.
