function PerformanceTest(implement, params, repetitions) {
  this.implement = implement;
  this.params = params;
  this.repetitions = repetitions || 10000;
  this.average = 0;
}

PerformanceTest.prototype = {
  initialize: function() {
    var begin, end, sum = 0;

    for (var i = 0, x = this.repetitions; i < x; i++) {
      begin = +new Date();
      this.implement(this.params);
      end = +new Date();
      sum += end - begin;
    }

    this.average = sum / this.repetitions;

    return console.log('Average time after ' + this.repetitions + "executions = " + this.average);
  }
}

