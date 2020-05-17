var phone =  msg.payload.phone;

//output 1
if(phone === "Xiaomi Mi 9"){
    //array clean up
    var array = flow.get("alarmsMi9");
    var arr = array.filter(function(e){return e});
    flow.set("alarmsMi9", arr);
    msg.options = arr;
    return[msg, null];
}

//output 2
if(phone === "Google Pixel 3"){
    //array clean up
    var array = flow.get("alarmsPixel3");
    var arr = array.filter(function(e){return e});
    flow.set("alarmsPixel3", arr);
    msg.options = arr;
    return[null, msg];
}
