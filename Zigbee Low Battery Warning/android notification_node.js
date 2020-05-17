var data = flow.get("zigbeeBattery");
var batteryWarning =  flow.get("BatteryWarning");
var device = flow.get("NotificationDevice");


var key = global.get(device);
var url = "https://autoremotejoaomgcd.appspot.com/sendmessage";
var command = "NOT20";



var battPush = [];
var buttons = {};
var battBuy = [];
var battLink = [];

for (var i=0; i < data.length; i++) {
    var batt = data[i].info.battery;
    var battType = data[i].info.batteryType;
    if(batt <= batteryWarning){
        var name = data[i].info.name;
        if(battType === false){
            var battTypeDisplay = "battery type configuration.\ ";
            
        }
        else { var battTypeDisplay = battType;
                battBuy.push(battType);
                battLink.push(data[i].info.batteryURL);
        }
    var lowBatt = "<li><strong>"+name + ":</strong><span style=\"color: #ff9900;\"> "+ batt +"%</span><span style=\"color: #333333;\"><em> needs </em><strong>" + battTypeDisplay + "</strong></span></li>";
    battPush.push(lowBatt);
    }
}


if(battPush.length > 0){

var reg = battPush.toString();
var reg1 = reg.replace(/,/g, "");

var body = {
  "text": {
    "text": "A number of your Zigbee devices need a new battery" ,    
    "textexpanded": "<ul>"+ reg1 + "</ul>"
  },
  "title": {
    "title": "Zigbee Low Battery Warning",
    "titleexpanded": "Zigbee Low Battery Warning"
  },
  "icons": {
    "navbaricon": "https://raw.githubusercontent.com/google/material-design-icons/master/device/2x_web/ic_battery_alert_black_48dp.png",
    "bigicon": "https://raw.githubusercontent.com/google/material-design-icons/master/device/2x_web/ic_battery_alert_black_48dp.png",
    "smallicon": "https://raw.githubusercontent.com/google/material-design-icons/master/device/2x_web/ic_battery_alert_black_48dp.png",
    "iconexpanded": "https://raw.githubusercontent.com/google/material-design-icons/master/device/2x_web/ic_battery_alert_black_48dp.png"
  },
  "notificationid": "ZigbeeBattery",
  "persistent": false,
  "priority": 1,
  "color": "#b9512c",
  "backgroundcolor": "#fafafa",
  "picture": "pictureurl",
  "buttons": ""
};


var battBuy1 = [ ...new Set(battBuy) ];
var battLink1 = [ ...new Set(battLink) ];

var objButton ={};
for (var a = 0; a <battBuy1.length; a++) {
    var b = a +1
    var keyButton = "button"+ b;
    
    objButton =  {
        "icon": "iconURL",
        "label": "Buy " + battBuy1[a],
        "command": "buybattery*-*" + battLink1[a]
    };
    node.warn(objButton);
    buttons[keyButton] = objButton;
    node.warn(buttons);
}

body["buttons"] = [buttons];


msg.data = body;
var x = JSON.stringify(body);
var encodedBody = encodeURIComponent(x);

msg.url = url + "?key=" + key + "&message=" +command + "=:="+ encodedBody;
return msg;
}