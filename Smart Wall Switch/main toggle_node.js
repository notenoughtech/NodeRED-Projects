var x = flow.get("bedroom_main");

if(x === false){
    msg.payload = true;
    flow.set("bedroom_main", true);
    flow.set("bedroom_lamp_override", true);
    return msg;
}
else{
    msg.payload = false;
    flow.set("bedroom_main", false);
    flow.set("bedroom_lamp_override", true);
    return msg;
}