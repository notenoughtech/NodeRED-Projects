var lamp = msg.payload;
flow.set("bedroom_lamp", lamp);
msg.payload = lamp;
return msg;