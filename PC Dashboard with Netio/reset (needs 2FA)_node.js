var IP = "192.168.1.93";
var command = 2;

msg.url = "http://"+IP+"/netio.json";

msg.payload = {
 "Outputs": [{
  "ID": 1,
  "Action": command
 }]
};


return msg;