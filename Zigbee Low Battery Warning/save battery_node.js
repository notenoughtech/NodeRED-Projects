var battery = msg.payload.battery;
var batteryLow = msg.payload.battery_low;
var voltage = msg.payload.voltage;
var deviceTopic  = msg.topic;
var ZigbeeDeviceNames = flow.get("ZigbeeDeviceNames");

var zigbeeBattery = flow.get("zigbeeBattery");

if(zigbeeBattery === undefined){
    zigbeeBattery = [];
}
if(zigbeeBattery === undefined){
    zigbeeBattery = [];
}

var test = isNaN(battery);

//battery info present
if(test === false){
    
    //get device ID
    var z1 = /zigbee2mqtt\/(.*)/.exec(deviceTopic);
    var id = z1[1];
    
    //get name and ID
    var posName = ZigbeeDeviceNames.map(function(e) { return e.name; }).indexOf(id);
    node.warn(posName);
    var deviceId = ZigbeeDeviceNames[posName].device;
    var deviceName = ZigbeeDeviceNames[posName].name;
    node.warn(posName);
    //optional voltage and low batt 
    var testBatt = isNaN(batteryLow);
    var testVolt = isNaN(voltage);
    
    if(testBatt === true){batteryLow = false;}
    if(testVolt === true){voltage = false;}
    
    //get time
    var time = new Date();
    
    var pos = zigbeeBattery.map(function(e) { return e.info.name; }).indexOf(deviceName);
    node.warn(pos);
    if(pos === -1){
        var a = {"device": deviceId, 
                  "info":{ 
                    "battery":    battery,
                    "timestamp":  time,
                    "batteryType": false,
                    "batteryETA":  "TBD",
                    "battery_low": false,
                    "voltage": voltage,
                    "name": deviceName}
                    };
        zigbeeBattery.push(a);
        flow.set("zigbeeBattery", zigbeeBattery);
    }
    if(pos => 0){
        var battType = zigbeeBattery[pos].info.batteryType
        var a = {"device": deviceId, 
                  "info":{ 
                    "battery":    battery,
                    "timestamp":  time,
                    "batteryType": battType,
                    "batteryETA":  "TBD",
                    "battery_low": batteryLow,
                    "voltage": voltage,
                    "name": deviceName}
                    };
    }
    zigbeeBattery[pos]= a;
    flow.set("zigbeeBattery", zigbeeBattery);
}


   

return msg;