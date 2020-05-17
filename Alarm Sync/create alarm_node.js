var alarmsMi9= flow.get("alarmsMi9");
var alarmsPixel3= flow.get("alarmsPixel3");

var hours = msg.payload.hours;
var minutes = msg.payload.minutes;
var hoursDisplay = pad(hours);
var minutesDisplay = pad(minutes);

var year = msg.payload.year;
var month =msg.payload.month;
var day = msg.payload.day;
var daysofweek = msg.payload.daysofweek;
var alarmtime = msg.payload.alarm;

var label = msg.payload.label;
var phone = msg.payload.phone
var enabled = msg.payload.enabled;
var id = msg.payload.id;



if(alarmsMi9 === undefined){
    alarmsMi9 = [];
}
if(alarmsPixel3 === undefined){
    alarmsPixel3 = [];
}

//leading zeros
function pad(n) {return (n < 10) ? ("0" + n) : n;}

if(phone === "Xiaomi Mi 9"){
    var pos = alarmsMi9.map(function(e) { return e.id; }).indexOf(id);
    if(pos === -1){
        var a1 = {"id": id, 
                  "alarm":{ 
                    "hours":        hours,
                    "minutes":      minutes,
                    "daysofweek":   daysofweek,
                    "label":        label,
                    "enabled":      enabled,
                    "alarmDisplay": hoursDisplay +":"+ minutesDisplay,
                    "date":         pad(day) +"-"+ pad(month) +"-"+ year,
                    "alarmtime":    alarmtime}
        };
        alarmsMi9.push(a1);
        flow.set("alarmsMi9", alarmsMi9);
    }
}

if(phone === "Google Pixel 3"){
    var pos = alarmsPixel3.map(function(e) { return e.id; }).indexOf(id);
    if(pos === -1){
        var a2 = {"id": id, 
                  "alarm":{ 
                    "hours":        hours,
                    "minutes":      minutes,
                    "daysofweek":   daysofweek,
                    "label":        label,
                    "enabled":      enabled,
                    "alarmDisplay": hoursDisplay +":"+ minutesDisplay,
                    "date":         pad(day) +"-"+ pad(month) +"-"+ year,
                    "alarmtime":    alarmtime}
        };
        alarmsPixel3.push(a2);
        flow.set("alarmsPixel3", alarmsPixel3);
    }
}

return msg;