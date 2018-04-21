var http = require("http");
var Discord = require("discord.js");
var client = new Discord.Client();
client.on('ready', () => {
  console.log(`----------------`);
     console.log(`ON ${client.guilds.size} Servers `);
   console.log(`---------------`);
 console.log(`Logged in as ${client.user.tag}!`);

  client.user.setStatus("online")

});

var posthtml =


'<html><head><title>i love u</title></head>' +

'<body>' +
'<form method="POST" action="/">' +
'say : <input name="say123"><br>' +
'<input type="submit">' +
'</form>' +
'</body></html>';


var qs = require("querystring");

http.createServer( function  (req,res){
res.end(posthtml);
if(req.method=='POST'){
  var body = "";
  req.on('data', function(data){
    body=body+data;
  });
  req.on('end', function(){
        var post=qs.parse(body);
        console.log(post['say123']);
        client.user.setGame(post['say123'])

  });
}
}).listen(8888);
console.log("hello iam listen http://127.0.0.1:8888/")
client.login("NDMzNzk2NTI3Njk4MzQ1OTg1.DbCHyQ.8oY3jbWLdDngT7iY4z3CsqrEgnA");
