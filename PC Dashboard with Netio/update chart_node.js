var arrayD = flow.get("TotalUseByDay");
var arrayH= flow.get("TotalUseByHour");
var averageperhour = flow.get("AverageUsePerHour");

//if array doen't exist
if(arrayD === undefined){
    arrayD = [0];
    flow.set("TotalUseByDay", arrayD);
}
if(arrayH === undefined){
    arrayH = [0];
    flow.set("TotalUseByHour", arrayH);
}

//function
function add(accumulator, a) {
            return accumulator + a}


//set data, label and series for the chart

var m = {};
var count = arrayD.length;

if(count === undefined || count < 2){
    
    m.labels = ["Today"];
    m.data = [[]];
    m.series = [];
    
    
    if(arrayH[0] === 0){
        m.data[0].push(averageperhour.toFixed(2));
        m.series.push("Watts/24h");
    }
    if(arrayH[0] > 0){    
        var usedperday = arrayH.reduce(add);
        m.data[0].push(usedperday.toFixed(2));
        m.series.push("Watts/24h");
    }
    
    
    
    return {payload:[m],topic:msg.topic};
}

else{
    
    m.labels = ["Today","Yesterday","Day3","Da4","Day5","Day6", "Day7"];
    m.data = [[]];
    m.series = [];
    if(arrayH[0] === 0){
        m.data[0].push(averageperhour.toFixed(2));
        m.series.push("Watts/24h");
    }
    if(arrayH[0] > 0){    
        usedperday = arrayH.reduce(add);
        m.data[0].push(usedperday.toFixed(2));
        m.series.push("Watts/24h");
    }m.series.push("Watts/24h");

for (i=0; i<count; i++){
    m.data[0].push(arrayD[i].toFixed(2));
    m.series.push("Watts/24h");
} 

return {payload:[m],topic:msg.topic};
}