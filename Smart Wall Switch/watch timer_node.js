var timer = flow.get("timer_state");
var now = msg.payload;

if(timer === true){
    if(now > timer){
        msg.payload = false;
        flow.set("timer", 0);
        flow.set("timer_state", false);
        flow.set("bedroom_lamp_override", true);
        return msg;
    }
}