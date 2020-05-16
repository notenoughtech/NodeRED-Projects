var x = flow.get("bedroom_lamp");

if(x === false){
    msg.payload = true;
    flow.set("bedroom_lamp", true);
    flow.set("bedroom_lamp_override", true);
    return msg;
}
else{
    msg.payload = false;
    flow.set("bedroom_lamp", false);
    flow.set("bedroom_lamp_override", true);
    return msg;
}