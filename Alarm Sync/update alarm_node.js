var alarmsMi9    = flow.get("alarmsMi9");
var alarmsPixel3 = flow.get("alarmsPixel3");

var hours          = msg.payload.hours;
var minutes        = msg.payload.minutes;
var hoursDisplay   = pad(hours);
var minutesDisplay = pad(minutes);

var id         = msg.payload.id;
var prevId     = msg.payload.prevId;
var daysofweek = msg.payload.daysofweek;
var label      = msg.payload.label;
var phone      = msg.payload.phone;
var enabled    = msg.payload.enabled;

//leading zeros
function pad(n) {return (n < 10) ? ("0" + n) : n;}

if(alarmsMi9 === undefined){
    alarmsMi9 = [];
}
if(alarmsPixel3 === undefined){
    alarmsPixel3 = [];
}
// get daysofweek processed as string
var daysAsString = Object.keys(daysofweek).filter(x => daysofweek[x]).join(' ');

if(phone === "Xiaomi Mi 9"){
    var pos = alarmsMi9.map(function(e) { return e.id; }).indexOf(prevId);
    var date1 = alarmsMi9[pos].alarm.date;
    var alarmtime = alarmsMi9[pos].alarm.alarmtime; 
    var a1 = {"id": id, 
              "alarm":{"hours":             hours,
                       "minutes":           minutes,
                       "daysofweek":        daysofweek,
                       "daysofweekDisplay": daysAsString,
                       "label":             label,
                       "enabled":           enabled,
                       "alarmDisplay":      hoursDisplay +":"+ minutesDisplay,
                       "date":              date1,
                       "alarmtime":         alarmtime}};
                       
    alarmsMi9[pos]= a1;
    flow.set("alarmsMi9", alarmsMi9);
}

if(phone === "Google Pixel 3"){
    var pos = alarmsPixel3.map(function(e) { return e.id; }).indexOf(prevId);
    var date2 = alarmsPixel3[pos].alarm.date;
    var alarmtime = alarmsPixel3[pos].alarm.alarmtime; 
    var a2 = {"id": id, 
              "alarm":{"hours":             hours,
                       "minutes":           minutes,
                       "daysofweek":        daysofweek,
                       "daysofweekDisplay": daysAsString,
                       "label":             label,
                       "enabled":           enabled,
                       "alarmDisplay":      hoursDisplay +":"+ minutesDisplay,
                       "date":              date2,
                       "alarmtime":         alarmtime}};

    alarmsPixel3[pos] = a2;
    flow.set("alarmsPixel3", alarmsPixel3);
}

return msg;