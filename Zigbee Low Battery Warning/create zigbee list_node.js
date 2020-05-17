var x = {"devices":msg.payload.devices};
var devices = [];
var device = Object.keys(x.devices);
var name = Object.values(x.devices);

var arr = Object.entries(x.devices);
    for ([device,name] of arr) {
        var n = name.friendly_name;
        
        var a = {device, "name": n}
        
        devices.push(a);
        flow.set("ZigbeeDeviceNames", devices);
    }

return msg;