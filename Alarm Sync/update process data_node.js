var x = msg.payload.time;
var phone = msg.payload.phone;

//capture 2 update outcomes in regex groups
var data = x.match(/[^{]*\{(.*?)\}[^{]*\{(.*?)\}/);
var extractJson = x => x
            .split(', ')
            .map(x => x.split('='))
            .reduce((p,c) => {
                p[c[0]]=c[1]; 
                return p;
            }, {});
            
var prev = extractJson(data[1]);
var current = extractJson(data[2]);    

//process daysofweek as an array
var days = {
    'M':  false,
    'T':  false,
    'W':  false,
    'Th': false,
    'F':  false,
    'Sa': false,
    'Su': false,};
    
current.daysOfWeek.replace(/[\[\]]/g, '').split(' ').forEach(x => days[x] = true);

//compose the payload
msg.payload = { "enabled":    current.enabled,
                "id":         parseInt(current.id, 10),
                "prevId":     parseInt(prev.id, 10),
                "hours":      parseInt(current.hour, 10),
                "minutes":    parseInt(current.minute, 10),
                "daysofweek": days,
                "label":      parseInt(current.labelLength, 10),
                "phone":      phone};

return msg;