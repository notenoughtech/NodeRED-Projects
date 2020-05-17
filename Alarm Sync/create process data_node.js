var x = msg.payload.time;
var phone = msg.payload.phone;

// alarm ID
var z1 = /id=(.*?),/.exec(x);
var id = parseInt(z1[1]);

//alarm time
var z2 = /time=(.*?),/.exec(x);
var reg = /(\d{2})-(\d{2})-(\d{4}) (\d{2}):(\d{2})/;
var alarm = reg.exec(z2);
var dateObject = new Date(  (+alarm[3]),
                            (+alarm[1])-1, // Careful, month starts at 0!
                            (+alarm[2]),
                            (+alarm[4]),
                            (+alarm[5]));
                            
var year    = (+alarm[3]);
var month   = (+alarm[1]);
var day     = (+alarm[2]);
var hours   = (+alarm[4]);
var minutes = (+alarm[5]);

// label length
var z5 = /labelLength=(.*?)\}/.exec(x);
var labellength = parseInt(z5[1]);


msg.payload = { "id": id, 
                "alarm":   dateObject, 
                "label":   labellength, 
                "year":    year, 
                "month":   month, 
                "day":     day, 
                "hours":   hours, 
                "minutes": minutes,
                "phone":   phone,
                "enabled": true};

return msg;