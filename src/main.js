const express = require('express');

const app = express();
const Redis = require("ioredis");

const port = 8080;


const cluster = new Redis.Cluster([
    {
        port: 6373,
        host: "redis1",
    },
    {
        port: 6374,
        host: "redis2",
    },
    {
        port: 6375,
        host: "redis3",
    },
    {
        port: 6376,
        host: "redis4",
    },
    {
        port: 6377,
        host: "redis5",
    },
    {
        port: 6378,
        host: "redis6",
    },
]);

cluster.set("foo", "bar");
cluster.get("foo", (err, res) => {
    // res === 'bar'
    console.log('res :>> ', res);
});


app.listen(port, function () {
    console.log('Example app listening on port 8080!');
  });
