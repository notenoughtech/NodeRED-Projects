var seconds = Date.now();
var timeout = flow.get("timeout");
var timer = (timeout * 60000) + seconds;
flow.set("timer_state", true);
flow.set("timer", timer);
msg.payload = timeout;
return msg;