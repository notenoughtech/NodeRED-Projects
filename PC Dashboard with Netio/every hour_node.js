var total = flow.get("TotalUseByHour");

if(total === undefined){
    total = [0];
    flow.set("TotalUseByHour", total);
}

if(!total || !total.length || total === undefined){
        total = [0];
    }

//push element to an array 1st postition


var value = flow.get("AverageUsePerHour");
total.unshift(value);
flow.set("TotalUseByHour", total);
flow.set("AverageUsePerHour", 0);