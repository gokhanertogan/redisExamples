var redis = require('redis');
var client = redis.createClient();

client.rpush('mylist', 'World' + index, function (err, res) {
  console.log(res); // 1
});

client.lrange('mylist', 0, -1, function (err, res) {
  console.log(res);
});
