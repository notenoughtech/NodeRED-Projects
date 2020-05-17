var x1 = msg.payload.time;
var phone = msg.payload.phone;

// alarm ID
var z1 = /id=(.*?),/.exec(x1);
var id = parseInt(z1[1]);

msg.payload = {"id": id, "phone": phone};

return msg;