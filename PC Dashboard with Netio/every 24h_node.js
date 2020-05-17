var totalD = flow.get("TotalUseByHour");
var weektotal = flow.get("TotalUseByDay");
flow.set("TimeDay", 0);

if(!totalD || !totalD.length || totalD === undefined){
        totalD = [0];
        return msg;
    }


function add(accumulator, a) {
            return accumulator + a}
        

//Watts per 24h
var usedperday = totalD.reduce(add);

weektotal.unshift(usedperday);
flow.set("TotalUseByDay", weektotal);
totalD.splice(0,totalD.length);
totalD = [0];
flow.set("TotalUseByHour",totalD);



var totalW = flow.get("TotalUseByDay");

if(!totalW || !totalW.length || totalW === undefined){
        totalW = [0];
        return msg;
    }



//keep x number of elements in an array

var position = 7;

if(totalW[position] === undefined) {
    //do nothing if array empty
}
else {
    totalW.splice(position, 7); //remove 1 element from position
    flow.set("TotalUseByDay", totalW);
    
}
