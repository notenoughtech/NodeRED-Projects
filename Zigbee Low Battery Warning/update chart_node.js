var data = flow.get("zigbeeBattery");

arr = [];

if(data.length !== undefined){

var count =  data.length;
    for ( i=0; i < count; i++){
        var nmsg = {payload:data[i].info.battery, topic:data[i].info.name};
        arr.push(nmsg);
    }

return [arr];


}