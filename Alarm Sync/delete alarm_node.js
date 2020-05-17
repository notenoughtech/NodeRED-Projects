var alarmsMi9= flow.get("alarmsMi9");
var alarmsPixel3= flow.get("alarmsPixel3");

var id = msg.payload.id;
var phone = msg.payload.phone


if(phone === "Xiaomi Mi 9"){
    var pos = alarmsMi9.map(function(e) { return e.id; }).indexOf(id);
    delete alarmsMi9[pos];
    flow.set("alarmsMi9", alarmsMi9);
}

if(phone === "Google Pixel 3"){
    var pos = alarmsPixel3.map(function(e) { return e.id; }).indexOf(id);
    delete alarmsPixel3[pos];
    flow.set("alarmsPixel3", alarmsPixel3);
}

return msg;