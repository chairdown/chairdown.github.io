new Vue({
  el: '#app',
  data: {
    seconds: 0,
    minutes: 0,
    hours: 0,
    days: 0,
    diff: 0,
    interval: 1000,
    returnDate: '2017-11-15 12:00',
  },
  methods: {
    setDiff: function() {
      var now = moment();
      var then = moment(this.returnDate);
      this.diff = then.diff(now);
    },
    calculateTimeFromMillis: function(){
      this.seconds = parseInt((this.diff / 1000) % 60);
      this.minutes = parseInt((this.diff / (1000 * 60)) % 60);
      this.hours = parseInt((this.diff / (1000 * 60 * 60)) % 24);
      this.days = parseInt((this.diff / (1000 * 60 * 60 * 24)));
    },
    updateTime: function() {
      this.diff = this.diff - this.interval;
      this.calculateTimeFromMillis();
    }
  },
  mounted: function() {
    moment.locale('dk');
    this.setDiff();
    setInterval(this.updateTime, this.interval);
  }
});
