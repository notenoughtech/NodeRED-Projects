var IP = "192.168.1.179";
var port = "8081";
var state = msg.payload;

//var mode = "info";  //device info

//possible modes
 var mode = "switch"  //relay control
// var mode = "startup"  //startup control
// var mode = "signal_strength"  //signal
// var mode = "pulse"  //inching
// var mode = "wifi"  //relay control
// var mode = "ota_unlock"  //ota unlock
// var mode = "ota_flash"  //ota flash


//Sonoff info
var data = {
    "deviceid": "",
    "data": {"switch": state}  //on|off values
}

/* other data values

//switch relay
var data = {
    "deviceid": "",
    "data": {"switch": "on"}  //on|off values
}

//startup behaviour
var data = {
    "deviceid": "", 
    "data": {"startup": "stay"    }   //on|off|stay values
};

//inching
var data = {
    "deviceid": "",
     "data": {"pulse": "on","pulseWidth": 2000} //on|off values
};
//wifi credentials
var data = {
    "deviceid": "",
    "data": {"ssid": "eWeLink","password": "WeLoveIoT"}  //ssid & pass
}
flash OTA
var data = {
    "deviceid": "",
     "data": {
        "downloadUrl": "http://192.168.1.184/ota/new_rom.bin", 
        "sha256sum": "3213b2c34cecbb3bb817030c7f025396b658634c0cf9c4435fc0b52ec9644667"
    }
}
//otain values - send an empty
var data = {
    "deviceid": "",
    "data": {}  
}

------>*/

msg.payload =  data;
msg.url = "http://"+IP+":"+port+"/zeroconf/"+ mode;

return msg;