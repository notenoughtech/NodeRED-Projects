var button = msg.payload;
var topic = msg.topic;
var alarm = context.get("alarmState");
var timeout = (flow.get("timeout")) *1000;

// delayed payload
function inching(){
    let alarm1 = context.get("alarmState");
    if(alarm1 === true){
        msg = {payload: false};
        context.set("alarmState", false);
        msg1 = {payload: false, topic: "inching"};
        node.send([msg, msg1]);
    }
}

if(topic !== "inching"){
// alarm not set
    if(alarm === false){
        if(button === true){
            context.set("alarmState", true);
            setTimeout(inching, timeout);
            return [msg, null];
        }
        if(button === false){
            return[msg, null];
        }
    }
//alarm set    
    if(alarm === true){
        if(button === true){
            let x = setTimeout(inching, timeout);
            clearTimeout(x);
            setTimeout(inching, timeout);
            return [msg, null];
        }
        
        if(button === false){
            let x = setTimeout(inching, timeout);
            clearTimeout(x);
            return[msg, null];
        }
    }
}

