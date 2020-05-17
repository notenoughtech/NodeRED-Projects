//get values
var totalload =  flow.get("TotalLoad");
var totalenergy = flow.get("TotalEnergy");
var refresh = flow.get("refresh_rate");
var totalusebyday = flow.get("TotalUseByDay");
var totalusebyhour = flow.get("TotalUseByHour");
var timetotal = flow.get("TimeTotal");
var timeday = flow.get("TimeDay");
var cost = global.get("PowerCost");
var averageuseperhour = flow.get("AverageUsePerHour");

//ERROR HANDLING









// functions
function calcTimeHM(hh){
    var hours = ("0"+Math.floor((hh%86400)/3600)).slice(-2);
    var minutes = ("0"+Math.floor((hh%3600)/60)).slice(-2);
    return hours + "h " + minutes +"min";
}

function calcTimeDHM(hh){
    var days = ("0"+Math.floor(hh/86400)).slice(-2);
    var hours = ("0"+Math.floor((hh%86400)/3600)).slice(-2);
    var minutes = ("0"+Math.floor((hh%3600)/60)).slice(-2);
    return days+"d " +hours + "h " + minutes +"min";
}

function add(accumulator, a) {
            return accumulator + a}

//WATTAGE

//total kWh
var kw = totalenergy/1000;
//today so far W
var todayw1 = totalusebyhour[0];
if(todayw1 === 0){
    var todayw = averageuseperhour.toFixed(2);
}
if(todayw1 !== 0){
   todayw = (totalusebyhour.reduce(add) + averageuseperhour).toFixed(2);
}

// Watts used in X sec (W per h)
var houruse = ((totalload/3600)*refresh);
var currentuse = averageuseperhour +  houruse;  


//COST

//calculate the day cost per used kWh
var daycost1 = totalusebyhour[0];
if(daycost1 === 0 || undefined){
    var daycost = (averageuseperhour/1000 * cost).toFixed(2);
}
if(daycost1 !== 0){
    daycost = ((totalusebyhour.reduce(add))/1000 * cost).toFixed(2);
}
//calculate the day cost per used kWh
var totalcost = (totalenergy/1000*cost).toFixed(2);


//TIME

//calculate uptime
if(totalload => 5){
    //total uptime
    var timeT = timetotal + 10;    
    var timeTdisplay = calcTimeDHM(timeT);
    //daily so far uptime
    var timeD = timeday + 10;    
    var timeDdisplay = calcTimeHM(timeD);
}
if(totalload < 5){
    //total uptime
    timeT = timetotal;    
    timeTdisplay = calcTimeDHM(timeT);
    //daily so far uptime
    timeD = timeday;    
    timeDdisplay = calcTimeHM(timeD);
}
     
//update values
flow.set("TimeTotal", timeT);
flow.set("TimeDay", timeD);
flow.set("AverageUsePerHour", currentuse);




//final payload

msg.payload = {
    "kwh"         : kw,
    "todayw"      : todayw,
    "daycost"     : daycost,
    "totalcost"   : totalcost,
    "currentuse"  : currentuse,
    "timeT"       : timeT,
    "timeTdisplay": timeTdisplay,
    "timeD"       : timeD,
    "timeDdisplay": timeDdisplay,
    "totalload"   : totalload,
    "totalenergy" : totalenergy
};


return msg;

























