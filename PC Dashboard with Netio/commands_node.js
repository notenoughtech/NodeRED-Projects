var x = flow.get("Power_function");

if(x === "wol"){
    msg.payload = "Desktop will wake up now";
    msg.topic = "Computer: DESKTOP";
    return [msg, null, null];
}

if(x === "sleep"){
    msg.payload = "Desktop is going to sleep";
    msg.topic = "Computer: DESKTOP";
    return [null, msg, null];
}

if(x === "reset"){
    msg.payload = "Desktop will reset now";
    msg.topic = "Computer: DESKTOP";
    return [null, null, msg];
}