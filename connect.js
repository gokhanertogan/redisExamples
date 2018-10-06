var redis = require('redis');
var client = redis.createClient();

for (let index = 0; index < 100; index++) {
  client.rpush('mylist', 'World'+index, function (err, res) {
    console.log(res); // 1
  });
}

client.lrange('mylist', 0, -1, function (err, res) {
  console.log(res);
});

client.del('mylist', function (err, res) {
  console.log(res);
});